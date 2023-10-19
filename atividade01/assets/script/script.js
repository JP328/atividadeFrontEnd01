// let nome = document.getElementById('nome');
// let email = document.getElementById('email');
// let assunto = document.querySelector('#assunto') // .nomedaclasse

const verificarCampos = () => {
  if (nome.value === '' || email.value === '' || assunto.value === '') {
    alert('Por favor preencha todos os campos, é obrigatório!')
  } else {
    alert('Sucesso')
  }
}

const validarNome = () => {
  if(nome.value.length < 3) {
    nome.style.borderBottom = 'solid 1px red'
    nome.style.boxShadow = "1px 3px 2px red"
  } else {
    nome.style.borderBottom = 'solid 1px white'
    nome.style.boxShadow = "none"
  }
}

const validarEmail = () => {
  let regex= "[@]+[a-z0-9]+[.]"
  if(!email.value.match(regex)) {
    email.style.borderBottom = 'solid 1px red'
    email.style.boxShadow = "1px 3px 2px red"
  } else {
    email.style.borderBottom = 'solid 1px white'
    email.style.boxShadow = "none"
  }
}

const validarAssunto = () => {
  if(assunto.value.length >= 100) {
    alert("Seu texto deve ter no máximo 100 caracteres")
  } 
}

const mapaZoom = () => {
  mapa.style.width = "1500px"
  mapa.style.height = "1200px"
}

const mapaNormal = () => {
  mapa.style.width = "1200px"
  mapa.style.height = "900px"
}