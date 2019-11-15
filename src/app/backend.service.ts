import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  token;
  roles;
  baseUrl;
  authenticated = false;

  baseUrlSecurity;
  clientId = 'events.travelful.co';

  prepareHeaders() {
    let head = undefined
    if (typeof  this.token !== 'undefined') {
      head = {'headers': {'Access-Control-Request-Method': 'OPTIONS,POST,GET,DELETE,PUT', 'user-key': '6197a0c3c4a105a5e35d04c22c80ddce'}};
    } else {
      head = {'headers': {'content-type': 'application/json', 'user-key': '6197a0c3c4a105a5e35d04c22c80ddce'}}
    }
    console.log(head)

    return head

  }


  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  stages(bookingId) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    return this.http.get(this.baseUrl + 'travel-assist/trip/' + bookingId, this.prepareHeaders());
  }

  itinerary(bookingId) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    let request = {'bookingId': bookingId}
    return this.http.post(this.baseUrl + 'travel-assist/itinerary/', request, this.prepareHeaders());
  }

  createOrder(order) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    return this.http.post(this.baseUrl + 'travel-assist/createOrder/', order, this.prepareHeaders());
  }

  servicesForStages(typeId) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    return this.http.get(this.baseUrl + 'travel-assist/servicesForStages/' + typeId, this.prepareHeaders());
  }

  businessSearchByVenue(request) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    return this.http.post(environment.baseUrl + 'travel-assist/search/globalVenue/', request, this.prepareHeaders());
  }

  catalogsForBusiness(publicId) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    let request = {'publicId': publicId}
    return this.http.post(environment.baseUrl + 'travel-assist/business/catalogsForBusiness', request, this.prepareHeaders());
  }

  ordersForBooking(bookingId) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    let request = {'bookingId': bookingId}
    return this.http.post(environment.baseUrl + 'travel-assist/ordersForBooking', request, this.prepareHeaders());
  }

  catalogsByName(request) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);

    return this.http.post(environment.baseUrl + 'travel-assist/business/catalogsByName', request, this.prepareHeaders());
  }


}
