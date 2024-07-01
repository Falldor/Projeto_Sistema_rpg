import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { player } from '../model/player.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  elements:player[] | any;

  elements$: Observable<player[]> | any;

  constructor(private elementsService:PlayerService){}
  ngOnInit(): void {
   this.elements$ = this.elementsService.getAllType("player")
  }

}
