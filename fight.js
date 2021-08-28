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

            if (this.classe == 'Magicien') {

                switch (this.niveau) {
                    case 2:
                        this.sante = 170;
                        break;
                    case 3:
                        this.sante = 200;
                        break;
                    case 4:
                        this.sante = 230;
                        break;
                    case 5:
                        this.sante = 260
                        break;
                }
            }
            // etc 
            if (this.classe == 'Guerrier') {

                switch (this.niveau) {
                    case 2:
                        this.sante = 320;
                        break;
                    case 3:
                        this.sante = 350;
                        break;
                    case 4:
                        this.sante = 380;
                        break;
                    case 5:
                        this.sante = 420;
                        break;
                }
            }

            this.sante += 30;
            this.attaque += 15;
            console.log(this.pseudo + " passe au niveau " + this.niveau + " et récupère tout ses points de vie et possède maintenant " + this.sante + " points de vie ( +30 ) et " + this.attaque + " degats ( +15 )");
        }

    }


    verifierSante() {

        if (this.sante <= 0) {
            this.sante = 0;
            console.log(this.pseudo + " vous avez perdu ! vous avez " + this.sante + " de santé :( !");
        }
    }


    get informations() {
        return this.pseudo + " le " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau;
    }
}


class Magicien extends Personnage {

    constructor(pseudo, classe, sante, attaque, niveau) {

        super(pseudo,"Magicien", 170, 90, niveau);
       //  this.classe = "Magicien";
       //  this.sante = 170;
       //  this.attaque = 90;
    }


    attaquer(ennemy) {

        ennemy.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + ennemy.pseudo + " en lançant un éclair de givre et lui inflige " + this.attaque + " dégats")
        ennemy.verifierSante();
        this.evoluer(ennemy);
    }


    coupSpecial(ennemy) {

        ennemy.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque " + ennemy.pseudo + " en lançant un sort ancestral des arcanes et lui inflige " + this.attaque * 5 + " dégats ( " + this.attaque + " X 5 )");
        ennemy.verifierSante();
        this.evoluer(ennemy);
    }

}


class Guerrier extends Personnage {

    constructor(pseudo, classe, sante, attaque, niveau) {

        super(pseudo, "Guerrier", 320, 50, niveau);
        // this.classe = "Guerrier";
       // this.sante = 320;
       // this.attaque = 50;
    }

    
    attaquer(ennemy) {

        ennemy.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + ennemy.pseudo + " avec un coup d'épée tranchant et lui inflige " + this.attaque+ " dégats")
        ennemy.verifierSante();
        this.evoluer(ennemy);
    }


    coupSpecial(ennemy) {

        ennemy.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque " + ennemy.pseudo + " attaque avec son coup spécial haches de guerre et lui inflige " + this.attaque * 5 + " dégats ( " + this.attaque + " X 5 )");
        ennemy.verifierSante();
        this.evoluer(ennemy);
    }

}

var gandalf = new Magicien('Gandalf');
var thor = new Guerrier('Thor');
var paul = new Guerrier('Paul');


console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);
console.log(gandalf.informations);
console.log(paul.informations);
gandalf.coupSpecial(paul);//  
console.log(gandalf.informations);

//  Thor le Guerrier a 320 points de vie et est au niveau 1
//  Gandalf le Magicien a 170 points de vie et est au niveau 1
//  Gandalf attaque Thor en lançant un éclair de givre et lui inflige 90 dégats
//  Thor le Guerrier a 230 points de vie et est au niveau 1
//  Thor attaque Gandalf avec un coup d'épée tranchant et lui inflige 50 dégats
//  Gandalf le Magicien a 120 points de vie et est au niveau 1
//  Gandalf attaque Thor en lançant un sort ancestral des arcanes et lui inflige 450 dégats ( 90 X 5 )
//  Thor vous avez perdu ! vous avez 0 de santé :( !
//  Gandalf passe au niveau 2 et récupère tout ses points de vie possède maintenant 200 points de vie ( +30 ) et 105 degats ( +15 )
//  Gandalf le Magicien a 200 points de vie et est au niveau 2
//  Paul le Guerrier a 320 points de vie et est au niveau 1
//  Gandalf attaque Paul en lançant un sort ancestral des arcanes et lui inflige 525 dégats ( 105 X 5 )
//  Paul vous avez perdu ! vous avez 0 de santé :( !
//  Gandalf passe au niveau 3 et récupère tout ses points de vie possède maintenant 230 points de vie ( +30 ) et 120 degats ( +15 )
//  Gandalf le Magicien a 230 points de vie et est au niveau 3


let Tsuki = new Magicien('tsuiki');
console.log(Tsuki.informations);
