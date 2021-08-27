class Personnage {

    constructor(pseudo, classe, sante, attaque) {

        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }

    evoluer(ennemy) {
        if (ennemy.sante <= 0) {
            this.niveau++;
            console.log(this.pseudo + " passe au niveau " + this.niveau);
        }

    }


    verifierSante() {

        if (this.sante <= 0) {
            this.sante = 0;
            console.log(this.pseudo + " vous avez perdu ! vous avez " + this.sante + " de santé :( !");
        }
    }


    get information() {
        return this.pseudo + " le " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau;
    }
}


class Magicien extends Personnage {

    constructor(pseudo, classe, sante, attaque, niveau) {

        super(pseudo, niveau);
        this.classe = "Magicien";
        this.sante = 170;
        this.attaque = 90;
    }

    attaquer(ennemy) {

        ennemy.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + ennemy.pseudo + " en lançant un éclair de givre et lui inflige " + this.attaque + " dégats")
        ennemy.verifierSante();
        this.evoluer(ennemy);
    }


    coupSpecial(ennemy) {

        ennemy.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque " + ennemy.pseudo + " en lançant un sort ancestral des arcanes et lui inflige " + this.attaque + " dégats")
        ennemy.verifierSante();
        this.evoluer(ennemy);
    }

}

let player1 = new Magicien("Neo");
let player2 = new Magicien("Ifris")

console.log(player2.information);
player1.attaquer(player2);
console.log(player2.information);
player1.attaquer(player2);