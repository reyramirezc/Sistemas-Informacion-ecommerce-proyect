import { Component, OnInit, AfterViewChecked } from '@angular/core';
import * as jsPDF from 'jspdf';

declare let paypal: any;

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements AfterViewChecked {

  addScript: boolean = false;
  paypalLoad: boolean = true;

  finalAmount: number = 2;

  paypalConfig = {
    env: 'sandbox',
    client : {
      sandbox: 'AS-KrV7RLvtAEOw67LnFNfw4lQ7QyeJEbFhiEFuQ--ytcY1dt5oF4J13Np9lbsuZwrS83P2TwnoJPi-5',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment:{
          transactions: [
            {amount: {total: this.finalAmount, currency: 'USD'}}
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };

  ngAfterViewChecked(): void {
    if(!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }

  addPaypalScript(){
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

  downloadPDF() {
    const doc = new jsPDF();
    doc.text('La Mandarina C.A', 10, 10);
    doc.text('Fecha: 21/03/2019', 10, 20);
    doc.text('Cliente: ', 10, 30);
    doc.text('FACTURA', 10, 50);
    doc.text('Producto:', 10, 60);
    doc.text('Precio:', 10, 80);
    doc.text('Dirección de envio 1: ', 10, 100);
    doc.text('Dirección de envio 2: ', 10, 110);
    doc.text('Numero de telefono: ', 10, 120);
    doc.text('Zip code: ', 10, 140);

    doc.save('Text.pdf');
  }

}
