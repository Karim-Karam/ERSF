


document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderContainer = document.querySelector('.slider-container');
    const sliderPrev = document.querySelector('.slider-prev');
    const sliderNext = document.querySelector('.slider-next');
    const cardWidth = sliderWrapper.querySelector('div').offsetWidth; // Width of one card
    const containerWidth = sliderContainer.offsetWidth; // Width of the visible container
    let currentPosition = 0;

    const closeBtn = document.getElementById('closeBtn');
    if (closeBtn) {
        closeBtn.onclick = closePopup;
    }

    // Calculate the maximum allowed position
    const maxPosition = -(sliderWrapper.scrollWidth - containerWidth);

    sliderNext.addEventListener('click', () => {
        // Prevent sliding beyond the last card
        if (currentPosition > maxPosition) {
            currentPosition -= cardWidth;
            // Ensure we don't overshoot the last card
            if (currentPosition < maxPosition) {
                currentPosition = maxPosition;
            }
            sliderWrapper.style.transform = `translateX(${currentPosition}px)`;
        }
    });

    sliderPrev.addEventListener('click', () => {
        // Prevent sliding before the first card
        if (currentPosition < 0) {
            currentPosition += cardWidth;
            // Ensure we don't go beyond the first card
            if (currentPosition > 0) {
                currentPosition = 0;
            }
            sliderWrapper.style.transform = `translateX(${currentPosition}px)`;
        }
    });
});


const formData = {};

// Show the registration form
function showForm(type) {
    if (type === 'register') {
        console.log('register');
        const formContainer = document.getElementById('register-form-container');
        formContainer.classList.add('show');
        goToStep(1); // Start at step 1
    } else if (type === 'login') {
        const formContainer = document.getElementById('form-container');
        formContainer.classList.add('show');
    }
}

// Hide the registration form
function hideForm(type) {
    if (type === 'register') {
        const formContainer = document.getElementById('register-form-container');
        formContainer.classList.remove('show');
    } else if (type === 'login') {
        const formContainer = document.getElementById('form-container');
        formContainer.classList.remove('show');
    }
}


function goToStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });

    // Show the current step
    document.getElementById(`step-${stepNumber}`).classList.add('active');
}

// Move to the next step
function nextStep(stepNumber) {
    let isValid = true; // Assume the form is valid initially

    // Validate Step 1
    if (stepNumber === 2) {
        const firstName = document.getElementById('firstName').value.trim();
        const middelName = document.getElementById('middelName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const date = document.getElementById('date').value.trim();
        const gender = document.getElementById('gender').value.trim();

        // Check if required fields are empty
        if (!firstName || !lastName || !date || !gender) {
            isValid = false;
            alert('Please fill out all required fields.');
        }
    }

    // Validate Step 3
    else if (stepNumber === 3) {
        const phone = document.getElementById('PhoneNumber').value.trim();
        const email = document.getElementById('email').value.trim();
        const emergencyPhoneNumber = document.getElementById('emergencyPhoneNumber').value;

        // Check if required fields are empty
        if (!phone || !email) {
            isValid = false;
            alert('Please fill out all required fields.');
        }
    }
    // Validate Step 4
    else if (stepNumber === 4) {
        const country = document.getElementById('country').value.trim();
        const nationality = document.getElementById('nationality').value.trim();
        const address = document.getElementById('address').value;
        // Check if required fields are empty
        if (!country || !nationality || !address) {
            isValid = false;
            alert('Please fill out all required fields.');
        }
    }
    // Validate Step 4
    else if (stepNumber === 5) {
        const photo = document.getElementById('photo').value.trim();
        // Check if required fields are empty
        if (!photo) {
            isValid = false;
            alert('Please fill out all required fields.');
        }
    }
    // Proceed to the next step only if the form is valid
    if (isValid) {
        goToStep(stepNumber);
    }
}

// Move to the previous step
function prevStep(stepNumber) {
    goToStep(stepNumber);
}



function showPopup() {
    document.getElementById('mediaPopup').style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('mediaPopup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Add these functions after your existing popup functions
function showRulesPopup() {
    document.getElementById('rulesPopup').style.display = 'flex';
}

function closeRulesPopup() {
    document.getElementById('rulesPopup').style.display = 'none';
}

//newsPopup
function showNewsPopup() {
    document.getElementById('NewsPopup').style.display = 'flex';
}

function closeNewsPopup() {
    document.getElementById('NewsPopup').style.display = 'none';
}



