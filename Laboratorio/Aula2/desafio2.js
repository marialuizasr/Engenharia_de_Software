const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Filme {
    constructor(titulo, ano, genero, duracao) {
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
        this.duracao = duracao
    }

    exibe_detalhes() {
        console.log(`Título do filme: ${this.titulo}`)
        console.log(`Ano do filme: ${this.ano}`)
        console.log(`Gênero do filme: ${this.genero}`)
        console.log(`Duração do filme em minutos: ${this.duracao}`)
        console.log('Assistido? ')
        if (this.assistido === true)
            console.log('Sim')
        else console.log('Não')
        if (this.avaliacao != null) {
            console.log(`Nota de 0 a 10: ${this.avaliacao}`)
        }
        else console.log('Ainda não foi avaliado')
    }

    marcar_como_assistido() {
        this.assistido = true
    }

    avaliar(nota) {
        this.avaliacao = nota
    }
}

const filmes = []
escolha = 0;

function exibeMenu() {
    console.log('Menu:')
    console.log('1. Adicionar um novo filme');
    console.log('2. Marcar um filme como assistido');
    console.log('3. Avaliar um filme');
    console.log('4. Exibir a lista de filmes');
    console.log('5. Sair do programa');
    console.log('Digite o número da opção desejada: ')
}

function adicionaFilme() {
    rl.question('Título do filme: ', titulo => {
        rl.question('Ano do filme: ', ano => {
            rl.question('Gênero do filme: ', genero => {
                rl.question('Duração do filme em minutos: ', duracao => {
                    const novoFilme = new Filme(titulo, ano, genero, duracao);
                    filmes.push(novoFilme);
                    console.log(`Você adicionou ${novoFilme.titulo} à lista de Filmes!`);
                    exibeMenu()
                });
            });
        });
    });
}

function marcaAssistido() {
    if (filmes.length === 0) {
        console.log('Não é possível marcar um filme como assistido, pois a lista de filmes está vazia.')
        exibeMenu()
    }

    else {
        rl.question('Digite o índice do filme que deseja marcar como assistido: ', indice => {
            if (indice >= 0 && indice < filmes.length) {
                filmes[indice].marcar_como_assistido();
                console.log(`Você marcou ${filmes[indice].titulo} como assistido!`);
            } else {
                console.log('Índice inválido.');
            }
            exibeMenu()
        });
    }
}

function avaliaFilme() {
    if (filmes.length === 0) {
        console.log('Não é possível avaliar um filme, pois a lista de filmes está vazia.')
    }

    else {
        rl.question('Digite o índice do filme que deseja avaliar: ', indice => {
            rl.question('Digite a nota de 0 a 10 para o filme: ', nota => {
                if (indice >= 0 && indice < filmes.length && !isNaN(nota) && nota >= 0 && nota <= 10) {
                    filmes[indice].avaliar(parseFloat(nota));
                    console.log('Filme avaliado com sucesso!');
                } else {
                    console.log('Índice ou nota inválidos.');
                }
                exibeMenu()
            });
        });
    }

}

function exibeListaFilmes() {
    if (filmes.length !== 0) {
        console.log('Lista de Filmes: ');
        filmes.forEach((filme, indice) => {
            console.log(`${filme.exibe_detalhes()}`);
        });
    }

    else console.log('Por enquanto a lista de filmes está vazia.')

    exibeMenu()
}

exibeListaFilmes()

rl.on('line', escolhadoUsuario => {

    escolha = parseInt(escolhadoUsuario)

    switch (escolha) {
        case 1:
            adicionaFilme()
            break
        case 2:
            marcaAssistido()
            break
        case 3:
            avaliaFilme()
            break
        case 4:
            exibeListaFilmes()
            break
        case 5:
            console.log('Saindo do programa...')
            rl.close()
            break
        default:
            console.log('Opção inválida.')
            exibeMenu()
            break
    }
});


