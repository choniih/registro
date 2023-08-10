function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


const regBtn = document.getElementById("regBtn");
regBtn.addEventListener("click", validar);

function validar() {

    const check = document.getElementById("terminos").checked;
    const pass1 = document.getElementById("password1").value;
    const pass2 = document.getElementById("password2").value;
    const mail = document.getElementById("email").value;
    const apellido = document.getElementById("apellido").value;
    const nombre = document.getElementById("nombre").value;

    if (nombre !== "" && apellido !== "" && mail !== "" && pass1 !== "" && check) {
        if (pass1 === pass2 && pass1.length > 5) {
            showAlertSuccess();
        } else {
            showAlertError();
        }
    } else {
        showAlertError();
    }

    
}
