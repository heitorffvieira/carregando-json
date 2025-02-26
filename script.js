
let divUsuarios = document.querySelector('#usuarios');

fetch('dados.json').then((response) => {
    response.json().then((dados) => {
        dados.usuarios.map((usuario) => {
            divUsuarios.innerHTML += 
            `<li>
                <span>Nome:</span> ${usuario.nome} <br> 
                <span>E-mail:</span> ${usuario.email} <br> 
                <span>Idade:</span> ${usuario.idade}
            </li>`
        })
    })
});