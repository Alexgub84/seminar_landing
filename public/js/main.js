'use strict'

const PAYMENT_URL = 'https://ng.paymeservice.com/sale/template/SALE1592-212720GX-BZVSLYQP-6P42ANSC'



function init() {
   const alert = document.querySelector('.alert-link');
    alert.href = PAYMENT_URL;
    const form = document.querySelector('form');
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        ev.stopPropagation()
        if (!validate()) return

        const formData = new FormData(form);
        console.log(formData);
        fetch('contact.php',{
            method:'post',
            body: FormData
        })
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log('error is',err);
            })
        $('#alert').show();
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=0,height=0,left=-1000,top=-1000`;
        setTimeout(() => {
            window.open(PAYMENT_URL,'Seminar payment',params)
        }, 2000)
    })

}

function onSubmit(ev) {
    ev.preventDefault();
    ev.stopPropagation()
    const isValidated = validate();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    console.log(form);
    if (isValidated) {
        fetch('../contact.php')
            .then(_ => {
                console.log('yes')
            })
            .catch(err => {
                console.log(err);
            })
        $('#alert').show();
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;
        setTimeout(() => {
            window.open(PAYMENT_URL,'Seminar payment',params)
        }, 1000)
    }
}



function validate() {
    const form = document.querySelector('.needs-validation');
    console.log(form);
    form.classList.add('was-validated');
    return form.checkValidity()
}   