import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonVPageRoutingModule } from './pokemon-v-routing.module';

import { PokemonVPage } from './pokemon-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonVPageRoutingModule
  ],
  declarations: [PokemonVPage]
})
export class PokemonVPageModule {}
