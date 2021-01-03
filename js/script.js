function redirectPage(event) {
  event.preventDefault();
}

function hide() {
  document.querySelector('#info').textContent = '';

}


window.addEventListener('DOMContentLoaded', function () {
  const cep = document.querySelector('#code');

  const showData = (result) => {
    for (const camp in result) {

      if (result['ok'] !== true) {

        document.querySelector('#message').textContent = 'Resultado não encontrado';
        document.querySelector('#address').textContent = '';
        document.querySelector('#district').textContent = '';
        document.querySelector('#city').textContent = '';
        document.querySelector('#state').textContent = '';

      } else if (document.querySelector('#' + camp)) {

        document.querySelector('#address').textContent = result['address'] + ',';
        document.querySelector('#district').textContent = result['district'] + ',';
        document.querySelector('#city').textContent = result['city'] + '-';
        document.querySelector('#state').textContent = result['state'];
        document.querySelector('#message').textContent = '';

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
