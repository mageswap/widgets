/// <reference types="react" />
import { CurrencyAmount, Token } from '@mageswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
export declare const ORDER_ROUTING_HEIGHT_REM: number;
interface ToolbarOrderRoutingProps {
    trade?: InterfaceTrade;
    gasUseEstimateUSD?: CurrencyAmount<Token> | null;
}
export default function ToolbarOrderRouting({ trade, gasUseEstimateUSD }: ToolbarOrderRoutingProps): JSX.Element;
export {};
