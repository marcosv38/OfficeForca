//Array de palavras
const palavras = [{
    "escrita": "Gato",
    "dificuldade": "Fácil",
    "categoria": "Animais"
}, {
    "escrita": "Sol",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
}, {
    "escrita": "Livro",
    "dificuldade": "Fácil",
    "categoria": "Objetos"
}, {
    "escrita": "Mesa",
    "dificuldade": "Fácil",
    "categoria": "Móveis"
}, {
    "escrita": "Rio",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
}, {
    "escrita": "Casa",
    "dificuldade": "Fácil",
    "categoria": "Construções"
}, {
    "escrita": "Cão",
    "dificuldade": "Fácil",
    "categoria": "Animais"
}, {
    "escrita": "Pão",
    "dificuldade": "Fácil",
    "categoria": "Alimentos"
}, {
    "escrita": "Rato",
    "dificuldade": "Fácil",
    "categoria": "Animais"
}, {
    "escrita": "Luz",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
}, {
    "escrita": "Café",
    "dificuldade": "Fácil",
    "categoria": "Bebidas"
}, {
    "escrita": "Lago",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
}, {
    "escrita": "Nuvem",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
}, {
    "escrita": "Vela",
    "dificuldade": "Fácil",
    "categoria": "Objetos"
}, {
    "escrita": "Faca",
    "dificuldade": "Fácil",
    "categoria": "Utensílios"
}, {
    "escrita": "Jogo",
    "dificuldade": "Fácil",
    "categoria": "Entretenimento"
}, {
    "escrita": "Navio",
    "dificuldade": "Fácil",
    "categoria": "Transporte"
}, {
    "escrita": "Fogo",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
}, {
    "escrita": "Mãe",
    "dificuldade": "Fácil",
    "categoria": "Família"
}, {
    "escrita": "Pera",
    "dificuldade": "Fácil",
    "categoria": "Frutas"
}, {
    "escrita": "Jovem",
    "dificuldade": "Médio",
    "categoria": "Idade"
}, {
    "escrita": "Livro",
    "dificuldade": "Médio",
    "categoria": "Objetos"
}, {
    "escrita": "Árvore",
    "dificuldade": "Médio",
    "categoria": "Natureza"
}, {
    "escrita": "Mundo",
    "dificuldade": "Médio",
    "categoria": "Geografia"
}, {
    "escrita": "Festa",
    "dificuldade": "Médio",
    "categoria": "Eventos"
}, {
    "escrita": "Chave",
    "dificuldade": "Médio",
    "categoria": "Objetos"
}, {
    "escrita": "Cabelo",
    "dificuldade": "Médio",
    "categoria": "Corpo"
}, {
    "escrita": "Praia",
    "dificuldade": "Médio",
    "categoria": "Lugares"
}, {
    "escrita": "Cidade",
    "dificuldade": "Médio",
    "categoria": "Geografia"
}, {
    "escrita": "Amigos",
    "dificuldade": "Médio",
    "categoria": "Relações"
}, {
    "escrita": "Caneta",
    "dificuldade": "Médio",
    "categoria": "Objetos"
}, {
    "escrita": "Escola",
    "dificuldade": "Médio",
    "categoria": "Educação"
}, {
    "escrita": "Carro",
    "dificuldade": "Médio",
    "categoria": "Transporte"
}, {
    "escrita": "Pássaro",
    "dificuldade": "Médio",
    "categoria": "Animais"
}, {
    "escrita": "Janela",
    "dificuldade": "Médio",
    "categoria": "Construções"
}, {
    "escrita": "Sabão",
    "dificuldade": "Médio",
    "categoria": "Produtos"
}, {
    "escrita": "Roupa",
    "dificuldade": "Médio",
    "categoria": "Vestuário"
}, {
    "escrita": "Futuro",
    "dificuldade": "Médio",
    "categoria": "Tempo"
}, {
    "escrita": "Relógio",
    "dificuldade": "Médio",
    "categoria": "Objetos"
}, {
    "escrita": "Cadeira",
    "dificuldade": "Difícil",
    "categoria": "Móveis"
}, {
    "escrita": "Jardim",
    "dificuldade": "Difícil",
    "categoria": "Natureza"
}, {
    "escrita": "Pintura",
    "dificuldade": "Difícil",
    "categoria": "Arte"
}, {
    "escrita": "Cachorro",
    "dificuldade": "Difícil",
    "categoria": "Animais"
}, {
    "escrita": "Telefone",
    "dificuldade": "Difícil",
    "categoria": "Tecnologia"
}, {
    "escrita": "Música",
    "dificuldade": "Difícil",
    "categoria": "Entretenimento"
}, {
    "escrita": "Trabalho",
    "dificuldade": "Difícil",
    "categoria": "Profissões"
}, {
    "escrita": "Elefante",
    "dificuldade": "Difícil",
    "categoria": "Animais"
}, {
    "escrita": "Universo",
    "dificuldade": "Difícil",
    "categoria": "Ciências"
}, {
    "escrita": "Bateria",
    "dificuldade": "Difícil",
    "categoria": "Tecnologia"
}, {
    "escrita": "Lâmpada",
    "dificuldade": "Difícil",
    "categoria": "Objetos"
}, {
    "escrita": "Férias",
    "dificuldade": "Difícil",
    "categoria": "Tempo livre"
}, {
    "escrita": "Amoroso",
    "dificuldade": "Difícil",
    "categoria": "Adjetivo"
}, {
    "escrita": "Galinha",
    "dificuldade": "Difícil",
    "categoria": "Animais"
}, {
    "escrita": "Escrever",
    "dificuldade": "Difícil",
    "categoria": "Ações"
}, {
    "escrita": "Caminho",
    "dificuldade": "Difícil",
    "categoria": "Lugares"
}, {
    "escrita": "Piscina",
    "dificuldade": "Difícil",
    "categoria": "Diversão"
}, {
    "escrita": "Montanha",
    "dificuldade": "Difícil",
    "categoria": "Geografia"
}, {
    "escrita": "Marítimo",
    "dificuldade": "Difícil",
    "categoria": "Relacionado ao mar"
}, {
    "escrita": "Cultural",
    "dificuldade": "Difícil",
    "categoria": "Relacionado à cultura"
}];

