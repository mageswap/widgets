import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UnsafeMathEchidnaTest, UnsafeMathEchidnaTestInterface } from "../UnsafeMathEchidnaTest";
export declare class UnsafeMathEchidnaTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UnsafeMathEchidnaTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UnsafeMathEchidnaTest;
    connect(signer: Signer): UnsafeMathEchidnaTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060b48061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80632724da4e14602d575b600080fd5b604d60048036036040811015604157600080fd5b5080359060200135604f565b005b60008111605b57600080fd5b600060658383609c565b90506000828481607157fe5b0482039050828481607e57fe5b06608d578015608957fe5b6096565b80600114609657fe5b50505050565b80820491061515019056fea164736f6c6343000706000a";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): UnsafeMathEchidnaTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UnsafeMathEchidnaTest;
}
