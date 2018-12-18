export class ExchangeService{

    supportedCurrencies = ['EUR', 'GBP', 'USD'];

    private exchangeRates = {
        'USD/GBP':0.70,
        'USD/EUR':0.90,
        'EUR/USD':1.10,
        'EUR/GBP':0.80,
        'GBP/EUR':1.24,
        'GBP/USD':1.42
    }

    getExchangeRate(baseCurrency: string, targetCurrency: string) {

        if(baseCurrency === targetCurrency){
            return 1;
        }

        return this.exchangeRates[baseCurrency +'/'+targetCurrency];
    }
}