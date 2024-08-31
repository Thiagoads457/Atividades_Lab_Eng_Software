let valores = [];

const formulario = document.getElementById('formulario');
const listaOrdenada = document.getElementById('listaOrdenada');

function adicionarValor(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const valor = document.getElementById('valor').value.trim();

    if (valor) {
        valores.push(valor); 
        valores.sort(); 
        atualizarLista(); 
        document.getElementById('valor').value = ''; 
    }
}


function atualizarLista() {
    listaOrdenada.innerHTML = ''; 

    valores.forEach(function(valor) {
        const li = document.createElement('li');
        li.textContent = valor;
        listaOrdenada.appendChild(li);
    });
}


formulario.addEventListener('submit', adicionarValor);
    
