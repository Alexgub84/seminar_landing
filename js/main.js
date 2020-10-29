'use strict'

const PAYMENT_URL = 'https://ng.paymeservice.com/sale/template/SALE1592-212720GX-BZVSLYQP-6P42ANSC'



function init() {
   const alert = document.querySelector('.alert-link');
    alert.href = PAYMENT_URL;
    const form = document.querySelector('form');
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        if (!validate()) return
        $('#alert').show();

        const formData = new FormData(form);

        
        fetch(form.getAttribute('action'), {
            method: "POST",
            headers: {
                'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
              },
              body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=0,height=0,left=-1000,top=-1000`;
                setTimeout(() => {
                    window.open(PAYMENT_URL,'Seminar payment',params)
                }, 2000)            })
            .catch(() => {
                    console.log();('failed');
            })   

    })

}

function validate() {
    const form = document.querySelector('.needs-validation');
    console.log(form);
    form.classList.add('was-validated');
    return form.checkValidity()
}

function onRegBtnPressed(){
    $('html, body').animate({
        scrollTop: $("#reg-form").offset().top
    }, 1000);
}