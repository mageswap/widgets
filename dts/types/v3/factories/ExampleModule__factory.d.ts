import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExampleModule, ExampleModuleInterface } from "../ExampleModule";
export declare class ExampleModule__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ExampleModule>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ExampleModule;
    connect(signer: Signer): ExampleModule__factory;
    static readonly bytecode = "0x608080604052346100165761012c908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c90816367192b63146100c3575063a5fe08721461003757600080fd5b346100c057807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c0577ff173516ab337f2e7729ba9acd5771deab6be31f2ad8d5dd42dab5269e61701b9606060405160208152600960208201527f746573744576656e7400000000000000000000000000000000000000000000006040820152a180f35b80fd5b90503461011b57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011b57807f39492f340000000000000000000000000000000000000000000000000000000060049252fd5b5080fdfea164736f6c6343000811000a";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ExampleModuleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ExampleModule;
}
