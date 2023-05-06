import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestCustomErrors, TestCustomErrorsInterface } from "../TestCustomErrors";
export declare class TestCustomErrors__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestCustomErrors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestCustomErrors;
    connect(signer: Signer): TestCustomErrors__factory;
    static readonly bytecode = "0x608080604052346013576011908160198239f35b600080fdfe600080fdfea164736f6c6343000811000a";
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): TestCustomErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestCustomErrors;
}
