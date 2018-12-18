import { Component, Input } from '@angular/core';
import { ExchangeService } from './ExchangeService';

@Component({
    selector: 'currency-select',
    template: ` <select [ngModel]="selected">
                    <option *ngFor="let currency of supportedCurrencies"
                             [value]="currency">
                         {{ currency }} 
                    </option>
                </select>
    `
})
export class CurrencySelectComponent {

   supportedCurrencies: string[];
   @Input() selected: string;

   constructor(exchangeService: ExchangeService){
       this.supportedCurrencies= exchangeService.supportedCurrencies
   }

}