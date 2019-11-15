import {Component, Input, OnInit} from '@angular/core';
// import {CartService} from '../cart.service';
// import {BackendService} from '../backend.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent implements OnInit {
  @Input() order

  constructor( private toastr: ToastrService) {

  }

  ngOnInit() {

  }

  // public purchase() {
  //   this.backend.createOrder(this.cartService.getOrder()).subscribe(data => {
  //     this.orderResult = data;
  //     console.log(this.orderResult)
  //     this.toastr.info(
  //       '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Your order has been received</span><br><b>' + this.orderResult.orderNumber + '</b></span>',
  //       '',
  //       {
  //         timeOut: 10000,
  //         closeButton: true,
  //         enableHtml: true,
  //         toastClass: 'alert alert-info alert-with-icon',
  //         positionClass: 'toast-top-center'
  //       }
  //     );
  //   }, error => {
  //     //this.webservice.showToast('bottom-right', 'Error', 'Could not retrieve Catalogs', 'danger');
  //   });
  // }

}
