import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-enviar-dinero-dialog',
  templateUrl: './enviar-dinero-dialog.component.html',
  styleUrls: ['./enviar-dinero-dialog.component.css']
})
export class EnviarDineroDialogComponent implements OnInit {

  constructor( @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data.tipo)
  }

}
