import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatNativeDateModule, MatAutocompleteModule,
  MatSelectModule, MatSidenavModule, MatProgressBarModule, MatCheckboxModule,
   MatExpansionModule, MatStepperModule, MatProgressSpinnerModule, MatCardModule, MatButtonModule, MatTabsModule, MatIconModule, 
   MatTooltipModule,
   MatError} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    // Material Modules
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule
  ]
})
export class AppMaterialModule { }
