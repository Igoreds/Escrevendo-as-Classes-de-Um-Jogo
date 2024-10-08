class Heroi {
    constructor(nomeDoHeroi, idadeDoHeroi, tipoDoHeroi) {
        this.nomeDoHeroi = nomeDoHeroi;
        this.idadeDoHeroi = idadeDoHeroi;
        this.tipoDoHeroi = tipoDoHeroi;
    }

    ataca() {
        let ataque;

        if (this.tipoDoHeroi === "mago") {
            ataque = "magia";
        } else if (this.tipoDoHeroi === "guerreiro") {
            ataque = "Espada";
        } else if (this.tipoDoHeroi === "monge") {
            ataque = "Artes marciais";
        } else if (this.tipoDoHeroi === "ninja") {
            ataque = "shuriken";
        } else {
            console.log("Escolha o tipo do seu herói");
            return; 
        }

        console.log(`O ${this.tipoDoHeroi} atacou usando ${ataque}`); 
    }
}

let criandoHeroi = new Heroi("José", "23", "ninja"); 

criandoHeroi.ataca(); 
