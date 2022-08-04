package yavirac.ticket_solicitante.features.carrera;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("usuario_carrera")
public class CarreraUsuario {
    @Id 
    private long id;
    @Column("carrera_id")
    private Long carreraId;
    @Column("usuario_id")
    private Long usuarioId;
}
