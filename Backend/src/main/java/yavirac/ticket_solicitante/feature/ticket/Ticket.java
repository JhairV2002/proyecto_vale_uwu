package yavirac.ticket_solicitante.feature.ticket;


import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("tickets")
public class Ticket {

    @Id
    private long id;
    @Column("usuario_solicitante")
    private int usuarioSolicitante;
    private int carrera;
    private boolean enabled;
    private Timestamp updated;
    private Timestamp deleted;
    private Timestamp archived;
    private String description;
    private String jornada;
    private String curso;
    
}
