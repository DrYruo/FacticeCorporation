package fr.iut.facticeCorporationBack.repositories;

import fr.iut.facticeCorporationBack.models.Client;
import org.springframework.data.repository.CrudRepository;

public interface ClientRepository extends CrudRepository<Client, Long> {
    // Seuls les méthodes findAll() et findById() sont accessibles
}
