import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Respuesta } from './respuesta';
import { RespuestaService } from './respuesta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  constructor( private respuestaService: RespuestaService,
    private activatedRoute: ActivatedRoute) { }

    currentEntity: Respuesta = 
    {
      id: 0,
      comentario: "",
      created: new Date(),
      enabled: true,
      resuelto: false,
    };


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )

  }


  save():void {
    console.table(this.currentEntity);
    this.respuestaService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity = 
        {
        id: 0,
        comentario: "",
        created: new Date(),
        enabled: true,
        resuelto: false,
        };
      }
    )
  }

  findById(id: number):void {
    this.respuestaService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.respuestaService.deleteById(this.currentEntity.id).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}
