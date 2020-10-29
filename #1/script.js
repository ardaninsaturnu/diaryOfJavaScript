const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm = document.getElementById('confirm')



function showError(input,message){

    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}


function showSuccess(input) {

    const formControl = input.parentElement;
    formControl.className = "form-control success";
    const small = formControl.querySelector('small');
    small.innerText = '';
    
}

//Check Email Validaiton

function isValidEmail(email){

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}


form.addEventListener('submit',function(e){

    e.preventDefault();

    // username validation
    
    if(username.value === ''){

        showError(username,'Username is required');

    } else {

        showSuccess(username);

    }

    // email validation

    if(email.value === ''){

        showError(email,'Email is required');

    } else if(!isValidEmail(email.value)){

        showError(email,'Email is not valid');

    }
    
    else{

        showSuccess(email);

    }

    // password validation

    if(password.value === ''){

        showError(password,'password is required');

    } else {

        showSuccess(password);

    }

    //confirm validation

    if(confirm.value === ''){

        showError(confirm,'confirm is required');

    } else {

        showSuccess(confirm);

    }


})



