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
        if(this.assistido === true)
            console.log('Sim')
        else console.log('Não')
        if(this.avaliacao != null) {
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

const filme1 = new Filme('Barbie', '2023', 'Comédia/Drama', '114')
const filme2 = new Filme('Oppenheimer', '2023', 'Drama/Ação', '180')
const filme3 = new Filme('Diário de uma Paixão', '2004', 'Romance/Drama', '121')

filme1.marcar_como_assistido()
filme1.avaliar(8)
filme1.exibe_detalhes()
filme2.marcar_como_assistido()
filme2.avaliar(6.5)
filme2.exibe_detalhes()
filme3.marcar_como_assistido()
filme3.avaliar(10)
filme3.exibe_detalhes()

