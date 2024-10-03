const toggleClass = (id, className) => {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle(className);
    } else {
        console.error('Element with ID ' + id + ' not found.');
    }
}


/* ACCARDION CODE */
// Получаем все элементы с классом 'FAQ-item-question'
const questions = document.querySelectorAll('.FAQ-item-question');

// Добавляем обработчик события на каждый элемент
questions.forEach(function(question) {
    question.addEventListener('click', function() {
        // Находим ближайший элемент с классом 'FAQ-item'
        const faqItem = this.closest('.FAQ-item');
        // Переключаем класс 'FAQ-item--open'
        faqItem.classList.toggle('FAQ-item--open');
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

let quantity = 1;

function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').textContent = quantity;
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').textContent = quantity;
    }
}

function updateProductName(name) {
    document.getElementById('product-name').textContent = name;
}