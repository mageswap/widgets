/// <reference types="react" />
import { Currency, CurrencyAmount } from '@mageswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
import { TradeTooltip } from './GasEstimateTooltip';
export declare function Connecting(): JSX.Element;
export declare function Error(): JSX.Element;
export declare function MissingInputs(): JSX.Element;
export declare function LoadingTrade({ gasUseEstimateUSD }: TradeTooltip): JSX.Element;
interface WrapProps {
    inputCurrency: Currency;
    outputCurrency: Currency;
}
export declare function Wrap({ inputCurrency, outputCurrency }: WrapProps): JSX.Element;
export interface TradeProps {
    trade: InterfaceTrade;
    loading: boolean;
    outputUSDC?: CurrencyAmount<Currency>;
}
interface ExpandProps {
    expanded: boolean;
    warning?: 'warning' | 'error';
}
export declare function Trade({ trade, outputUSDC, gasUseEstimateUSD, expanded, loading, warning, }: TradeProps & TradeTooltip & ExpandProps): JSX.Element;
export declare function PriceImpactWarningTooltipContent(): JSX.Element;
export {};
