import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV3PoolDeployer, UniswapV3PoolDeployerInterface } from "../UniswapV3PoolDeployer";
export declare class UniswapV3PoolDeployer__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UniswapV3PoolDeployer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UniswapV3PoolDeployer;
    connect(signer: Signer): UniswapV3PoolDeployer__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80638903573014602d575b600080fd5b60336082565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681529486166020860152929094168383015262ffffff16606083015260029290920b608082015290519081900360a00190f35b6000546001546002805473ffffffffffffffffffffffffffffffffffffffff938416939283169281169162ffffff7401000000000000000000000000000000000000000083041691770100000000000000000000000000000000000000000000009004900b8556fea164736f6c6343000706000a";
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
    static createInterface(): UniswapV3PoolDeployerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV3PoolDeployer;
}
