const closeModal = (modalSelector) => {
    const windows = document.querySelectorAll(modalSelector);

    windows.forEach(item => {
        item.style.display = 'none';
    })
};

export default closeModal;