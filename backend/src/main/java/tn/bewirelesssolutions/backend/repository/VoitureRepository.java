package tn.bewirelesssolutions.backend.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import tn.bewirelesssolutions.backend.entity.Voiture;

import java.util.List;
@Repository
public interface VoitureRepository extends CrudRepository<Voiture,Integer> {



    Voiture findByMatricule(String matricule);

}
