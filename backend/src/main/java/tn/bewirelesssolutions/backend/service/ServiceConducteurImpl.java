package tn.bewirelesssolutions.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.bewirelesssolutions.backend.entity.Conducteur;
import tn.bewirelesssolutions.backend.entity.Voiture;
import tn.bewirelesssolutions.backend.repository.ConducteurRepository;
import tn.bewirelesssolutions.backend.repository.VoitureRepository;

import java.util.ArrayList;
import java.util.List;
@Service
public class ServiceConducteurImpl implements ServiceConducteur{
    @Autowired
    ConducteurRepository conducteurRepository;
    @Autowired
    VoitureRepository voitureRepository;
    @Override
    public void ajouterConducteur(Conducteur conducteur) {
        conducteurRepository.save(conducteur);
    }

    @Override
    public void modifierConducteur(Conducteur conducteur) {
        conducteurRepository.save(conducteur);
    }

    @Override

    public void supprimerConducteur(int id) {
        List<Voiture> voitures=new ArrayList<>();
        Conducteur c=conducteurRepository.findById(id).orElse(null);
        c.setVoiture(null);
        conducteurRepository.deleteById(id);
    }

    @Override
    public List<Conducteur> afficherConducteur() {
        return (List<Conducteur>) conducteurRepository.findAll();
    }
}
