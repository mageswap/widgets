import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LiquidityMathTest, LiquidityMathTestInterface } from "../LiquidityMathTest";
export declare class LiquidityMathTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LiquidityMathTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LiquidityMathTest;
    connect(signer: Signer): LiquidityMathTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101ba806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063402d44fb1461003b578063cf41632f14610086575b600080fd5b61006a6004803603604081101561005157600080fd5b506001600160801b038135169060200135600f0b6100c7565b604080516001600160801b039092168252519081900360200190f35b6100b56004803603604081101561009c57600080fd5b506001600160801b038135169060200135600f0b6100dc565b60408051918252519081900360200190f35b60006100d383836100f7565b90505b92915050565b6000805a90506100ec84846100f7565b505a90039392505050565b60008082600f0b121561015c57826001600160801b03168260000384039150816001600160801b031610610157576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b6100d6565b826001600160801b03168284019150816001600160801b031610156100d6576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fdfea164736f6c6343000706000a";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): LiquidityMathTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiquidityMathTest;
}
