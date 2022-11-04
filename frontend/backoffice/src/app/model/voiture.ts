import { Conducteur } from "./conducteur";

export class Voiture{
    id: number;
    couleur_rouge: number;
    couleur_vert: number;
    couleur_blue: number;
    marque: string;
    matricule: string;
    typeCarburant: string;
    laltitude: number;
    longitude:number;
    dateDeFabrication: Date;
    conducteur:Conducteur;
}