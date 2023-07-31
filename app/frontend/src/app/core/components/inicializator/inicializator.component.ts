import { Component, EventEmitter, OnInit,  ViewEncapsulation } from '@angular/core';
import { School } from 'src/app/core/models/school';
import { ModalInicializatorComponent } from './modal-inicializator/modal-inicializator.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from
'@angular/material/dialog';
import { SchoolService } from '../../services/school-service/school-service.service';
import { Router } from '@angular/router';
import { ShareDataService } from '../../services/share-data/share-data.service';

@Component({
  selector: 'app-inicializator',
  templateUrl: './inicializator.component.html',
  styleUrls: ['./inicializator.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class InicializatorComponent implements OnInit {
  // name?: string;
  // address?: string;
  // phone?: string;
  type?: string;
  quantity?: number;
  school?: School;
  start_btn_clicked?: boolean;

  constructor(public dialog: MatDialog,
              private service_school : SchoolService,
              public share_data : ShareDataService,
              private _router: Router,) {}

    openDialog(): void {
      const dialogRef = this.dialog.open(ModalInicializatorComponent, {
        data: {name: this.quantity, type: this.type, },
      });
      dialogRef.afterClosed().subscribe(result => {
        this.school= result

       })
  	}
	ngOnInit(): void {


	}

	set_school_search():void{


      if(this.school){
        this.start_btn_clicked = true
        this.service_school.save(this.school).subscribe({
          next: (school : School) =>{
            console.log(school.number_not_found_schools, school.number_schools)
          const data = {  "number_not_found_schools" : school.number_not_found_schools,
                          "number_schools":school.number_schools 

            };
            this.share_data.setSharedData(data);

            this.start_btn_clicked = false
            this.school = undefined

          },
            error: (err:any) => console.log(err)


    })
  }



  }
}
