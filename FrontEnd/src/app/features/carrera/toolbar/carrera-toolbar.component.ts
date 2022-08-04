import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carrera-toolbar',
  templateUrl: './carrera-toolbar.component.html'
})
export class CarreraToolbarComponent implements OnInit {

  @Input() entityNombre: string ="";
  @Output() termEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onInput(term:string){
    this.termEmitter.emit(term);
  }

}
