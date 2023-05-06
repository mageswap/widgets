import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockLooksRareRewardsDistributor, MockLooksRareRewardsDistributorInterface } from "../MockLooksRareRewardsDistributor";
export declare class MockLooksRareRewardsDistributor__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_routerRewardsDistributor: string, _looksRareToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockLooksRareRewardsDistributor>;
    getDeployTransaction(_routerRewardsDistributor: string, _looksRareToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockLooksRareRewardsDistributor;
    connect(signer: Signer): MockLooksRareRewardsDistributor__factory;
    static readonly bytecode = "0x60c03461008a57601f61033338819003918201601f19168301916001600160401b0383118484101761008f57808492604094855283398101031261008a57610052602061004b836100a5565b92016100a5565b6080919091526001600160a01b031660a05260405161027990816100ba823960805181818160c901526101d4015260a05181602d0152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361008a5756fe6080806040526004361015610174575b50346101285773ffffffffffffffffffffffffffffffffffffffff807f000000000000000000000000000000000000000000000000000000000000000016906040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526020918282602481875afa908115610134578392600092610140575b50604490600060405196879485937fa9059cbb0000000000000000000000000000000000000000000000000000000085527f000000000000000000000000000000000000000000000000000000000000000016600485015260248401525af180156101345761010157005b81813d831161012d575b61011581836101fc565b8101031261012857518015150361012857005b600080fd5b503d61010b565b6040513d6000823e3d90fd5b91909282813d831161016d575b61015781836101fc565b8101031261016a57505182916044610096565b80fd5b503d61014d565b600090813560e01c635abe7a361461018c575061000f565b346101f857817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101f85760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5080fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761023d57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000811000a";
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
        stateMutability: string;
        type: string;
        inputs?: undefined;
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
    static createInterface(): MockLooksRareRewardsDistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockLooksRareRewardsDistributor;
}
