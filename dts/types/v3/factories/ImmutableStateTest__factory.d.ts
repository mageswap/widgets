import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ImmutableStateTest, ImmutableStateTestInterface } from "../ImmutableStateTest";
export declare class ImmutableStateTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_factoryV2: string, _positionManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ImmutableStateTest>;
    getDeployTransaction(_factoryV2: string, _positionManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ImmutableStateTest;
    connect(signer: Signer): ImmutableStateTest__factory;
    static readonly bytecode = "0x60c060405234801561001057600080fd5b5060405161013b38038061013b8339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c60c161007a600039806092525080606e525060c16000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806368e0d4e1146037578063791b98bc146066575b600080fd5b603d606c565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b603d6090565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000008156fea164736f6c6343000706000a";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): ImmutableStateTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ImmutableStateTest;
}
