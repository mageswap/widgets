import { BaseProvider } from '@ethersproject/providers';
import { Trade } from '@mageswap/router-sdk';
import { Currency, Token, TradeType } from '@mageswap/sdk-core';
import type { ChainId } from '@mageswap/smart-order-router';
import { QuoteType, RouterPreference } from 'hooks/routing/types';
import { OnSwapQuote } from 'state/swap';
export declare enum TradeState {
    LOADING = 0,
    INVALID = 1,
    NO_ROUTE_FOUND = 2,
    VALID = 3
}
export type TokenInRoute = Pick<Token, 'address' | 'chainId' | 'symbol' | 'decimals'>;
export type V3PoolInRoute = {
    type: 'v3-pool';
    tokenIn: TokenInRoute;
    tokenOut: TokenInRoute;
    sqrtRatioX96: string;
    liquidity: string;
    tickCurrent: string;
    fee: string;
    amountIn?: string;
    amountOut?: string;
    address?: string;
};
export type V2Reserve = {
    token: TokenInRoute;
    quotient: string;
};
export type V2PoolInRoute = {
    type: 'v2-pool';
    tokenIn: TokenInRoute;
    tokenOut: TokenInRoute;
    reserve0: V2Reserve;
    reserve1: V2Reserve;
    amountIn?: string;
    amountOut?: string;
    address?: string;
};
export interface GetQuoteArgs {
    tokenInAddress: string;
    tokenInChainId: ChainId;
    tokenInDecimals: number;
    tokenInSymbol?: string;
    tokenOutAddress: string;
    tokenOutChainId: ChainId;
    tokenOutDecimals: number;
    tokenOutSymbol?: string;
    amount: string | null;
    routerPreference: RouterPreference;
    routerUrl?: string;
    tradeType: TradeType;
    provider: BaseProvider;
    quoteType: QuoteType;
    onQuote?: OnSwapQuote;
}
export declare enum QuoteState {
    SUCCESS = "Success",
    INITIALIZED = "Initialized",
    NOT_FOUND = "Not found"
}
export interface QuoteData {
    quoteId?: string;
    blockNumber: string;
    amount: string;
    amountDecimals: string;
    gasPriceWei: string;
    gasUseEstimate: string;
    gasUseEstimateQuote: string;
    gasUseEstimateQuoteDecimals: string;
    gasUseEstimateUSD: string;
    methodParameters?: {
        calldata: string;
        value: string;
    };
    quote: string;
    quoteDecimals: string;
    quoteGasAdjusted: string;
    quoteGasAdjustedDecimals: string;
    route: Array<(V3PoolInRoute | V2PoolInRoute)[]>;
    routeString: string;
}
export type QuoteResult = {
    state: QuoteState.INITIALIZED | QuoteState.NOT_FOUND;
    data?: undefined;
} | {
    state: QuoteState.SUCCESS;
    data: QuoteData;
};
export type TradeResult = {
    state: QuoteState.INITIALIZED | QuoteState.NOT_FOUND;
    trade?: undefined;
    gasUseEstimateUSD?: undefined;
    blockNumber?: undefined;
} | {
    state: QuoteState.SUCCESS;
    trade: InterfaceTrade;
    gasUseEstimateUSD: string;
    blockNumber: string;
};
export declare class InterfaceTrade extends Trade<Currency, Currency, TradeType> {
}
