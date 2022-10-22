package tn.bewirelesssolutions.backend.service;

import tn.bewirelesssolutions.backend.entity.Conducteur;

import java.util.List;

public interface ServiceConducteur {
    void ajouterConducteur(Conducteur conducteur);
    void modifierConducteur(Conducteur conducteur);
    void supprimerConducteur(int id);
    List<Conducteur> afficherConducteur();
}
