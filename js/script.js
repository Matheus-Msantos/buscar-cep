window.addEventListener('DOMContentLoaded', function () {

  const cep = document.querySelector('#code');

  const showData = (result) => {
    for (const camp in result) {
      if (document.querySelector('#' + camp)) {
        document.querySelector('#' + camp).value = result[camp];
      }
    }
  }


  cep.addEventListener("blur", (e) => {
    console.log(cep.value);

    let search = cep.value.replace('-', '');

    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }

    fetch(`https://ws.apicep.com/cep/${search}.json`, options)
      .then(response => response.json())
      .then(data => showData(data))
      .catch(e => console.log('Erro: ' + e, e.message))
  })

});



