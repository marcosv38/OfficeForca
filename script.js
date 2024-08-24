//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#speech_recognition

const palavras = [{
    "escrita": "Gato",
    "dificuldade": "Fácil",
    "categoria": "Animais"
},{
    "escrita": "Sol",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
},{
    "escrita": "Livro",
    "dificuldade": "Fácil",
    "categoria": "Objetos"
},{
    "escrita": "Mesa",
    "dificuldade": "Fácil",
    "categoria": "Móveis"
},{
    "escrita": "Rio",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
},{
    "escrita": "Casa",
    "dificuldade": "Fácil",
    "categoria": "Construções"
},{
    "escrita": "Cão",
    "dificuldade": "Fácil",
    "categoria": "Animais"
},{
    "escrita": "Pão",
    "dificuldade": "Fácil",
    "categoria": "Alimentos"
},{
    "escrita": "Rato",
    "dificuldade": "Fácil",
    "categoria": "Animais"
},{
    "escrita": "Luz",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
},{
    "escrita": "Café",
    "dificuldade": "Fácil",
    "categoria": "Bebidas"
},{
    "escrita": "Lago",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
},{
    "escrita": "Nuvem",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
},{
    "escrita": "Vela",
    "dificuldade": "Fácil",
    "categoria": "Objetos"
},{
    "escrita": "Faca",
    "dificuldade": "Fácil",
    "categoria": "Utensílios"
},{
    "escrita": "Jogo",
    "dificuldade": "Fácil",
    "categoria": "Entretenimento"
},{
    "escrita": "Navio",
    "dificuldade": "Fácil",
    "categoria": "Transporte"
},{
    "escrita": "Fogo",
    "dificuldade": "Fácil",
    "categoria": "Natureza"
},{
    "escrita": "Mãe",
    "dificuldade": "Fácil",
    "categoria": "Família"
},{
    "escrita": "Pera",
    "dificuldade": "Fácil",
    "categoria": "Frutas"
},{
    "escrita": "Jovem",
    "dificuldade": "Médio",
    "categoria": "Idade"
},{
    "escrita": "Livro",
    "dificuldade": "Médio",
    "categoria": "Objetos"
},{
    "escrita": "Árvore",
    "dificuldade": "Médio",
    "categoria": "Natureza"
},{
    "escrita": "Mundo",
    "dificuldade": "Médio",
    "categoria": "Geografia"
},{
    "escrita": "Festa",
    "dificuldade": "Médio",
    "categoria": "Eventos"
},{
    "escrita": "Chave",
    "dificuldade": "Médio",
    "categoria": "Objetos"
},{
    "escrita": "Cabelo",
    "dificuldade": "Médio",
    "categoria": "Corpo"
},{
    "escrita": "Praia",
    "dificuldade": "Médio",
    "categoria": "Lugares"
},{
    "escrita": "Cidade",
    "dificuldade": "Médio",
    "categoria": "Geografia"
},{
    "escrita": "Amigos",
    "dificuldade": "Médio",
    "categoria": "Relações"
},{
    "escrita": "Caneta",
    "dificuldade": "Médio",
    "categoria": "Objetos"
},{
    "escrita": "Escola",
    "dificuldade": "Médio",
    "categoria": "Educação"
},{
    "escrita": "Carro",
    "dificuldade": "Médio",
    "categoria": "Transporte"
},{
    "escrita": "Pássaro",
    "dificuldade": "Médio",
    "categoria": "Animais"
},{
    "escrita": "Janela",
    "dificuldade": "Médio",
    "categoria": "Construções"
},{
    "escrita": "Sabão",
    "dificuldade": "Médio",
    "categoria": "Produtos"
},{
    "escrita": "Roupa",
    "dificuldade": "Médio",
    "categoria": "Vestuário"
},{
    "escrita": "Futuro",
    "dificuldade": "Médio",
    "categoria": "Tempo"
},{
    "escrita": "Relógio",
    "dificuldade": "Médio",
    "categoria": "Objetos"
},{
    "escrita": "Cadeira",
    "dificuldade": "Difícil",
    "categoria": "Móveis"
},{
    "escrita": "Jardim",
    "dificuldade": "Difícil",
    "categoria": "Natureza"
},{
    "escrita": "Pintura",
    "dificuldade": "Difícil",
    "categoria": "Arte"
},{
    "escrita": "Cachorro",
    "dificuldade": "Difícil",
    "categoria": "Animais"
},{
    "escrita": "Telefone",
    "dificuldade": "Difícil",
    "categoria": "Tecnologia"
},{
    "escrita": "Música",
    "dificuldade": "Difícil",
    "categoria": "Entretenimento"
},{
    "escrita": "Trabalho",
    "dificuldade": "Difícil",
    "categoria": "Profissões"
},{
    "escrita": "Elefante",
    "dificuldade": "Difícil",
    "categoria": "Animais"
},{
    "escrita": "Universo",
    "dificuldade": "Difícil",
    "categoria": "Ciências"
},{
    "escrita": "Bateria",
    "dificuldade": "Difícil",
    "categoria": "Tecnologia"
},{
    "escrita": "Lâmpada",
    "dificuldade": "Difícil",
    "categoria": "Objetos"
},{
    "escrita": "Férias",
    "dificuldade": "Difícil",
    "categoria": "Tempo livre"
},{
    "escrita": "Amoroso",
    "dificuldade": "Difícil",
    "categoria": "Adjetivo"
},{
    "escrita": "Galinha",
    "dificuldade": "Difícil",
    "categoria": "Animais"
},{
    "escrita": "Escrever",
    "dificuldade": "Difícil",
    "categoria": "Ações"
},{
    "escrita": "Caminho",
    "dificuldade": "Difícil",
    "categoria": "Lugares"
},{
    "escrita": "Piscina",
    "dificuldade": "Difícil",
    "categoria": "Diversão"
},{
    "escrita": "Montanha",
    "dificuldade": "Difícil",
    "categoria": "Geografia"
},{
    "escrita": "Marítimo",
    "dificuldade": "Difícil",
    "categoria": "Relacionado ao mar"
},{
    "escrita": "Cultural",
    "dificuldade": "Difícil",
    "categoria": "Relacionado à cultura"
}];
const elementoChute = document.getElementById('chute');

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recongnition = new SpeechRecognition();
recongnition.lang = 'pt-Br';
recongnition.start();

recongnition.addEventListener('result', onSpeak);

function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeChute(chute);
}

function exibeChute(chute){
    console.log(chute);
}

