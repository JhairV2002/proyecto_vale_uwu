package yavirac.ticket_solicitante.feature.ticket;
import org.springframework.data.repository.CrudRepository;

public interface TicketRepository extends CrudRepository<Ticket, Long>{
    
}
