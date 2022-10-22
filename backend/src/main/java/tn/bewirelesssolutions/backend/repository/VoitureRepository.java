package tn.bewirelesssolutions.backend.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import tn.bewirelesssolutions.backend.entity.Voiture;

import java.util.List;
@Repository
public interface VoitureRepository extends CrudRepository<Voiture,Integer> {

    //methode 1:
    List<Voiture> findByCouleur(String couleur);//keywords
    Voiture findByMatricule(String matricule);
    //methode 2:
    @Query("SELECT v FROM Voiture v where v.couleur=?1 and v.marque=?2")
    List<Voiture> retrieveVoitureByCouleuretMarque(String couleur,String marque);
    //methode 3:
    @Query(value="select * from vehicule v where v.couleur=?1",nativeQuery = true)
    List<Voiture> retrieveVoitureByCouleur2(String couleur);
}
