 document.querySelectorAll('.thumbnail').forEach(img => {
            img.addEventListener('click', function() {
                const largeSrc = this.getAttribute('data-large');
                modalImg.src = largeSrc;
                modal.style.display = 'flex';
            });
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
