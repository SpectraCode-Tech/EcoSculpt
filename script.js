const faqHeaders = document.querySelectorAll('.faq-header');

        faqHeaders.forEach(header => {
            header.addEventListener('click', function() {
                // 'this' refers to the clicked header (the <span> element)
                const iconElement = this.querySelector('.faq-icon');
                const answerElement = this.nextElementSibling;

                // 1. Toggle the 'active' class on the header (THIS IS NEW)
                this.classList.toggle('active');

                // 2. Toggle the 'flipped' class on the icon
                iconElement.classList.toggle('flipped');

                // 3. Toggle the 'visible' class on the answer
                answerElement.classList.toggle('visible');
            });
        });