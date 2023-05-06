import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestIncentiveId, TestIncentiveIdInterface } from "../TestIncentiveId";
export declare class TestIncentiveId__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestIncentiveId>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestIncentiveId;
    connect(signer: Signer): TestIncentiveId__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101a6806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636ab7d88014610030575b600080fd5b61004361003e36600461009a565b610059565b604051610050919061011b565b60405180910390f35b60006100648261006a565b92915050565b60008160405160200161007d9190610124565b604051602081830303815290604052805190602001209050919050565b600060a082840312156100ab578081fd5b60405160a0810181811067ffffffffffffffff821117156100c857fe5b60405282356100d681610174565b815260208301356100e681610174565b806020830152506040830135604082015260608301356060820152608083013561010f81610174565b60808201529392505050565b90815260200190565b815173ffffffffffffffffffffffffffffffffffffffff90811682526020808401518216908301526040808401519083015260608084015190830152608092830151169181019190915260a00190565b73ffffffffffffffffffffffffffffffffffffffff8116811461019657600080fd5b5056fea164736f6c6343000706000a";
    static readonly abi: {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    static createInterface(): TestIncentiveIdInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestIncentiveId;
}
