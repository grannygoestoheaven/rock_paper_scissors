const userChoice = document.querySelectorAll('[data-name]');
        userChoice.forEach((selectionButton) => {
            selectionButton.addEventListener('click', e => {
                console.log(selectionButton.dataset.name);
            })
        });