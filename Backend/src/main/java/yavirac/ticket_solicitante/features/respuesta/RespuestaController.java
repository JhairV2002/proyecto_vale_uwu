package yavirac.ticket_solicitante.features.respuesta;

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
@RequestMapping("/api/respuesta")
@CrossOrigin({"*"})
public class RespuestaController {
    @Autowired
    RespuestaService respuestaService;

    //CRUD

    //Create
    @PostMapping("/save")
    public Respuesta save(@RequestBody Respuesta respuesta){
        return respuestaService.save(respuesta);
    }

    //Read
    @GetMapping("/{id}")
    public Respuesta findById(@PathVariable long id){
        return respuestaService.findById(id);
    }

    //Update
    @PutMapping("/update")
    public Respuesta update(@RequestBody Respuesta respuesta)
    {
        return respuestaService.save(respuesta);
    }

    //Delete
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        respuestaService.deleteById(id);
    }
}
