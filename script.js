// Scroll Animation
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-fade');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Initial check for elements in view
handleScrollAnimation();

// Listen for scroll events
window.addEventListener('scroll', handleScrollAnimation);

// Modal Functionality
const modal = document.getElementById('uploadModal');
const generateBtn = document.querySelector('.generate-btn');
const closeBtn = document.querySelector('.close-btn');
const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const previewSection = document.getElementById('previewSection');
const previewImage = document.getElementById('previewImage');
const generateAnimeBtn = document.getElementById('generateBtn');
const videoContainer = document.getElementById('videoContainer');
const prankVideo = document.getElementById('prankVideo');

function startProcessing() {
    const uploadSection = document.querySelector('.upload-section');
    const previewSection = document.getElementById('previewSection');
    const processingSection = document.getElementById('processingSection');
    const timeRemaining = document.getElementById('timeRemaining');
    const steps = document.querySelectorAll('.processing-step .step-status');
    
    // Hide upload and preview sections
    uploadSection.style.display = 'none';
    previewSection.style.display = 'none';
    
    // Show processing section
    processingSection.style.display = 'block';
    
    // Set initial time display
    timeRemaining.textContent = '1:00';
    
    // Start countdown
    let seconds = 60;
    const countdownInterval = setInterval(() => {
        seconds--;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timeRemaining.textContent = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        
        // Update steps based on time
        if (seconds <= 45) steps[1].classList.add('completed');
        if (seconds <= 30) {
            steps[1].classList.remove('in-progress');
            steps[2].classList.add('completed');
        }
        if (seconds <= 15) steps[3].classList.add('in-progress');
        
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            showPrankVideo();
        }
    }, 1000);
}

function showPrankVideo() {
    window.location.href = 'result.html';
}

// Floating animation for hero images
const heroImages = document.querySelectorAll('.floating-image');

heroImages.forEach((img, index) => {
    img.style.animationDelay = `${index * 0.5}s`;
});

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('uploadModal');
    const closeBtn = document.querySelector('.close-btn');
    const uploadBox = document.getElementById('uploadBox');
    const fileInput = document.getElementById('fileInput');
    const previewSection = document.getElementById('previewSection');
    const previewImage = document.getElementById('previewImage');
    const generateBtn = document.getElementById('generateBtn');
    const uploadSection = document.querySelector('.upload-section');
    
    // Open modal
    window.openModal = () => {
        modal.style.display = 'flex';
    };
    
    // Close modal
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
    
    // Handle file upload
    uploadBox.onclick = () => fileInput.click();
    
    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
                uploadSection.style.display = 'none';
                previewSection.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload an image file');
        }
    };
    
    // Handle drag and drop
    uploadBox.ondragover = (e) => {
        e.preventDefault();
        uploadBox.style.borderColor = 'var(--accent)';
        uploadBox.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    };
    
    uploadBox.ondragleave = () => {
        uploadBox.style.borderColor = 'var(--border)';
        uploadBox.style.backgroundColor = 'transparent';
    };
    
    uploadBox.ondrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
                uploadSection.style.display = 'none';
                previewSection.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload an image file');
        }
        uploadBox.style.borderColor = 'var(--border)';
        uploadBox.style.backgroundColor = 'transparent';
    };
    
    // Start processing when generate button is clicked
    generateBtn.onclick = startProcessing;
});

function goBack() {
    const uploadSection = document.querySelector('.upload-section');
    const previewSection = document.getElementById('previewSection');
    const previewImage = document.getElementById('previewImage');
    
    // Clear the preview image
    previewImage.src = '';
    
    // Show upload section and hide preview section
    uploadSection.style.display = 'block';
    previewSection.style.display = 'none';
}

function closeModal() {
    const modal = document.getElementById('uploadModal');
    const uploadSection = document.querySelector('.upload-section');
    const previewSection = document.getElementById('previewSection');
    const previewImage = document.getElementById('previewImage');
    
    // Reset everything
    previewImage.src = '';
    uploadSection.style.display = 'block';
    previewSection.style.display = 'none';
    modal.style.display = 'none';
} 