package tn.bewirelesssolutions.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.bewirelesssolutions.backend.entity.Conducteur;
import tn.bewirelesssolutions.backend.entity.Voiture;
import tn.bewirelesssolutions.backend.repository.ConducteurRepository;
import tn.bewirelesssolutions.backend.repository.VoitureRepository;

import java.util.List;
@Service
public class ServiceVoitureImpl implements ServiceVoiture{
    @Autowired
    VoitureRepository voitureRepository;
    @Autowired
    ConducteurRepository conducteurRepository;

    @Override
    public void ajouterVoiture(Voiture voiture) {
        if(voitureRepository.findByMatricule(voiture.getMatricule())!=null){
            System.out.println("Matricule already exist");
        }
        else{
            voitureRepository.save(voiture);
        }

    }

    @Override
    public void modifierVoiture(Voiture voiture) {
        voitureRepository.save(voiture);
    }

    @Override
    public void supprimerVoiture(int id) {
        //1 methode:
        //voitureRepository.deleteById(id);
        //2 methode:
        Voiture voiture=voitureRepository.findById(id).orElse(null);
        voitureRepository.delete(voiture);
    }

    @Override
    public List<Voiture> afficherVoiture() {

        return (List<Voiture>) voitureRepository.findAll();
    }

    @Override
    public void affecterVoitureaConducteur(int idVoiture, int idConducteur) {
        Voiture v=voitureRepository.findById(idVoiture).orElse(null);
        Conducteur c=conducteurRepository.findById(idConducteur).orElse(null);
        v.getConducteurs().add(c);
        voitureRepository.save(v);


    }

    @Override
    public Voiture getVoitureById(int id) {
        return voitureRepository.findById(id).orElse(null);
    }

}
