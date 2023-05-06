/// <reference types="react" />
import { Currency, CurrencyAmount } from '@mageswap/sdk-core';
import { PriceImpact } from 'hooks/usePriceImpact';
interface SummaryProps {
    input: CurrencyAmount<Currency>;
    output: CurrencyAmount<Currency>;
    inputUSDC?: CurrencyAmount<Currency>;
    outputUSDC?: CurrencyAmount<Currency>;
    impact?: PriceImpact;
    open?: boolean;
}
export default function Summary({ input, output, inputUSDC, outputUSDC, impact, open }: SummaryProps): JSX.Element;
export {};
