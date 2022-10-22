package tn.bewirelesssolutions.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.bewirelesssolutions.backend.entity.Conducteur;
import tn.bewirelesssolutions.backend.service.ServiceConducteur;

import java.util.List;

@RestController
public class ConducteurController {
    @Autowired
    ServiceConducteur serviceConducteur;
    @PostMapping("/ajouterConducteur")
    void ajouterConducteur(@RequestBody Conducteur conducteur){
        serviceConducteur.ajouterConducteur(conducteur);
    }
    @PutMapping("/modifierConducteur")
    void modifierConducteur(@RequestBody Conducteur conducteur){
        serviceConducteur.modifierConducteur(conducteur);
    }
    @DeleteMapping("/supprimerConducteur/{idConducteur}")
    void deleteConducteur(@PathVariable int idConducteur){
        serviceConducteur.supprimerConducteur(idConducteur);
    }
    @GetMapping("/afficherConducteur")
    List<Conducteur> afficherConducteur(){
        return serviceConducteur.afficherConducteur();
    }
}
