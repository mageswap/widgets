import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FullMathTest, FullMathTestInterface } from "../FullMathTest";
export declare class FullMathTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FullMathTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FullMathTest;
    connect(signer: Signer): FullMathTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101b9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630af8b27f1461003b578063aa9a091214610076575b600080fd5b6100646004803603606081101561005157600080fd5b508035906020810135906040013561009f565b60408051918252519081900360200190f35b6100646004803603606081101561008c57600080fd5b50803590602081013590604001356100b6565b60006100ac8484846100c3565b90505b9392505050565b60006100ac8484846100fd565b60006100d08484846100fd565b9050600082806100dc57fe5b84860911156100af5760001981106100f357600080fd5b6001019392505050565b6000808060001985870986860292508281109083900303905080610133576000841161012857600080fd5b5082900490506100af565b80841161013f57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a0290910302918190038190046001018684119095039490940291909403929092049190911791909102915050939250505056fea164736f6c6343000706000a";
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
    static createInterface(): FullMathTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FullMathTest;
}
