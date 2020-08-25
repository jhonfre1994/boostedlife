import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { BoostedBoardComponent } from './boosted-board/boosted-board.component';
import { LoginComponent } from './login/login.component';
import { materialConfig } from './materialConfig';
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EnviarDineroDialogComponent } from './boosted-board/enviar-dinero-dialog/enviar-dinero-dialog.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    materialConfig,
    HttpClientModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
    BoostedBoardComponent,
    LoginComponent,
    EnviarDineroDialogComponent

  ],
  entryComponents:[EnviarDineroDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
