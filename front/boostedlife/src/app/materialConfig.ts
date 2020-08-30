import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatNativeDateModule,
    MatListModule,
    MatSidenavModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTabsModule,
    MatCardModule,
    ScrollingModule,
    MatStepperModule,
    MatTooltipModule,
    MatTreeModule,
    MatBadgeModule,
    LayoutModule,
    MatExpansionModule,
    MatProgressBarModule
  ],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatSidenavModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTabsModule,
    MatCardModule,
    ScrollingModule,
    MatStepperModule,
    MatTooltipModule,
    MatTreeModule,
    MatBadgeModule,
    LayoutModule,
    DragDropModule,
    MatExpansionModule,
    MatProgressBarModule,
  ],
})
export class materialConfig { }
