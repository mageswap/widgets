/// <reference types="react" />
import { Currency, CurrencyAmount } from '@mageswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
export declare function useTradeExchangeRate(trade: InterfaceTrade, outputUSDC?: CurrencyAmount<Currency>, base?: 'input' | 'output'): [string, string | undefined];
interface PriceProps {
    trade: InterfaceTrade;
    outputUSDC?: CurrencyAmount<Currency>;
}
/** Displays the price of a trade. If outputUSDC is included, also displays the unit price. */
export default function Price({ trade, outputUSDC }: PriceProps): JSX.Element;
export {};
