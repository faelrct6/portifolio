const NOME = "Rafael Costa";
let tituloProfissional = "Garoto quase de Programa";
let minhaBio = "Sou um camarada esforçado, gente boa." +
    " Antes eu não era nada hoje continuo igual antes";
let anoFormatura = 2026;

let mesFormatura = 12;
let diaFormatura = 31;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

const DATAATUAL = new Date(); // Data atual, data completa, biblioteca de data do JavaScript
let mesAtual = DATAATUAL.getMonth() + 1; // Mês atual (0-11, por isso +1)
let anoAtual = DATAATUAL.getFullYear(); // Ano atual
let diaAtual = DATAATUAL.getDate(); // Dia atual

let indefinido;
let nulo = null;

let curso = {
    nome: "Técnico de Desenvolvimento de Sistema",
    semestre: 3,
    disciplinaAtual: "Linguagem de Programação"
};

console.log(typeof nulo); 
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);    
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;
document.getElementById("nomeCurso").innerText = `Curso: ${curso.nome}`;
document.getElementById("disciplinaAtual").innerText = `Disciplina atual: ${curso.disciplinaAtual}`;
//document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos, ${mesFormatura - mesAtual} meses e ${diaFormatura - diaAtual} dias.`;

// Criando variáveis para facilitar a leitura
let anosRestantes = anoFormatura - anoAtual;
let mesesRestantes = mesFormatura - mesAtual;
let diasRestantes = diaFormatura - diaAtual;

let elementoTexto = document.getElementById("tempoRestanteParaFormatura");

// Comparamos as datas diretamente no lugar da porcentagem
if (DATAATUAL >= dataFinal) {
    // Condição 1: A data de hoje já passou ou é o dia da formatura
    elementoTexto.innerText = "Curso concluído, formado!";
    
} else if (anosRestantes >= 1) {
    // Condição 2: Faltam 1 ano ou mais
    elementoTexto.innerText = `Tempo restante para formatura: ${anosRestantes} anos, ${mesesRestantes} meses e ${diasRestantes} dias.`;
    
} else {
    // Condição 3: Falta menos de 1 ano (mostra apenas meses e dias)
    elementoTexto.innerText = `Tempo restante para formatura: ${mesesRestantes} meses e ${diasRestantes} dias.`;
}


if (diasRestantes <= 0 && mesesRestantes <= 0 && anosRestantes <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Curso Concluído!`;
    };


let nota = 8; 
let aprovado = (nota >= 6)? "Aprovado" : "Reprovado";

document.write(`<p> Nota: ${nota} - ${aprovado} </p>`);


let diaSemana = DATAATUAL.getDay() + 1; 

let diaEscrito;

switch (diaSemana) {
    case 1: diaEscrito = "Domingo"; break;
    case 2: diaEscrito = "Segunda-feira"; break;
    case 3: diaEscrito = "Terça-feira"; break;
    case 4: diaEscrito = "Quarta-feira"; break;
    case 5: diaEscrito = "Quinta-feira"; break;
    case 6: diaEscrito = "Sexta-feira"; break;
    case 7: diaEscrito = "Sábado"; break;
    default: diaEscrito = "Dia inválido";
}

document.write(`<p> Hoje é: ${diaEscrito} </p>`);

// ─── QUIZ DE PERFIL ───────────────────────────────────────────
const btnVisual      = document.getElementById("btn-visual");
const btnLogica      = document.getElementById("btn-logica");
const resultadoQuiz  = document.getElementById("resultado-quiz");

btnVisual.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
    Tecnologias pra você: HTML, CSS, React, Vue.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f4fd";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});

btnLogica.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
    Tecnologias pra você: Node.js, Python, bancos de dados.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f8f0";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});


let pontosFront  = 0;
let pontosBack   = 0;

btnVisual.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnLogica.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});

function exibirPerfil() {
  if (pontosFront > pontosBack) {
    resultadoQuiz.textContent = "🎨 Perfil Front-End!";
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
  } else {
    resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
  }
}

let projetos= [
  {
    nome: "Aplicação de Estacionamento",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    conhecimentos: "VsCode, GitHub, pip, PyInstaller,...",
    descricao: "Aplicação de Estacionamento é um projeto que simula a gestão de um estacionamento, permitindo aos usuários registrar entradas e saídas de veículos, calcular tarifas e gerar relatórios. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript para criar uma interface amigável e funcional. Além disso, o projeto envolveu o uso de ferramentas como VsCode para desenvolvimento, GitHub para controle de versão, pip para gerenciamento de dependências e PyInstaller para empacotamento da aplicação."
  },

  {
    nome: "Aplicação de Controle de Estoque",
    tecnologias: ["Python", "Tkinter", "fpdf"],
    conhecimentos: "VsCode, GitHub, pip, PyInstaller,...",
    descricao: "Aplicação de Controle de Estoque é um projeto que permite aos usuários gerenciar o estoque de uma loja ou empresa. A aplicação oferece funcionalidades para adicionar, editar e remover produtos, além de calcular o valor total do estoque e gerar relatórios. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript para criar uma interface intuitiva e responsiva. Ferramentas como VsCode foram utilizadas para o desenvolvimento, GitHub para controle de versão, pip para gerenciamento de dependências e PyInstaller para empacotamento da aplicação."
  }
]

document.createElement("h2").textContent = projetos[0].nome;
innerHTML += "<h2>" + projetos[1].nome + "</h2>";
container.innerHTML += "<p>" + projetos[0].descricao + "</p>";