/*--------------Variáveis de seleção de jogo----------------*/
const inputTemporizador = document.querySelector('.mensagens__container__footer__temporizador');
const buttonTemporizador = document.querySelector('.mensagens__container__footer__submit');
const buttonFacil = document.getElementById("Fácil");
const buttonMedio = document.getElementById("Médio");
const buttonDificil = document.getElementById("Difícil");
const btTop = document.querySelectorAll(".button-top");
const btBottom = document.querySelectorAll(".button-bottom");
let tempoDeJogo = 0;
let dificuldadeDoJogo = "";
/*---------------Variáveis do jogo--------------------*/
const cronometro = document.querySelector('.game-temporizador');
const labelPontuacao = document.querySelector('.game-score');
const containerLetras = document.querySelector('.game__palavras__letras');
const categoriaIndicador = document.querySelector('.game__palavras__categorias');
let pontuacao = 0;
let intervaloContador = null;
let palavrasSelecionadas = [];
let palavraAtiva = "";
let erros = 0;
let contagemPalavras = 0;
const pontuacaoLabel = document.querySelector('.game-score');
/*-----------------Reconhecimento de voz-----------------*/
window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    validarLetra(chute);
}

recognition.addEventListener('end', () => recognition.start());

/*-----------------Organizando Inicio de jogo----------------*/
const contagemRegressiva = () => {
    if (tempoDeJogo <= 0) {
        alert(`Tempo finalizado!! Sua Pontuação foi ${pontuacao}`);
        clearInterval(intervaloContador);
        location.reload();
        return
    }
    tempoDeJogo -= 1;
    mostrarTempo();
}

