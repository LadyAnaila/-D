/******************************** 
        FORMULARIO
********************************/
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.target);

  fetch('/arkham_data_form.txt', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        alert('Gracias por tu mensaje! Recibirás una respuesta a la mayor brevedad posible.');
      } else {
        throw new Error('Por favor, revisa los datos y vuelve a intentarlo.');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Por favor, revisa los datos y vuelve a intentarlo.');
    });
});




/******************************** 
        CÓDIGO MODERNIZR
********************************/

if (!Modernizr.backgroundsize) {
  document.documentElement.className += ' no-backgroundsize';
}

if (!Modernizr.boxshadow) {
  document.documentElement.className += ' no-boxshadow';
}

if (!Modernizr.boxsizing) {
  document.documentElement.className += ' no-boxizing';
}

if (!Modernizr.gridtemplatecolumns) {
  document.documentElement.className += ' no-grid';
}

if (!Modernizr.flexbox) {
  document.documentElement.className += ' no-flexbox';
}

