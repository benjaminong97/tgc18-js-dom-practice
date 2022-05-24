// 1. Extract out the email address from the form and store it in a variable named `email`

// 2. Extract out the selected phone model from the form and store it in a variable named `model`

// 3. Extract out the required services, and store it in a variable named `services`

// 4. Extact out the selected pickup point and store it in a variable named `pickup`

// To preview your code, open this folder in the terminal and type `python3 -m http.server` (if using Gitpod)

// To test, type `npm test forms_1`


function getFormValues() {
    
    let email = document.querySelector('#email-address').value;

    let model = null
    let models = document.querySelectorAll('.phone-type');
    for (phone of models) {
        if (phone.checked) {
            model = phone.value;
            break;
        }
    }

    let services = [];
    let selectedServices = document.querySelectorAll('.services');
    for (let s of selectedServices) {

        if (s.checked) {
            services.push(s.value)
        }
    }

    let pickup = document.querySelector('#pick-up').value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
