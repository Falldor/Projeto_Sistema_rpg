import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../services/player.service';
import { ActivatedRoute } from '@angular/router';
import { player } from '../model/player.model';
import { Observable } from 'rxjs';
import {  MatDialog,  MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateHabilidadeComponent } from '../create-habilidade/create-habilidade.component';
import { habilidade } from '../model/habilidade.modal';
import { HabilidadesService } from '../services/habilidades.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrl: './player-info.component.css'
})
export class PlayerInfoComponent implements OnInit{

  form: FormGroup | any;
  id:number | any = null;
  player$:Observable<player> | any;
  nivelFisico: number | any;
  nivelMental: number | any;
  vida: number | any;
  estresse: number | any;
  habilidadesFisica$: Observable<habilidade[]> | any;
  habilidadesMental$: Observable<habilidade[]> | any;


  constructor(private fb:FormBuilder, private elementService:PlayerService, 
    private route:ActivatedRoute, public dialog: MatDialog, private habilidadeService:HabilidadesService ){
    this.id = this.route.snapshot.params['id']
    this.form = this.fb.group({
      nome: [null, Validators.required],
      tipo: [null, Validators.required]
    })
  }

  

  ngOnInit(): void {
    if(this.id != null){
      this.getHabilidadesFisico()
      this.getHabilidadesMental()
      this.player$ = this.elementService.getById(this.id)
      this.player$.subscribe((elemento: any) => this.updateForm(elemento.body))
    }
    
  }

  onSubmit(){
    if(this.form.valid){
      this.elementService.createElement(this.form.value).subscribe(console.log)
    }
  } 

  onCancel(){
    
  }

  updateForm(player:player){
    this.vida = player.vida
    this.estresse = player.estresse
    this.nivelFisico = player.nivelFisico
    this.nivelMental = player.nivelMental
    this.form.patchValue({
      nome: player.nome,
      tipo: player.tipo
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateHabilidadeComponent,{
      width: '55%',
      data: {id:this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == "fisico"){
        this.getHabilidadesFisico()
      }else{
        this.getHabilidadesMental()}
    })
  }

  getHabilidadesFisico(){
    let habilidadeJogador = {
      id: this.id,
      tipo: "fisico"
    }
    this.habilidadesFisica$ = this.habilidadeService.getHabilidadeType(habilidadeJogador)

  }

  getHabilidadesMental(){
    let habilidadeJogador = {
      id: this.id,
      tipo: "mental"
    }
    this.habilidadesMental$ = this.habilidadeService.getHabilidadeType(habilidadeJogador)
  }


  
  

}