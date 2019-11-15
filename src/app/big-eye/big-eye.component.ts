import {Component, OnInit} from '@angular/core';
import {BigEyeService} from '../big-eye.service';
import {OrderServiceService} from '../order-service.service';
import {ToastrService} from 'ngx-toastr';
import {BackendService} from '../backend.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-big-eye',
  templateUrl: './big-eye.component.html',
  styleUrls: ['./big-eye.component.scss']
})
export class BigEyeComponent implements OnInit {


  message
  trip
  itinerary
  currentAction = "waiting"
  businesses
  order

  constructor(private bigEyeService: BigEyeService, private toastr: ToastrService, private backend: BackendService, public cartService: CartService) {

  }

  ngOnInit() {

    this.message = this.bigEyeService.message;

    this.message.subscribe(received => {
      console.log(received)
      let data = JSON.parse(received)
      // this.toastr.info(
      //   '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Message</span><br></span>',
      //   '',
      //   {
      //     timeOut: 10000,
      //     closeButton: true,
      //     enableHtml: true,
      //     toastClass: 'alert alert-info alert-with-icon',
      //     positionClass: 'toast-top-center'
      //   }
      // );
      this.currentAction = data['action']
      if (data['action'] === 'selected_trip') {
        this.trip = data['data'];
        localStorage.setItem("trip",JSON.stringify(this.trip))
        this.backend.itinerary(this.trip['bookingId']).subscribe(
          datos => {
            this.itinerary = datos
            localStorage.setItem('itinerary', JSON.stringify(this.itinerary))
          }, error => {
            this.itinerary = undefined
          }
        )
      }

      if (data['action'] === 'search_result') {
        this.businesses = data['data'];
      }

      if (data['action'] === 'add_product') {
        this.cartService.addProduct(data['data'])
        this.order = this.cartService.getOrderInfo()
      }
      if (data['action'] === 'create_order') {
        this.cartService.purchase()
      }
    }, error => {
      console.log(error)
    })
  }

  getPhoto(url) {
    if (url.startsWith('http')) {
      return url;
    } else {
      return 'https://quos.s3.amazonaws.com/' + url
    }
  }

  public processMessage(received) {

  }

}
