package fr.iut.facticeCorporationBack.controllers;

import fr.iut.facticeCorporationBack.models.Employe;
import fr.iut.facticeCorporationBack.services.EmployeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employe")
public class EmployeController {

    @Autowired
    private EmployeService employeService;

    @GetMapping
    public ResponseEntity<List<Employe>> getAllEmployes() {
        List<Employe> employeList = employeService.getAllEmployes();
        return new ResponseEntity<>(employeList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employe> getEmployeById(@PathVariable Long id) {
        Optional<Employe> employe = employeService.getEmployeById(id);
        if (employe.isPresent()) {
            return new ResponseEntity<>(employe.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
