const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion-header');
    const accordionContent = item.querySelector('.accordion-content');

    accordionHeader.addEventListener('click', () => {
        const isActive = accordionContent.classList.contains('active');
        closeAllItems();

        if(!isActive) {
            accordionContent.classList.add('active');
            accordionContent.style.maxHeight = '10rem';
        }
    });
});


const closeAllItems = () => {
    accordionItems.forEach((item) => {
        const accordionContent = item.querySelector('.accordion-content');
        accordionContent.classList.remove('active');
        accordionContent.style.maxHeight = '0';
    });
}; 