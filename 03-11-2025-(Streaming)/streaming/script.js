// dados dos filmes com imagens armazenadas localmente na pasta 'imagens' 
const filmes = {
    acao:[
        {
            titulo: "Sonic 3",
            diretor: "Jeff Fowler",
            elenco: "Jim Carrey, Keanu Reeves, Ben Schwartz, Idris Elba, Colleen O'Shaughnessey",
            sinopse: "Sonic, Knuckles e Tails se juntam para enfrentar Shadow, um novo e misterioso inimigo com poderes diferentes de tudo que já enfrentaram antes. As habilidades do trio são superadas em todos os aspectos e eles precisam buscar uma improvável aliança.",
            imagem: "imagens/sonic3-poster.jpg",
        },
        {
            titulo: "Tropa De Elite 2",
            diretor: "José Padilha",
            elenco: "Wagner Moura, André Ramiro, Caio Junqueira",
            sinopse: "Depois de uma operação fracassada, Nascimento é afastado do Bope e agora trabalha como subsecretário de Inteligência na Secretaria de Segurança Pública do Rio de Janeiro. No novo cargo, o ex-capitão é arrastado para uma disputa política sangrenta que envolve funcionários do governo e grupos paramilitares.",
            imagem: "imagens/TropaDeElite2.jpg",
        },
        {
            titulo: "Até O Ultimo Homem",
            diretor: "Mel Gibson",
            elenco: "Andrew Garfield, Luke Bracey, Sam Worthington, Vince Vaughn",
            sinopse: "Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens.",
            imagem: "imagens/HacksawRidge.jpg",
        }
    ],
    animacao:[
        {
            titulo: "O Castelo Animado",
            diretor: "Hayao Miyazaki",
            elenco: "Takuya Kimura, Emily Mortimer, Tatsuya Gashuin, Chieko Baisho",
            sinopse: "Uma bruxa lança uma terrível maldição sobre a jovem Sophie transformando-a em uma velha. Desesperada, ela embarca em uma odisseia em busca do mago Howl, um misterioso feiticeiro que pode ajudá-la a reverter o feitiço.",
            imagem: "imagens/howlsmovingcastle.jpg"
        },
        {
            titulo: "Akira",
            diretor: "Katsuhiro Otomo",
            elenco: "Nozomu Sasaki, Mitsuo Kiwata, Mami Koyama",
            sinopse: "Uma enorme explosão fez com que Tóquio fosse destruída em 1988. Em seu lugar foi construída Neo Tóquio, que, em 2019, sofre com atentados terroristas por toda a cidade. Os amigos Kaneda e Tetsuo integram uma gangue de motoqueiros. Eles disputam rachas violentos com uma gangue rival, os Palhaços, até que um dia Tetsuo encontra Takashi, uma estranha criança com poderes que fugiu do hospital onde era mantido como cobaia.",
            imagem: "imagens/Akira.jpg"
        },
        {
            titulo: "O Serviço de Entregas da Kiki",
            diretor: "Hayao Miyazaki",
            elenco: "Minami Takayama, Koichi Yamadera, Rei Sakuma",
            sinopse: "Por ordem de sua mãe, Kiki parte para um aprendizado de um ano, acompanhada por seu gato preto. A um comando de sua vassoura mágica, ela vai parar na charmosa cidadezinha de Moreoastal. Infelizmente, os hotéis locais não aceitam bruxas e a polícia a flagra fazendo algumas travessuras.",
            imagem: "imagens/KikisDeliveryService.jpg"
        }
    ],
    terror:[
        {
        titulo: "Invocação do Mal",
        diretor: "James Wan",
        elenco: "Vera Farmiga, Patrick Wilson, Sterling Jerins",
        sinopse: "Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.",
        imagem: "imagens/TheConjuring.jpg"
        },
        {
        titulo: "Five Night's At Freddy's - O Pesadelo Sem Fim",
            diretor: "Emma Tammi",
            elenco: "Josh Hutcherson, MatPat, Elizabeth Lail",
            sinopse: "No Freddy Fazbear's Pizza, robôs animados fazem a festa das crianças durante o dia. Mas, quando chega a noite, eles se transformam em assassinos psicopatas.",
            imagem: "imagens/FNAF.png"
        },
        {
        titulo: "Eu Sou A Lenda",
            diretor: "Francis Lawrence",
            elenco: "Will Smith, Alice Braga, Charlie Tahan",
            sinopse: "Robert Neville é um brilhante cientista e o único sobrevivente de uma epidemia que transformou os humanos em mutantes sedentos por sangue. Andando pela cidade de Nova York, ele procura por outros possíveis sobreviventes e tenta achar a cura da praga usando seu próprio sangue, que é imune.",
            imagem: "imagens/EuSouALenda.png"
        }
    ]
}


// Função para criar os filmes e exibi-los no HTML
function exibirFilmes() {
    // Obter os contêineres de cada categoria
    const acaoContainer = document.getElementById("acao");
    const animacaoContainer = document.getElementById("animacao");
    const terrorContainer = document.getElementById("terror");

    // Função para exibir filmes de uma categoria
    // foreach usado para percorrer elementos dentro de uma array fórichti
    function exibirCategoria(filmes, container) {
        filmes.forEach(filme => {
            const divFilme = document.createElement("div");
            divFilme.classList.add("filme");
 
            divFilme.innerHTML = `
                <img src="${filme.imagem}" alt="${filme.titulo}">
                <h3>${filme.titulo}</h3>
                <p><strong>Diretor:</strong> ${filme.diretor}</p>
                <p><strong>Elenco:</strong> ${filme.elenco}</p>
                <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
            `;

            container.appendChild(divFilme);
        });
    }

    // Exibir filmes para cada categoria
    exibirCategoria(filmes.acao, acaoContainer);
    exibirCategoria(filmes.animacao, animacaoContainer);
    exibirCategoria(filmes.terror, terrorContainer);
}

// Chamar a função para exibir os filmes
exibirFilmes();
