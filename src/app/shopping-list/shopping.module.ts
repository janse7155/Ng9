import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent },
  ])
],
  exports: [RouterModule]
})
export class ShoppingModule {}
