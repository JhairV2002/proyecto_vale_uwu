import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario-combobox',
  templateUrl: './usuario-combobox.component.html'
})
export class UsuarioComboboxComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService
  ) { }

    usuarios: Usuario[] = [];

    @Output() usuarioIdEmitter = new EventEmitter<number>();
    @Input() usuarioId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void{
      this.usuarioService.findAll().subscribe(
          (response) => this.usuarios =response
      )
  }

  public onSelect(id:string){
    console.log("El id de usuario es:" + id);
    this.usuarioIdEmitter.emit(parseInt(id));
  }

}
