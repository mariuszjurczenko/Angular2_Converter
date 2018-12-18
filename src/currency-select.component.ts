import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExchangeService } from './ExchangeService';

@Component({
    selector: 'currency-select',
    template: ` <select [ngModel]="selected" (ngModelChange)="onSelectedChange($event)">
                    <option *ngFor="let currency of supportedCurrencies" [value]="currency">
                         {{currency}} 
                    </option>
                </select>
              `
})
export class CurrencySelectComponent {

   supportedCurrencies: string[];
   @Input() selected: string;
   @Output() selectedChange = new EventEmitter<string>();

   constructor(exchangeService: ExchangeService){
       this.supportedCurrencies= exchangeService.supportedCurrencies
   }

   onSelectedChange(selected:string){
        this.selected = selected;
        this.selectedChange.emit(selected); 
   }
}