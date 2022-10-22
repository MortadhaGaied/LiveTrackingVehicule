package tn.bewirelesssolutions.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.bewirelesssolutions.backend.entity.Voiture;
import tn.bewirelesssolutions.backend.service.ServiceVoiture;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
public class VoitureController {
    @Autowired
    ServiceVoiture serviceVoiture;
    //http://localhost:8080/ajouterVoiture
    @PostMapping("/ajouterVoiture")
    void ajouterVoiture(@RequestBody Voiture voiture){
        serviceVoiture.ajouterVoiture(voiture);
    }
    @PutMapping("/modifierVoiture")
    void modifierVoiture(@RequestBody Voiture voiture){
        serviceVoiture.modifierVoiture(voiture);
    }
    @DeleteMapping("/supprimerVoiture/{idVoiture}")
    void deleteVoiture(@PathVariable int idVoiture){
        serviceVoiture.supprimerVoiture(idVoiture);
    }
    @GetMapping("/afficherVoiture")
    List<Voiture> afficherVoiture(){
        return serviceVoiture.afficherVoiture();
    }
    @PostMapping("/affecterVoitureaConducteur/{idVoiture}/{idConducteur}")
    void affecterVoitureaConducteur(@PathVariable int idVoiture,@PathVariable int idConducteur){
        serviceVoiture.affecterVoitureaConducteur(idVoiture, idConducteur);
    }
    @GetMapping("getvoiturebyid/{id}")
    Voiture getVoitureById(@PathVariable int id){
        return serviceVoiture.getVoitureById(id);
    }
}
