const frases = [
"Acredite no brilho que existe dentro de você.",
"Cada passo é uma prova da sua força.",
"Você é capaz de coisas incríveis.",
"Seu futuro começa com a decisão de tentar.",
"Coragem é seguir mesmo quando o medo aparece.",
"Você merece tudo o que sonha alcançar."
];
const botao = document.querySelector("button");
const fraseParagrafo = document.querySelector("#frase");
function gerarFrase() {
const indice = Math.floor(Math.random() * frases.length);
fraseParagrafo.innerText = frases[indice];
};
botao.addEventListener("click", gerarFrase);