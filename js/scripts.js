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

  $.validator.addMethod("rutChileno", function(value, element) {
    // Eliminar puntos y guión del RUT
    value = value.replace(/[.-]/g, "");

    // Validar que el RUT tenga 8 o 9 dígitos
    if (value.length < 8 || value.length > 9) {
      return false;
    }

    // Validar que el último dígito sea un número o una 'K'
    var validChars = "0123456789K";
    var lastChar = value.charAt(value.length - 1).toUpperCase();
    if (validChars.indexOf(lastChar) == -1) {
      return false;
    }

    // Calcular el dígito verificador
    var rut = parseInt(value.slice(0, -1), 10);
    var factor = 2;
    var sum = 0;
    var digit;
    while (rut > 0) {
      digit = rut % 10;
      sum += digit * factor;
      rut = Math.floor(rut / 10);
      factor = factor === 7 ? 2 : factor + 1;
    }
    var dv = 11 - (sum % 11);
    dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();

    // Validar que el dígito verificador sea correcto
    return dv === lastChar;
  }, "Por favor ingrese un RUT válido."); 
  $("#formulario1").validate({
    rules: {
      rut: {
        required: true,
        rutChileno: true
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      password2: {
        required: true,
        equalTo: "#password",
      },
    }, // --> Fin de reglas
    messages: {
      rut: {
        required: "El rut es un campo obligatorio",
        rutChileno: "El formato del rut no es válido"
      },
      email: {
        required: "El email es un campo requerido",
        email: "El email no cumple el formato de un correo",
      },
      password: {
        required: "La contraseña es una campo obligatorio",
        minlength: "Mínimo 5 caracteres",
      },
      password2: {
        required: "Repita la contraseña anterior",
        equalTo: "Debe ser igual al campo contraseña",
      },
    },
  });
});


