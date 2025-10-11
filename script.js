const faqHeaders = document.querySelectorAll('.faq-header');

        faqHeaders.forEach(header => {
            header.addEventListener('click', function() {
                // 'this' refers to the clicked header (the <span> element)
                const headerElement = this; 
                const iconElement = headerElement.querySelector('.faq-icon');
                const answerElement = headerElement.nextElementSibling;

                // 1. Toggle the 'active' class on the header (THIS IS NEW)
                headerElement.classList.toggle('active');

                // 2. Toggle the 'flipped' class on the icon
                iconElement.classList.toggle('flipped');

                // 3. Toggle the 'visible' class on the answer
                answerElement.classList.toggle('visible');
            });
        });