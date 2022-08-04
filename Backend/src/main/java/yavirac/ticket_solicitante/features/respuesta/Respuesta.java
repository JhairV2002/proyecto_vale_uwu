package yavirac.ticket_solicitante.features.respuesta;

import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("respuesta")
public class Respuesta {
    @Id
    private long id;
    private String comentario;
    private Timestamp created;
    private Timestamp updated;
    private Timestamp deleted;
    private boolean enabled;
    private boolean archived;
    @Column("id_ticket")
    private int idTicket;
    private boolean resuelto;


}




