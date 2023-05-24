package fr.iut.facticeCorporationBack.repositories;

import fr.iut.facticeCorporationBack.models.Employe;
import org.springframework.data.repository.CrudRepository;

public interface EmployeRepository extends CrudRepository<Employe, Long> {
    // Seuls les méthodes findAll() et findById() sont accessibles
}
