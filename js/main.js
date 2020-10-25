'use strict'

validate();

function onSubmit(ev){
    ev.preventDefault();
    ev.stopPropagation()
    console.log(ev);
}

function validate(){
    const form =document.querySelector('.needs-validation');
    form.addEventListener('submit',function (ev){
        if (form.checkValidity()===false){
            ev.preventDefault();
            ev.stopPropagation()
        }
        form.classList.add('was-validated')
    })
}