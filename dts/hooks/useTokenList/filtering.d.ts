import { NativeCurrency, Token } from '@mageswap/sdk-core';
import { TokenInfo } from '@mageswap/token-lists';
/** Creates a filter function that filters tokens that do not match the query. */
export declare function getTokenFilter<T extends Token | TokenInfo>(query: string): (token: T | NativeCurrency) => boolean;
