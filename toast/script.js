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