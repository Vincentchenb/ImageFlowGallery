document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const mainStrip = document.getElementById('mainStrip');
    const backgroundStrip = document.getElementById('backgroundStrip');
    const uploadBtn = document.querySelector('.upload-btn');
    let images = [];
    let imageIdCounter = 0;

    // Handle upload button drag and drop
    uploadBtn.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBtn.style.transform = 'scale(1.2) translateY(-10px)';
    });

    uploadBtn.addEventListener('dragleave', () => {
        uploadBtn.style.transform = 'scale(1) translateY(0)';
    });

    uploadBtn.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadBtn.style.transform = 'scale(1) translateY(0)';
        const files = Array.from(e.dataTransfer.files);
        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        if (imageFiles.length > 0) {
            handleMultipleFiles(imageFiles);
        }
    });

    // Handle file selection
    imageInput.addEventListener('change', handleFileSelect);



    function handleFileSelect() {
        const files = Array.from(imageInput.files);
        if (files.length === 0) return;

        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        if (imageFiles.length === 0) {
            alert('Please upload image files only');
            return;
        }

        handleMultipleFiles(imageFiles);
    }

    function handleMultipleFiles(files) {
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = {
                    id: imageIdCounter++,
                    src: e.target.result,
                    name: file.name
                };
                images.push(imageData);
                renderStrips();
            };
            reader.readAsDataURL(file);
        });
    }

    function renderStrips() {
        if (images.length === 0) {
            mainStrip.innerHTML = '<div class="empty-state">Upload some images to see them flow!</div>';
            backgroundStrip.innerHTML = '';
            return;
        }

        // Render main centerpiece strip (duplicate for seamless loop)
        const mainStripContent = [];
        for (let i = 0; i < 2; i++) {
            images.forEach(imageData => {
                mainStripContent.push(`
                    <div class="main-image-item">
                        <img src="${imageData.src}" alt="${imageData.name}" title="${imageData.name}">
                        <button class="delete-btn" onclick="deleteImage(${imageData.id})" title="Delete image">×</button>
                    </div>
                `);
            });
        }
        mainStrip.innerHTML = mainStripContent.join('');

        // Add hover pause functionality to main strip
        mainStrip.removeEventListener('mouseenter', pauseMainStrip);
        mainStrip.removeEventListener('mouseleave', resumeMainStrip);
        mainStrip.addEventListener('mouseenter', pauseMainStrip);
        mainStrip.addEventListener('mouseleave', resumeMainStrip);

        // Render background strip (flows opposite direction)
        renderBackgroundStrip();
    }

    function renderBackgroundStrip() {
        if (images.length === 0) {
            backgroundStrip.innerHTML = '';
            return;
        }

        // Create background strip content (duplicate for seamless loop)
        const bgStripContent = document.createElement('div');
        bgStripContent.className = 'bg-strip-content';
        
        // Add images multiple times for seamless looping
        const repeatCount = Math.ceil(20 / images.length);
        for (let i = 0; i < repeatCount * 2; i++) {
            images.forEach(imageData => {
                const bgImageItem = document.createElement('div');
                bgImageItem.className = 'bg-image-item';
                bgImageItem.innerHTML = `<img src="${imageData.src}" alt="${imageData.name}">`;
                bgStripContent.appendChild(bgImageItem);
            });
        }
        
        backgroundStrip.innerHTML = '';
        backgroundStrip.appendChild(bgStripContent);
    }

    // Make deleteImage function global so it can be called from onclick
    window.deleteImage = function(imageId) {
        images = images.filter(img => img.id !== imageId);
        renderStrips();
    };

    // Helper functions for main strip pause/resume
    function pauseMainStrip() {
        mainStrip.classList.add('paused');
    }
    
    function resumeMainStrip() {
        mainStrip.classList.remove('paused');
    }

    // Initial render
    renderStrips();
});
