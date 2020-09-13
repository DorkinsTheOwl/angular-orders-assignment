import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  orderNumber: number = +this.route.snapshot.paramMap.get('id');
  orderRoute = `/import/find/${this.orderNumber}`;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
