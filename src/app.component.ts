import { Component } from '@angular/core';
import {ExchangeService} from './ExchangeService';

@Component({
  selector: 'converter',
  providers:[ExchangeService],
  template: `<input type="number" [(ngModel)]="baseAmount" [ngClass]="{error:isValid(baseAmount), warning:baseAmount<0}"> 
                    <currency-select [(selected)]='baseCurrency'></currency-select>
                        = <strong>{{targetAmount | mypipe:3}}</strong> 
                    <currency-select [(selected)]='targetCurrency'></currency-select>
                        <p *ngIf="isValid(baseAmount)">Poszę podać wartość do przeliczenia</p>
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
          `]
})
export class AppComponent {

    baseCurrency = 'GBP';
    targetCurrency = 'EUR';
    baseAmount = 1;

    constructor(private exchangeService: ExchangeService){}

    get targetAmount(){
        const  exchangeRate = this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency);
        return this.baseAmount * exchangeRate
    }

    isValid(value){
        return !Number.isFinite(value)
    }
}
