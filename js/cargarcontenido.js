let request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/cesar-hb/PetShop/main/menu.html');
request.send();
request.onload = function() {
  let contenido = request.response;
  $('#navbar-div').append(contenido);
  alert(contenido.message);
};