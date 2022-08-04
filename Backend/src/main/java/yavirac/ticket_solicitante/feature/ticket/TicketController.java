package yavirac.ticket_solicitante.feature.ticket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

@RestController
@RequestMapping("/api/ticket")
@CrossOrigin({"*"})
public class TicketController {
    
    @Autowired
    TicketService ticketService;


    //Create
    @PostMapping("/save")
    public Ticket save(@RequestBody Ticket ticket){
        return ticketService.save(ticket);
    }

    //Read
    @GetMapping("/{id}")
    public Ticket findById(@PathVariable long id){
        return ticketService.findById(id);
    }

    //Update
    @PutMapping("/update")
    public Ticket update(@RequestBody Ticket ticket)
    {
        return ticketService.save(ticket);
    }

    //Delete
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        ticketService.deleteById(id);
    }

}