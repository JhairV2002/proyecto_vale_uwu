import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-search',
  templateUrl: './usuario-search.component.html',
})
export class UsuarioSearchComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  usuarios: Usuario[] = [];

  @Output() usuarioEmitter = new EventEmitter<Usuario>();

  ngOnInit(): void {}

  onInput(term: string): void {
    if (term.length >= 2) {
      this.usuarioService
        .findByNombre(term)
        .subscribe((response) => (this.usuarios = response));
    }
    if (term.length === 0) {
      this.usuarios = [];
    }
  }
  onSelect(usuario: Usuario): void {
    this.usuarioEmitter.emit(usuario);
  }
}
