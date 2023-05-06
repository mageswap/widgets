import { TokenInfo, TokenList } from '@mageswap/token-lists';
import { WrappedTokenInfo } from 'state/lists/wrappedTokenInfo';
type TokenMap = Readonly<{
    [tokenAddress: string]: {
        token: WrappedTokenInfo;
        list?: TokenList;
    };
}>;
export type ChainTokenMap = Readonly<{
    [chainId: number]: TokenMap;
}>;
export declare function tokensToChainTokenMap(tokens: TokenList | TokenInfo[]): ChainTokenMap;
export {};
