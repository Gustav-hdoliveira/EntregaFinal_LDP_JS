let reader = require("readline-sync")

interface Prova {
    constructor(gabarito: Array<string>);
    respostaAluno(): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}

class Prova implements Prova {
    gabarito: Array<string>
    respostas: string[]= []

    constructor(gabarito: string[]) {
        this.gabarito = gabarito
    }

    respostaAluno(): void {
        
        for (const valor of this.gabarito) {
            let pergunta = 1
            console.log(`Pergunta nº ${pergunta}`)
            let respostaAluno = reader.question("Qual sua resposta? A, B, C, D, E: ")
            this.respostas[pergunta - 1] = respostaAluno.toUpperCase()
            pergunta++
        }
    }
    acertos(): number {
        let acertos = 0
        for (const RespQuest of this.gabarito) {
            let NUMquest = 0
            if (RespQuest == this.respostas[NUMquest]) {
                acertos++
            } else {
            }
        }
        return acertos
    }
    setProva(){
        for (let i = 0; i < this.gabarito.length; i++) {
            let PerguntaProva = reader.question(`Qual a resposta da pergunta ${i + 1}? A, B, C, D ou E? `)
            this.gabarito[i] = PerguntaProva
        }
    }
    nota(): number {
        for (let o = 0; o < this.respostas.length; o++) {
            const element = array[o]
            if (o >= 9) {
                
            }
            
        }
    }
}

let prova = new Prova(['A', 'B', 'E', 'D', 'B', 'C', 'C', 'A', 'B', 'E', 'D', 'D', 'B', 'C', 'C'])
