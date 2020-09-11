import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-import-orders',
  templateUrl: './import-orders.component.html',
  styleUrls: ['./import-orders.component.scss']
})
export class ImportOrdersComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TemplateRef)
  ref;

  url: string;


  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  ngAfterViewInit(): void {
    this.url = this.router.url;

    this.dialog
      .open(this.ref, {
        width: '60vw',
        height: '90vh',
        panelClass: 'dialog-panel'
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  ngOnDestroy(): void {

  }

}
