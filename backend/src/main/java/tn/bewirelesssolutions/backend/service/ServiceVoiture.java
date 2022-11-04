package tn.bewirelesssolutions.backend.service;

import tn.bewirelesssolutions.backend.entity.Voiture;

import java.util.List;

public interface ServiceVoiture {
    void ajouterVoiture(Voiture voiture);
    void modifierVoiture(Voiture voiture);
    void supprimerVoiture(int id);
    List<Voiture> afficherVoiture();
    void affecterVoitureaConducteur(int idVoiture,int idConducteur);
    Voiture getVoitureById(int id);
    void ajouterVoitureEtaffecterUnConducteur(int idConducteur,Voiture voiture);
}
