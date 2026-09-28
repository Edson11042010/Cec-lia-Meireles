const perguntas = [
    {
        texto:"Qual ano Cecília Meireles nasceu?",
        opcoes: ["1900", "1901", "1902", "1903"],
        respostaCorreta: 1
    },
    {
        texto:"'Ela começou a escrever ainda jovem e se destacou principalmente por seus poemas, que abordavam temas como a'. Seus poemas abordavam quais temas?",
        opcoes: ["Política, Sociedade, Vida e o Tempo", "Natureza, Solidão, Vida, e o Comportamento", "Vida, Tempo, Natureza e a Solidão", "Morte, Tristeza, Comportamento e o Ser Humano"],
        respostaCorreta: 2
    },
    {
        texto:"Sua poesia possuia uma linguagem:",
        opcoes: ["Delicada e Musicalidade", "Racional e Musicalidade", "Irracional e Musicalidade", "Bruta e Musicalidade" ],
        respostaCorreta: 0
    },
    {
        texto:"Entre suas principais obras estão:",
        opcoes: ["Viagem, Vaga Música, Romanceiro da Inconfidência e Espectros", "Viagem, Mar Absoluto, Espectros e Isto ou Aquilo", "Escolha seu Sonho, Espectros, Vaga Música e Viagem", "Viagem, Vaga Música, Mar Absoluto e Romanceiro da Inconfidência"],
        respostaCorreta: 3
    },
    {
        texto:"DESAFIO - 'Entre suas principais obras estão “Viagem”, “Vaga Música”, “Mar Absoluto” e “Romanceiro da Inconfidência”. Além da literatura, Cecília também trabalhou como professora e teve grande importância na educação brasileira. Atualmente, é considerada uma das'. Ela é considerada uma das maiores:",
        opcoes: ["Maiores Poetisas e Sambista", "Maiores Poetisas e Literatura", "Maiores Poetisas e Escritoras"],
        respostaCorreta: 1
    }    
]

const quiz = document.getElementById("quiz");

quiz.innerHTML = perguntas.map((pergunta, indice) => `
    <div class="questao">
        <h3>Pergunta ${indice + 1}: ${pergunta.texto}</h3>
        <form>
            ${pergunta.opcoes.map((opcao, opcaoIndex) => `
                <input type="radio" name="pergunta${indice}" value="${opcaoIndex}" id="pergunta${indice}-opcao${opcaoIndex}">
                <label for="pergunta${indice}-opcao${opcaoIndex}">${opcao}</label><br>
            `).join('')}
        </form>
    </div>
`).join('') + `
    <button id="ver-pontuacao" type="button">Ver pontuação</button>
    <p id="resultado" aria-live="polite"></p>
`;

document.getElementById("ver-pontuacao").addEventListener("click", () => {
    let pontuacao = 0;

    perguntas.forEach((pergunta, indice) => {
        const respostaSelecionada = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );

        if (respostaSelecionada && Number(respostaSelecionada.value) === pergunta.respostaCorreta) {
            pontuacao++;
        }
    });

    document.getElementById("resultado").textContent =
        `Você fez ${pontuacao} de ${perguntas.length} pontos!`;
});