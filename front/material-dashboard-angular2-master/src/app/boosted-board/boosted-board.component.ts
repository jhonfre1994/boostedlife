import { Component, OnInit } from '@angular/core';
import { BoostedBoardService } from './boosted-board.service';
import { GeneralDTO } from 'app/model/GeneralDTO';
import { MatDialog } from '@angular/material/dialog';
import { EnviarDineroDialogComponent } from './enviar-dinero-dialog/enviar-dinero-dialog.component';

@Component({
  selector: 'app-boosted-board',
  templateUrl: './boosted-board.component.html',
  styleUrls: ['./boosted-board.component.css'],
  providers: [BoostedBoardService]
})
export class BoostedBoardComponent implements OnInit {

  data: GeneralDTO = new GeneralDTO();

  constructor(private boostedBoardService: BoostedBoardService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.gerGeneralData(sessionStorage.getItem("username"));
  }

  public gerGeneralData(nameUSer: string) {
    console.log("ssas")
    this.boostedBoardService.gerGeneralData(nameUSer).subscribe(res => {
      if (res != null) {
        this.data = res;
        console.log(this.data);
      }
    })
  }

  public dialogEnviarDinero(tipo: string){

    const dialogRef = this.dialog.open(EnviarDineroDialogComponent, {
      width: '370px',
      data: { tipo: tipo,}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
