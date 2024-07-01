import { Component, Inject  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HabilidadesService } from '../services/habilidades.service';
import { ActivatedRoute } from '@angular/router';
import { getHabildiades } from '../model/getHabilidades.modal';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-create-habilidade',
  templateUrl: './create-habilidade.component.html',
  styleUrl: './create-habilidade.component.css',
})
export class CreateHabilidadeComponent {

  form: FormGroup|any
  id: number | null = null
  checkHabilidades: boolean | any;
  
  constructor(private fb:FormBuilder, private habilidadesService:HabilidadesService, private playerService:PlayerService,private router: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any){
    this.form = this.fb.group({
      id:[data.id],
      nome:[null, Validators.required],
      tipo:[null, Validators.required]
    })
  }

  async onSubmit(){
    if(this.form.valid){
      await this.checkNumberHabilidades(this.form.value['tipo'])
      if(this.checkHabilidades){
         this.playerService.addNivel({id:this.form.value['id'], tipo: this.form.value['tipo']}).subscribe(console.log)
      }
      await this.habilidadesService.createHabilidade(this.form.value).subscribe(console.log)
    }
  }

  async checkNumberHabilidades(tipo:string){
    let habilidade = {
      id: this.form.value['id'],
      tipo: tipo
    }
    await this.habilidadesService.getNumberHabilidadesPlayer(habilidade).then(async (valor)=> {return this.checkHabilidades = await valor});
  }

}
