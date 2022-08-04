package yavirac.ticket_solicitante.features.carrera;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/carrera")
@CrossOrigin({"*"})
public class CarreraController {
    
    @Autowired
    CarreraService carreraService;

    //CRUD

    //Create
    @PostMapping("/save")
    public Carrera save(@RequestBody Carrera carrera) {
        return carreraService.save(carrera);
    }

    //Read
    @GetMapping("/{id}")
    public Carrera findById(@PathVariable long id){
        return carreraService.findById(id);
    }

    //Update
    @PutMapping("/update")
    public Carrera update(@RequestBody Carrera carrera)
    {
        return carreraService.save(carrera);
    }

    //Delete
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        carreraService.deleteById(id);
    }

    @GetMapping("/findAll")
    public List<Carrera> findAll(){
        return carreraService.findAll();
    }

    @GetMapping("/findByNombre/{term}")
    public List<Carrera> findByNombre(@PathVariable String term){
        return carreraService.findByNombre(term);
    }

}
