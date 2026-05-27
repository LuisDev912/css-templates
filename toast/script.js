// --- variables ---
const $button = document.querySelector('.button');
const $buttons = document.querySelectorAll('[data-type]');
const $toast = document.querySelector('.toast');
const $toastClose = document.querySelector('.toast__close');

let toastTimeout;

const TOAST_DURATION = 3000;

const TOAST_TYPES = [
    'toast--example',
    'toast--success',
    'toast--error'
];

// --- functions ---

/**
 * Shows the toast notification.
 * If the toast is already visible, the timer resets.
 * Automatically hides the toast after 3 seconds.
 */
function showToast() {
    if ($toast.classList.contains('show')) { return; };

    clearTimeout(toastTimeout);

    $toast.classList.remove(...TOAST_TYPES);

    $toast.classList.add('show');
    $toast.classList.add(`toast--${this.dataset.type}`);

    toastTimeout = setTimeout(() => {
        $toast.classList.remove('show');
    }, TOAST_DURATION);
};

/**
 * Hides the toast notification immediately and clears the timer to prevent it from hiding again after 3 seconds. This function is called when the close button is clicked.
 */
function hideToast() {
    clearTimeout(toastTimeout);
    $toast.classList.remove('show');
};

// --- event listeners ---

$button.addEventListener('click', showToast);
$toastClose.addEventListener('click', hideToast);

$buttons.forEach(button => {
    button.addEventListener('click', showToast);
});