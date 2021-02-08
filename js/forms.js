export const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const popup = item.closest('.popup');
            const message = popup.querySelector('.status-message');
            const postData = async (url, data) => {
                message.textContent = 'Loading...';
                message.style.display = 'block';
                let result = await fetch(url, {
                    method: 'POST',
                    body: data
                });
                return await result.text();
            };
            const formData = new FormData(item);

            postData('server.php', formData)
                .then(() => {
                    message.textContent = 'Success';
                    message.style.display = 'block';
                    setTimeout(() => {
                        popup.style.display = 'none';
                        document.body.style.overflow = "";
                    }, 2000)
                })
                .catch(() => {
                    message.textContent = 'Something went wrong';
                    message.style.display = 'block';
                })
                .finally(() => {
                    inputs.forEach(item => {
                        item.value = "";
                    })
                })
        });
    });
};

