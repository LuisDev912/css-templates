// --- variables ---
const $button = document.querySelector('.button');
const $toast = document.querySelector('.toast');
const $toastClose = document.querySelector('.toast__close');

let toastTimeout;

// --- functions ---

/**
 * Shows the toast notification and hides it after 3 seconds. If the toast is already visible, it resets the timer.
 * When the close button is clicked, it immediately hides the toast and clears the timer.
 */
function showToast() { 
    clearTimeout(toastTimeout);

    $toast.classList.add('show');

    toastTimeout = setTimeout(() => {
        $toast.classList.remove('show');
    }, 3000);
}

// --- event listeners ---

$button.addEventListener('click', showToast);

$toastClose.addEventListener('click', () => {
    clearTimeout(toastTimeout);
    $toast.classList.remove('show');
});

$toastClose.addEventListener('click', () => {
    $toast.classList.remove('show');
});