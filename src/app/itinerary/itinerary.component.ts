import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
  @Input() itinerary;
  @Input() roles;
  @Input() product;

  constructor() {
  }

  ngOnInit() {
  }

  formatPrice(price, n, x) {
    if (typeof price != 'undefined') {
      var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
      return price.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
    }
    return '--'
  };


}
