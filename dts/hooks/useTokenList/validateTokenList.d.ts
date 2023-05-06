import type { TokenInfo, TokenList } from '@mageswap/token-lists';
/**
 * Validates an array of tokens.
 * @param json the TokenInfo[] to validate
 */
export declare function validateTokens(json: TokenInfo[]): Promise<TokenInfo[]>;
/**
 * Validates a token list.
 * @param json the TokenList to validate
 */
export declare function validateTokenList(json: TokenList): Promise<TokenList>;
