/* Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const password2ErrorMessage = document.querySelector("#password2 + .invalid-feedback");

  password1.addEventListener("input", () => {
    if (password1.value !== password2.value) {
      password2.setCustomValidity("Las contraseñas no coinciden.");
      password2ErrorMessage.style.display = "block";
    } else {
      password2.setCustomValidity("");
      password2ErrorMessage.style.display = "none";
    }
  });

  password2.addEventListener("input", () => {
    if (password1.value !== password2.value) {
      password2.setCustomValidity("Las contraseñas no coinciden.");
      password2ErrorMessage.style.display = "block";
    } else {
      password2.setCustomValidity("");
      password2ErrorMessage.style.display = "none";
    }
  });

  const myModal = document.getElementById('myModal')
  const myInput = document.getElementById('myInput')

  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })
  
*/

$(document).ready(function() {
 
  $("#formularioIngreso").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
        maxlength: 30,
      },
      password2: {
        required: true,
        equalTo: "#password",
      },
    }, // --> Fin de reglas
    messages: {
      email: {
        required: "El email es un campo requerido",
        email: "El email no cumple el formato de un correo",
      },
      password: {
        required: "La contraseña es una campo obligatorio",
        minlength: "Mínimo 5 caracteres",
        maxlength: "Máximo 30 caracteres",
      },
      password2: {
        required: "Repita la contraseña anterior",
        equalTo: "Debe ser igual al campo contraseña",
      },
    },
  });
});


