import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';
import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Order} from '../../order';
import {OrderServiceService} from '../../order-service.service';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})


export class DashboardComponent implements OnInit {
  orders: Observable<string[]>;
  currentDoc: string;
  orderFake = {
    'catalog_id': 12,
    'business_publicId': '777df6bb-b288-4266-8125-256a76a00976',
    'delivery_info': 'Booking ID:d7abcae35ab8\nSeat: Unassigned\nAllergies: peanuts',
    'orderEmail': 'rhpassenger@ngeosone.com',
    'items': [{
      'product': {
        'name': 'Grilled Chicken Salad',
        'price': 950,
        'image': 'https://quos.s3.amazonaws.com/advertising/bento/grilledchickensalad.jpg',
        'sku': '38b6bbf9',
        'description': 'on fresh Garden Salad',
        'quantity': 1
      },
      'quantity': 1,
      'price': 950
    }, {
      'product': {
        'name': 'Grilled Salmon Salad',
        'price': 1050,
        'image': 'https://quos.s3.amazonaws.com/advertising/bento/grilledsalmon.jpg',
        'sku': '3sd1f11s',
        'description': 'On Tangerines and Arugula',
        'quantity': 1
      },
      'quantity': 1,
      'price': 1050
    }],
    'orderPhone': '1-555-3135547',
    'orderName': 'John Schmidt',
    'businessName': 'Airmaginary Airlines',
    'image': 'business/39/airmaginary.png5076334050269809190temp'
  };
  constructor(private orderService: OrderServiceService, private toastr: ToastrService) {
  }

  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  socket
  order
  listOfOrders = []

  ngOnInit() {

    this.order = this.orderService.order;
    //this.listOfOrders.push(this.orderFake)
    this.order.subscribe(received => {
      console.log(received)
      this.listOfOrders.push(JSON.parse(received))
      this.toastr.info(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Order Received</span><br></span>',
        '',
        {
          timeOut: 10000,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-info alert-with-icon',
          positionClass: 'toast-top-center'
        }
      );

    }, error => {
      console.log(error)
    })

    // this._docSub = this.orderService.currentDocument.subscribe(doc => this.currentDoc = doc.id);

    // this.chartColor = '#FFFFFF';
    //
    // this.canvas = document.getElementById('chartHours');
    // this.ctx = this.canvas.getContext('2d');

    // this.chartHours = new Chart(this.ctx, {
    //   type: 'line',
    //
    //   data: {
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    //     datasets: [{
    //       borderColor: '#6bd098',
    //       backgroundColor: '#6bd098',
    //       pointRadius: 0,
    //       pointHoverRadius: 0,
    //       borderWidth: 3,
    //       data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
    //     },
    //       {
    //         borderColor: '#f17e5d',
    //         backgroundColor: '#f17e5d',
    //         pointRadius: 0,
    //         pointHoverRadius: 0,
    //         borderWidth: 3,
    //         data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
    //       },
    //       {
    //         borderColor: '#fcc468',
    //         backgroundColor: '#fcc468',
    //         pointRadius: 0,
    //         pointHoverRadius: 0,
    //         borderWidth: 3,
    //         data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
    //       }
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //
    //     tooltips: {
    //       enabled: false
    //     },
    //
    //     scales: {
    //       yAxes: [{
    //
    //         ticks: {
    //           fontColor: '#9f9f9f',
    //           beginAtZero: false,
    //           maxTicksLimit: 5,
    //           //padding: 20
    //         },
    //         gridLines: {
    //           drawBorder: false,
    //           zeroLineColor: '#ccc',
    //           color: 'rgba(255,255,255,0.05)'
    //         }
    //
    //       }],
    //
    //       xAxes: [{
    //         barPercentage: 1.6,
    //         gridLines: {
    //           drawBorder: false,
    //           color: 'rgba(255,255,255,0.1)',
    //           zeroLineColor: 'transparent',
    //           display: false,
    //         },
    //         ticks: {
    //           padding: 20,
    //           fontColor: '#9f9f9f'
    //         }
    //       }]
    //     },
    //   }
    // });
    //
    //
    // this.canvas = document.getElementById('chartEmail');
    // this.ctx = this.canvas.getContext('2d');
    // this.chartEmail = new Chart(this.ctx, {
    //   type: 'pie',
    //   data: {
    //     labels: [1, 2, 3],
    //     datasets: [{
    //       label: 'Emails',
    //       pointRadius: 0,
    //       pointHoverRadius: 0,
    //       backgroundColor: [
    //         '#e3e3e3',
    //         '#4acccd',
    //         '#fcc468',
    //         '#ef8157'
    //       ],
    //       borderWidth: 0,
    //       data: [342, 480, 530, 120]
    //     }]
    //   },
    //
    //   options: {
    //
    //     legend: {
    //       display: false
    //     },
    //
    //     pieceLabel: {
    //       render: 'percentage',
    //       fontColor: ['white'],
    //       precision: 2
    //     },
    //
    //     tooltips: {
    //       enabled: false
    //     },
    //
    //     scales: {
    //       yAxes: [{
    //
    //         ticks: {
    //           display: false
    //         },
    //         gridLines: {
    //           drawBorder: false,
    //           zeroLineColor: 'transparent',
    //           color: 'rgba(255,255,255,0.05)'
    //         }
    //
    //       }],
    //
    //       xAxes: [{
    //         barPercentage: 1.6,
    //         gridLines: {
    //           drawBorder: false,
    //           color: 'rgba(255,255,255,0.1)',
    //           zeroLineColor: 'transparent'
    //         },
    //         ticks: {
    //           display: false,
    //         }
    //       }]
    //     },
    //   }
    // });
    //
    // var speedCanvas = document.getElementById('speedChart');
    //
    // var dataFirst = {
    //   data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
    //   fill: false,
    //   borderColor: '#fbc658',
    //   backgroundColor: 'transparent',
    //   pointBorderColor: '#fbc658',
    //   pointRadius: 4,
    //   pointHoverRadius: 4,
    //   pointBorderWidth: 8,
    // };
    //
    // var dataSecond = {
    //   data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
    //   fill: false,
    //   borderColor: '#51CACF',
    //   backgroundColor: 'transparent',
    //   pointBorderColor: '#51CACF',
    //   pointRadius: 4,
    //   pointHoverRadius: 4,
    //   pointBorderWidth: 8
    // };
    //
    // var speedData = {
    //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //   datasets: [dataFirst, dataSecond]
    // };
    //
    // var chartOptions = {
    //   legend: {
    //     display: false,
    //     position: 'top'
    //   }
    // };
    //
    // var lineChart = new Chart(speedCanvas, {
    //   type: 'line',
    //   hover: false,
    //   data: speedData,
    //   options: chartOptions
    // });
    //this.connectToSocketListenToTopic()
  }


  // connectToSocketListenToTopic() {
  //   this.socket = socketio(environment.websocket, {
  //     transportOptions: {
  //       polling: {
  //         extraHeaders: {
  //           'io': "uuss-ss--dd"
  //         }
  //       }
  //     }
  //   });
  //
  //
  //   this.socket.on('connect', (message: String) => {
  //     console.log('connected');
  //     // if (this.searching) {
  //     //   this.searching = false;
  //     //   this.webservice.pumpSearch(this.flightSearch).subscribe(data => {
  //     //   }, error => {
  //     //   });
  //     // }
  //   });
  //
  //   this.socket.on('travel_assist', (message: string) => {
  //     const data = JSON.parse(message);
  //     this.orders.push(data)
  //   });
  //   this.socket.connect();
  // }

}
