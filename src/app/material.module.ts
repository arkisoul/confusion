import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
