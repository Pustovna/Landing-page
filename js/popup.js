export const popup = () => {
    function modals(button, popModal, close) {
        const buttonIn = document.querySelector(button),
            popWindow = document.querySelector(popModal),
            closeButton = document.querySelector(close);

        function showModal() {
            popWindow.style.display = "flex";
            document.body.style.overflow = "hidden";
        }

        function closeModal() {
            popWindow.style.display = "none";
            document.body.style.overflow = "";
        }

        buttonIn.addEventListener('click', () => {
            showModal();
        });

        closeButton.addEventListener('click', () => {
            closeModal();
        });

        popWindow.addEventListener('click', (e) => {
            if (e.target === popWindow) {
                closeModal();
            }
            ;
        });

    };
    modals('.navbar-nav__button', '.popup', '.popup_close');
    modals('.travel-text__button', '.popup', '.popup_close');
};

export default popup;