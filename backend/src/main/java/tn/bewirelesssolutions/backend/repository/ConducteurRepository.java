package tn.bewirelesssolutions.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import tn.bewirelesssolutions.backend.entity.Conducteur;

@Repository
public interface ConducteurRepository extends CrudRepository<Conducteur,Integer> {
}
