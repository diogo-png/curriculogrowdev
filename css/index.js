var nome = "Diogo Vieira";
var cargo = "DEVELOPER"
var nomehtml = document.getElementById ("nome-no-html");
var cargohtml = document.getElementById ("cargo-no-html");
var texto1 = document.getElementById ("texto-1");
var texto2 = document.getElementById ("texto-2");

function ColocarNomeNoHtml (nome){
nomehtml.innerHTML = nome;
}
ColocarNomeNoHtml(nome);

function ColocarCargoNoHtml(cargo){
cargohtml.innerHTML = cargo;
}

function Logarnome(){
    console.log(nome);
}

function ClickNoProjetos(){
    console.log("Clicou no botão projetos");
    texto2.style.display ="block";
    texto1.style.display = "none";
}

function ClickNoSobre(){
    console.log("Clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}


ColocarCargoNoHtml (cargo);
Logarnome();