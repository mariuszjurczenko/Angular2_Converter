import { Component } from '@angular/core';

@Component({
  selector: 'converter',
  template: `<input type="number" [(ngModel)]="baseAmount"
                    [ngClass]="{error:isValid(baseAmount), warning:baseAmount<0}"> USD 
              = <strong>{{targetAmount}}</strong> GBP  
              `,
  styles:[` input[type=number] {
              width: 10ex;
              text-align: right;
              }
              .error{
                  background-color:#ff5555;
              }
               .warning{
                  background-color:#445522;
              }
              `
        ]
})
export class AppComponent {

    exchangeRate = 0.70;
    baseAmount = 1;

    get targetAmount(){
        console.info('baseAmount',  Number.isFinite(this.baseAmount));
       return this.baseAmount * this.exchangeRate
    }

    isValid(value){
        return !Number.isFinite(value)
    }
}
