import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { School } from 'src/app/core/models/school';
@Component({
  selector: 'app-modal-inicializator',
  templateUrl: './modal-inicializator.component.html',
  styleUrls: ['./modal-inicializator.component.scss']
})
export class ModalInicializatorComponent implements OnInit {
 
  school: string[] = ['Public', 'Private', 'Public or Private']; 
  constructor(
    public dialogRef: MatDialogRef<ModalInicializatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: School,
  ) {

  }
  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }

}
