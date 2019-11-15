import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  order: {}
  catalogId
  business
  itinerary
  orderInfo
  orderResult

  constructor(private backend: BackendService) {
    this.reset()
  }

  public reset() {
    this.order = {}
    this.order['items'] = []
  }

  public addProduct(product) {
    if (isNullOrUndefined(product.quantity)) {
      product.quantity = 1
    }
    let oi = {}
    oi['product'] = product;
    oi['quantity'] = product.quantity
    oi['price'] = product.price
    this.order['business_publicId'] = product.businessId
    this.catalogId = product.catalogId
    this.order['items'].push(oi);
  }

  public createOrder() {

    let trip = JSON.parse(localStorage.getItem('trip'))
    let itinerary = JSON.parse(localStorage.getItem('itinerary'))
    let stage = trip['stages'][2]
    this.order['catalog_id'] = this.catalogId
    let p = itinerary['passengers'][0]
    this.order['orderName'] = p['firstName'] + ' ' + p['lastName']
    this.order['orderPhone'] = p.phone
    this.order['orderEmail'] = p.email
    this.order['bookingId'] = trip['bookingId']
    if (!isNullOrUndefined(stage.arrivingFlight)) {
      this.order['delivery_info'] = 'Arriving on Flight: ' + stage.arrivingFlight + ' @ ' + stage.arrivalDateTime + ' \nAllergies: ' + p['food']['allergies']
      this.order['watchObject'] = stage.arrivingFlight
      this.order['deferredTo'] = stage.arrivalDateTime
    } else {
      this.order['deferredTo'] = stage.startDateTime
      this.order['watchObject'] = stage.objectKey
      this.order['delivery_info'] = 'Booking ID:' + trip['bookingId'] + '\nSeat: Unassigned\nAllergies: ' + p['food']['allergies']
    }

  }

  public getOrderInfo() {
    this.createOrder()
    return this.order
  }

  public getOrder() {
    return this.order
  }

  public isEmpty() {
    return this.order['items'].lenght == 0
  }

  public orderTotal() {
    let total = 0;
    this.order['items'].forEach(function (p) {
      total += p.quantity * (p.price / 100)
    })
    return total;
  }

  public purchase() {
    this.backend.createOrder(this.order).subscribe(data => {
      this.orderInfo = data
    }, error => {
    })

  }

}
