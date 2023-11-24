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

  selectedDinosaurio!: Dinosaurio;
  selected:Boolean = false;

  constructor(private dinosaurioService: DinosauriosService) { }

  getDinos():void{
    this.dinosaurioService.getDinos().subscribe((dinosaurios) => {
      this.dinosaurios = dinosaurios;
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
