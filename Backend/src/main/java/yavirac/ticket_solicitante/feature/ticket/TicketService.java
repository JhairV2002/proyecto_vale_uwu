package yavirac.ticket_solicitante.feature.ticket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService {

    @Autowired
    TicketRepository ticketRepository;

    public Ticket save(Ticket ticket){

        return ticketRepository.save(ticket);
    }

    public Ticket findById(long id){
        return ticketRepository.findById(id).orElse(new Ticket());
    }

    public Ticket update(Ticket ticket){
        return ticketRepository.save(ticket);
    }

    public void deleteById(long id){
        ticketRepository.deleteById(id);
    }
    
}

