import { Currency, CurrencyAmount, Percent } from '@mageswap/sdk-core';
export declare function computeFiatValuePriceImpact(fiatValueInput: CurrencyAmount<Currency> | undefined | null, fiatValueOutput: CurrencyAmount<Currency> | undefined | null): Percent | undefined;
