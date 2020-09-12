import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-orders',
  templateUrl: './import-orders.component.html',
  styleUrls: ['./import-orders.component.scss']
})
export class ImportOrdersComponent implements AfterViewInit {
  @ViewChild(TemplateRef)
  ref;
  dialogRef;
  url: string;


  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  ngAfterViewInit(): void {
    this.url = this.router.url;

    this.dialogRef = this.dialog
      .open(this.ref, {
        width: '60vw',
        height: '90vh',
        panelClass: 'dialog-panel'
      });

    this.dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
