import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';
import { DinosauriosService } from '../dinosaurios.service';

@Component({
  selector: 'app-dinosaurios-list',
  templateUrl: './dinosaurios-list.component.html',
  styleUrls: ['./dinosaurios-list.component.css']
})
export class DinosauriosListComponent implements OnInit {

  dinosaurios: Array<Dinosaurio> = [];
  carn:number = 0;
  veg:number = 0;

  selectedDinosaurio!: Dinosaurio;
  selected:Boolean = false;

  constructor(private dinosaurioService: DinosauriosService) { }

  getDinos():void{
    this.dinosaurioService.getDinos().subscribe((dinosaurios) => {
      this.dinosaurios = dinosaurios;
    });
  }

  getConteo():void{
    let carnivoro: number = 0;
    let veg: number = 0;
    this.dinosaurioService.getDinos().subscribe((dinosaurios) => {
      dinosaurios.forEach((dinosaurio) => {if (dinosaurio.feeding == "carnivoro") {
        carnivoro = carnivoro + 1;
      }
      else {
        veg = veg + 1;
      }})
      this.carn = carnivoro;
      this.veg = veg;
    });
  }
  onSelected(dinosaurio: Dinosaurio): void{
    this.selected = true;
    this.selectedDinosaurio = dinosaurio;
  }
  ngOnInit() {
    this.getDinos();
  }

}