function mostrarTempo() {
    const tempo = new Date(tempoDeJogo * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', { minute: '2-digit', second: '2-digit' });
    cronometro.innerHTML = `Tempo Restante: ${tempoFormatado}`;
}


//separar palavras de acordo com a dificuldade
function selecionarPlavras() {
    palavras.forEach((item) => {
        if (item.dificuldade === dificuldadeDoJogo) {
            palavrasSelecionadas.push(item);
        }
    });
}

// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}


//gerar numero aleatório 
function sortearPalavra() {
    palavrasSelecionadas = shuffleArray(palavrasSelecionadas);
    palavraAtiva = 0;
}

//colocar letras no espaço de palavras
function distribuirLetras() {
    //apaga todas as letras e depois adiciona
    const letras = document.querySelectorAll(".game__palavras__letras-container");
    letras.forEach((elemento) => { elemento.remove(); });

    //insere a quantidade de letras da palavra no jogo
    for (let i = 0; i < palavrasSelecionadas[palavraAtiva].escrita.length; i++) {
        containerLetras.innerHTML += `
            <li class="game__palavras__letras-container">
                <div class="brutalist-card">
                    <p class="brutalist-card__message">
                    
                    </p>
                </div>
            </li>
            `;
    }
    //insere categoria no campo indicado
    categoriaIndicador.textContent = `Categoria: ${palavrasSelecionadas[palavraAtiva].categoria}`

}

//iniciar jogo
function iniciar() {
    intervaloContador = setInterval(contagemRegressiva, 1000);
    selecionarPlavras();
    sortearPalavra();
    distribuirLetras();
}


/*------------- seleção de dificuldade e tempo de jogo------------*/

//Função de escolha de dificuldade
buttonFacil.addEventListener('click', (evento) => {
    dificuldadeDoJogo = "Fácil";
    ativarBotoes(btTop[0], btBottom[0]);
});

buttonMedio.addEventListener('click', (evento) => {
    dificuldadeDoJogo = "Médio";
    ativarBotoes(btTop[1], btBottom[1]);
});

buttonDificil.addEventListener('click', (evento) => {
    dificuldadeDoJogo = "Difícil";
    ativarBotoes(btTop[2], btBottom[2]);
});

//Função de troca de estilos do botão ativo
function ativarBotoes(btTop, btBottom) {
    //Tirar o estilo de ativo do botão selecionado
    const ativos = document.querySelectorAll('.botoes-active');
    ativos.forEach((item) => {
        item.classList.remove('botoes-active');
    });
    btTop.classList.add("botoes-active");
    btBottom.classList.add("botoes-active");
}

//Submit inicial de dificuldade e tempo.
buttonTemporizador.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (!inputTemporizador.value || isNaN(inputTemporizador.value)) {
        alert("Por favor adicione o tempo de partida válido!!!");
    } else {
        if (dificuldadeDoJogo === "") {
            alert("Por favor, selecione a dificuldade da partida!!!");
        } else {
            document.querySelector('.mensagens').classList.add("display__hidden");//escondendo caixa de dialogo incial
            alert("O jogo está prestes a começar! Para adicionar letras, diga 'Letra' seguido da letra desejada, por exemplo, 'Letra A', até formar a palavra completa. Se preferir, você também pode dizer a palavra inteira de uma vez, se já souber. Boa sorte e divirta-se!");
            recognition.start();//iniciar reconhecimento de voz
            tempoDeJogo = inputTemporizador.value; //inserindo tempo de jogo
            mostrarTempo();
            iniciar(); //iniciando jogo
        }
    }
});


/*--------------Mecânica do jogo-----------------*/

//validando letra falada
function validarLetra(chute) {
    const letrasAtivas = document.querySelectorAll(".brutalist-card__message");

    if (chute.toLowerCase() === "terminar") {
        alert(`O jogo acabou!! Sua Pontuação foi: ${pontuacao}`);
        location.reload();
    } else if (chute.match(/letra/)) {

        const letraExtraida = chute.charAt(chute.length - 1);
        let letraErrada = true;

        //Verificando cada letra para ver se foi acertada e por no lugar
        for (let i = 0; i < palavrasSelecionadas[palavraAtiva].escrita.length; i++) {
            const letraSemAcento = palavrasSelecionadas[palavraAtiva].escrita.charAt(i).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
            if (letraExtraida.toLowerCase() === letraSemAcento.toLowerCase()) {
                letrasAtivas[i].textContent = palavrasSelecionadas[palavraAtiva].escrita.charAt(i);
                letraErrada = false;
            }
        }

        verificarErros(letraErrada);

        if (!letraErrada) {
            contagemPalavras++;
        }

        if (contagemPalavras === letrasAtivas.length) {
            acertouPalavra();
        }


    } else if (chute.toLowerCase() === palavrasSelecionadas[palavraAtiva].escrita.toLowerCase()) {

        for (let i = 0; i < palavrasSelecionadas[palavraAtiva].escrita.length; i++) {
            letrasAtivas[i].textContent = palavrasSelecionadas[palavraAtiva].escrita.charAt(i);
        }
        acertouPalavra();
    } else {
        alert("Letra inválida");
    }
}


//verificação para caso a letra esteja errada
function verificarErros(letraErrada) {
    if (letraErrada) {
        erros++;
        const imagemJogo = document.querySelector('.game__imagem-estado');
        if (erros < 4) {
            imagemJogo.setAttribute('src', "/imagens/Error" + erros + ".png");
        } else if (erros === 4) {
            imagemJogo.setAttribute('src', "/imagens/GameOver.png");
        } else {
            alert(`O jogo acabou!! Você errou 5 vezes. Sua Pontuação foi: ${pontuacao}`);
            location.reload();
        }
    }
}

//função de acerto de palavra
function acertouPalavra() {
    palavraAtiva++;
    contagemPalavras = 0;
    if(erros>1){
        erros--;
        const imagemJogo = document.querySelector('.game__imagem-estado');
        imagemJogo.setAttribute('src', "/imagens/Error" + erros + ".png");
    }else if(erros===1){
        erros--;
        const imagemJogo = document.querySelector('.game__imagem-estado');
        imagemJogo.setAttribute('src', "/imagens/startGame.png");
    }
    pontuacao += 100;
    pontuacaoLabel.textContent = `Placar: ${pontuacao}`;

    if (palavraAtiva === 20) {
        alert(`Parabéns, o jogo acabou!! Você acertou todas as 20 palavras. Sua Pontuação total é de ${pontuacao} pontos!`);
        location.reload();
    }
    
    distribuirLetras();
}