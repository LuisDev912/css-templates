// variables
const $button = document.querySelector('.button');
const $toast = document.querySelector('.toast');
const $toastClose = document.querySelector('.toast__close');

// functions
$button.addEventListener('click', () => {
    $toast.classList.add('show');
    setTimeout(() => {
        $toast.classList.remove('show');
    }, 3000);
});

$toastClose.addEventListener('click', () => {
    $toast.classList.remove('show');
});