const toggleClass = (id, className) => {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle(className);
    } else {
        console.error('Element with ID ' + id + ' not found.');
    }
}


/* ACCARDION CODE */
document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const activeContent = document.querySelector(".accordion-content[style]");

            if (activeContent && activeContent !== content) {
                activeContent.style.maxHeight = null;
                activeContent.previousElementSibling.classList.remove("active");
            }

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.classList.remove("active");
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                this.classList.add("active");
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-body');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButton = modal.querySelector('.close');
    // Function to open modal with dynamic content
    function openModal(contentId) {
        const content = document.getElementById(contentId);
        if (content) {
            modalContent.innerHTML = content.innerHTML; // Clone the content
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Disable page scroll
        }
    }
    // Function to close modal
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Re-enable page scroll
    }
    // Add event listeners to open modal buttons
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            openModal(targetId);
        });
    });
    // Add event listener to close modal button
    closeModalButton.addEventListener('click', closeModal);
    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});

$('.slider-wrap ').slick({
    dots: true,
    arrows: true
});