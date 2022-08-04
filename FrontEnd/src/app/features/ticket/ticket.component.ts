import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html'
})
export class TicketComponent implements OnInit {

  constructor(
    private ticketService: TicketService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Ticket = 
  {
    id:0,
          
          
    enabled: true,
    updated: new Date(),
      
    
    description:"",
    jornada:"",
   
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
    this.ticketService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity = 
        {
          id:0,
          
          
          enabled: true,
          updated: new Date(),
            
          
          description:"",
          jornada:"",
      
        };
      }
    )
  }

  findById(id: number):void {
    this.ticketService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.ticketService.deleteById(this.currentEntity.id).subscribe(
      () => {
        console.log("Borrado");
       
      }
    )
  }

}