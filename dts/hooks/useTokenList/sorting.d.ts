import { CurrencyAmount, Token } from '@mageswap/sdk-core';
import { TokenInfo } from '@mageswap/token-lists';
type TokenBalances = {
    [tokenAddress: string]: CurrencyAmount<Token> | undefined;
};
/** Sorts tokens by currency amount (descending), then symbol (ascending). */
export declare function tokenComparator(balances: TokenBalances, a: Token, b: Token): 1 | -1;
/** Sorts tokens by query, giving precedence to exact matches and partial matches. */
export declare function useSortTokensByQuery<T extends Token | TokenInfo>(query: string, tokens?: T[]): T[];
export {};
