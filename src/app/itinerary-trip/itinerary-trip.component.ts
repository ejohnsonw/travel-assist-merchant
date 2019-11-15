import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-itinerary-trip',
  templateUrl: './itinerary-trip.component.html',
  styleUrls: ['./itinerary-trip.component.scss']
})
export class ItineraryTripComponent implements OnInit {
  @Input() trip;
  @Input() itinerary;
  @Input() idx;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
  }

  shop() {
    this.router.navigate(['/shop/' + this.idx])
  }

  formatPrice(price, n, x) {
    if (typeof price != 'undefined') {
      var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
      return price.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
    }
    return '--'
  };

}
