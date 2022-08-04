import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from '../../usuario/usuario';
import { UsuarioService } from '../../usuario/usuario.service';
import { carrera } from '../carrera';
import { carreraService } from '../carrera.service';

@Component({
  selector: 'app-carrera-form',
  templateUrl: './carrera.form.component.html',
})
export class CarreraFormComponent implements OnInit {
  constructor(
    private carreraService: carreraService,
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  currentEntity: carrera = {
    carreraId: 0,
    nombre: '',
    tipoCarrera: '',
    updated: new Date(),
    deleted: new Date(),
    archived: true,
    enabled: true,
    usuarioId: 0,
    usuarios: [],
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  save(): void {
    console.table(this.currentEntity);
    this.carreraService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        carreraId: 0,
        nombre: '',
        tipoCarrera: '',
        updated: new Date(),
        deleted: new Date(),
        archived: false,
        enabled: true,
        usuarioId: 0,
        usuarios: [],
      };
      this.router.navigate(['/layout/carrera-list']);
    });
  }

  findById(id: number): void {
    this.carreraService.findById(id).subscribe((response) => {
      this.currentEntity = response;
      this.currentEntity.usuarios.forEach((user) => {
        this.usuarioService
          .findById(user.usuarioId)
          .subscribe((item) => (user.nombre = item.nombre));
      });
    });
  }

  deleteById(): void {
    this.carreraService
      .deleteById(this.currentEntity.carreraId)
      .subscribe(() => {
        console.log('Borrado');
        //redireccionar ....
      });
  }

  removeUsuario(id: number) {
    this.currentEntity.usuarios = this.currentEntity.usuarios.filter(
      (item) => item.usuarioId != id
    );
  }
}
