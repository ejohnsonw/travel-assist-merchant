import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {
  @Input() orderInfo

  constructor() {

  }

  ngOnInit() {

  }

}
