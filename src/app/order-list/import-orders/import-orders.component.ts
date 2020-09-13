import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-import-orders',
  templateUrl: './import-orders.component.html',
  styleUrls: ['./import-orders.component.scss']
})
export class ImportOrdersComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TemplateRef)
  ref;
  dialogRef: MatDialogRef<any>;
  url: string = this.router.url;
  subscriptions: Subscription = new Subscription();

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  ngAfterViewInit(): void {
    this.dialogRef = this.dialog
      .open(this.ref, {
        width: '60vw',
        height: '95vh',
        panelClass: 'dialog-panel'
      });

    this.dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/']);
    });

    this.subscriptions.add(this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.url = event.url;
        console.log('this.url', this.url);
        if (!event.url?.includes('/import')) {
          this.dialogRef.close();
        }
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
