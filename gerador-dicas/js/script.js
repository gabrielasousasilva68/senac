const dica = [
    "📅 Organize um cronograma Planeje o que vai estudar em cada dia.Dividir o conteúdo em partes evita acúmulo e ajuda na revisão.",
    "🧠 Use técnicas de memorização Faça resumos, mapas mentais ou flashcards — essas técnicas facilitam lembrar o conteúdo depois.",
    "✍️ Explique o conteúdo com suas palavras Ensinar ou explicar a matéria para alguém ( ou para si mesmo )  é uma ótima forma de fixar o aprendizado.",
    "🕒 Estude em blocos de tempo Use o método Pomodoro : 25 minutos de foco total e 5 minutos de pausa.Isso mantém a concentração alta.",
    "📚 Revise com frequência Releia resumos e refaça exercícios periodicamente.A revisão evita que o conteúdo seja esquecido.",
    "🚫 Evite distrações Estude em um ambiente tranquilo, longe do celular e das redes sociais.Um local limpo e silencioso faz diferença.",
    "😴 Cuide de vocêDurma bem, alimente - se direito e faça pausas.O cérebro precisa de descanso para funcionar no máximo.",
];
const botao = document.querySelector("button");
const dicaEstudo = document.querySelector("#dicaEstudo");
function gerarDica() {
    const indice = Math.floor(Math.random() * dica.length);
    dicaEstudo.innerText = dica[indice];
};
botao.addEventListener("click", gerarDica);