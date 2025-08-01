let amigo = [];
let listaAmigos = document.querySelector('ul');


function adicionarAmigo(){
    const nome = document.querySelector('input').value;

    if(nome === ''){
        alert('Por favor, insira um nome.');

    }else{
        amigo.push(nome);
        limparCampo();
        atualizarLista();
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function limparLista(){
    listaAmigos.innerHTML = '';
}

function atualizarLista(){

    limparLista();

    for(let i = 0; i < amigo.length; i++){

        const li = document.createElement('li');
        li.textContent = amigo[i];
        listaAmigos.appendChild(li);
    }    
}

function sortearAmigo(){
    if(amigo.lenght === 0){
        return null;
    } 

    const indiceAleatorio = Math.floor(Math.random() * amigo.length);
    const resultado = amigo[indiceAleatorio];

    listaAmigos.innerHTML = (`Seu amigo secreto é: ${resultado}`);
    
}


