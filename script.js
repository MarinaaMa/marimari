const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Muitos animais morreram na inchente?",
        alternativas: [
            {
                texto: "Isso é triste!",
                afirmacao: "infelizmente muitos animais morreram, pois não eram prioridade "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Porém, muita ração e medicamentos para animais foram doados por pessoas de bom coração"
            }
        ]
    },
    {
        enunciado: "Pessoas morreram doentes depois da inchente?",
        alternativas: [
            {
                texto:"Pessoas morreram após a inchente",
                afirmacao: "Muitas pessoas morreram doentes após a inchente, por doenças como leptospirose"
            },
            {
                texto: "Muita gente sobreviveu",
                afirmacao: "Apesar das doenças e dificuldades as pessoas seguiram suas vidas"
            }
        ]
    },
    {
        enunciado: "As pessoas perderam seus bens materiais?",
        alternativas: [
            {
                texto: "Perda dos bens",
                afirmacao: "Além da familia que perderam, as pessoas também perderam oque conquistaram ao longo da vida"
            },
            {
                texto: "Tiveram ajuda",
                afirmacao: "Apesar de perderem tudo, muitas pessoas de bom corção ajudaram doando coisas basicas"
            }
        ]
    },
    {
        enunciado: "A demora para tudo voltar ao normal vai ser certa",
        alternativas: [
            {
                texto: "Depoimento de pessoas salvas",
                afirmacao: "Notou também que muitas pessoas não receberam ajuda"
            },
            {
                texto: "Fazer um desenho retratando o acontecido",
                afirmacao: "Ensinou a dar valor"
            }
        ]
    },
    {
         enunciado: "Você tem um dinheiro sobrando oque você faz? ",
        alternativas: [
            {
                texto: "Escrever noticia sobre.",
                afirmacao: "Infelizmente muitos morreram"
            },
            {
                texto:"A tragedia levou a depressão",
                afirmacao: "A tragedia mostrou a todos o valor de suas vidas "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
