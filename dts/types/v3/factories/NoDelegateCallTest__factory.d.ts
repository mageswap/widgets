import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NoDelegateCallTest, NoDelegateCallTestInterface } from "../NoDelegateCallTest";
export declare class NoDelegateCallTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NoDelegateCallTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NoDelegateCallTest;
    connect(signer: Signer): NoDelegateCallTest__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5030606081901b6080526101486100316000398061010952506101486000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063423ecb0511610050578063423ecb051461008e5780636427016414610096578063f45f416e146100a057610067565b80633045a6e01461006c5780633c7c8dd014610086575b600080fd5b6100746100a8565b60408051918252519081900360200190f35b6100746100bf565b6100746100c9565b61009e6100dd565b005b6100746100e7565b6000805a90506100b66100e7565b505a9003905090565b6000805a90506100b65b60006100d36100f1565b6005425b04905090565b6100e5610133565b565b60006005426100d7565b3073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146100e557600080fd5b6100e56100f156fea164736f6c6343000706000a";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): NoDelegateCallTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NoDelegateCallTest;
}
