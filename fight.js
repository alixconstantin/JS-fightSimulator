class Personnage {

    constructor(pseudo, classe, sante, attaque) {

        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }

    evoluer() {

        this.niveau++;
        console.log(this.pseudo + " passe au niveau " + this.niveau);
    }


    verifierSante() {

        if (this.sante <= 0) {
            this.sante = 0;
            console.log(this.pseudo + " a perdu ! vous avez " + this.sante + " de santé :( !");
        }
    }


    get information() {
        return this.pseudo + " le " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau;
    }
}


class Magicien extends Personnage {

    constructor(pseudo ,classe, sante, attaque, niveau) {

        super(pseudo, niveau);
        this.classe = "Magicien";
        this.sante  = 170;
        this.attaque = 90;

    }

    attaquer(){



    }

    coupSpecial() {


        
    }





}

let Alex = new Magicien("Bronze");
console.log(Alex.information);