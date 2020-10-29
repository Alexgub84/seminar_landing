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
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
              "form-name": "ask-question",
              "form_field": "something"
            })
          })
            .then(() => {
                let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=0,height=0,left=-1000,top=-1000`;
                setTimeout(() => {
                    window.open(PAYMENT_URL,'Seminar payment',params)
                }, 2000)            })
        

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