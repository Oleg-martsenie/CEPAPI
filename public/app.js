'use strict'

let cepClick = document.querySelector('#cep');


const preencherForm = (endereco) => {
    document.getElementById('endereço').value = endereco.logradouro;   
    document.getElementById('bairro').value = endereco.bairro;   
    document.getElementById('cidade').value = endereco.localidade;   
    document.getElementById('estado').value = endereco.uf;
}

const pesquisarCep = async () => {
    let cep =  document.querySelector('#cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherForm(endereco)
}


cepClick.addEventListener('focusout', pesquisarCep);