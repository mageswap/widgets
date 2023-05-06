import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestRewardMath, TestRewardMathInterface } from "../TestRewardMath";
export declare class TestRewardMath__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestRewardMath>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestRewardMath;
    connect(signer: Signer): TestRewardMath__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506102d0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f20b9d1a14610030575b600080fd5b61004361003e36600461020f565b61005a565b60405161005192919061029f565b60405180910390f35b60008061006d8a8a8a8a8a8a8a8a61007e565b909b909a5098505050505050505050565b6000808783101561008b57fe5b508383036fffffffffffffffffffffffffffffffff861602600073ffffffffffffffffffffffffffffffffffffffff8a1660808a6100c98b88610100565b03901b0390506100f08b8373ffffffffffffffffffffffffffffffffffffffff1683610119565b9250509850989650505050505050565b6000818310156101105781610112565b825b9392505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8587098686029250828110908390030390508061016d576000841161016257600080fd5b508290049050610112565b80841161017957600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461020a57600080fd5b919050565b600080600080600080600080610100898b03121561022b578384fd5b8835975061023b60208a016101e6565b9650604089013595506060890135945060808901356fffffffffffffffffffffffffffffffff8116811461026d578485fd5b935061027b60a08a016101e6565b925061028960c08a016101e6565b915060e089013590509295985092959890939650565b91825273ffffffffffffffffffffffffffffffffffffffff1660208201526040019056fea164736f6c6343000706000a";
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
    static createInterface(): TestRewardMathInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestRewardMath;
}
