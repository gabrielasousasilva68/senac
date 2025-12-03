
const selectPersonagem = document.querySelector("#select-personagem");
const btnVotar = document.querySelector("#btn-votar");
const erroDiv = document.querySelector("#erro");
const listaRanking = document.querySelector("#lista-ranking");
const votos = {
    Dustin: 0,
    Eleven: 0,
    Mike: 0,
    Lucas: 0,
    Will: 0,
    Max: 0,
    Hopper: 0,
    Nancy: 0,
    Steve: 0
};
function atualizarRanking() {
    const arrayVotos = Object.entries(votos);
    arrayVotos.sort((a, b) => b[1] - a[1]);
    const maiorVoto = arrayVotos[0][1];
    listaRanking.innerHTML = "";
    arrayVotos.forEach(([nome, qtd]) => {
        const li = document.createElement("li");
        li.textContent = `${nome}: ${qtd} voto(s)`;
        if (qtd === maiorVoto && maiorVoto > 0) {
            li.style.fontWeight = "bold";
            li.style.backgroundColor = "#fff4cc";
            li.style.border = "2px solid #f1c232";
            li.style.padding = "5px";
            li.style.borderRadius = "6px";
        }
        listaRanking.appendChild(li);
    });
}
function votar() {
    const escolhido = selectPersonagem.value;
    if (escolhido === "") {
        erroDiv.textContent = " Por favor, selecione um personagem antes de votar.";
        return;
    }
    erroDiv.textContent = "";
    votos[escolhido]++;
    atualizarRanking();
    btnVotar.disabled = true;
    btnVotar.style.opacity = "0.6";
    btnVotar.textContent = "Voto registrado";
}
btnVotar.addEventListener("click", votar);
atualizarRanking();
