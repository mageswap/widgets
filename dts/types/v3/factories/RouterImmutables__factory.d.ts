import { Signer, BytesLike, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RouterImmutables, RouterImmutablesInterface } from "../RouterImmutables";
export declare class RouterImmutables__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(params: {
        permit2: string;
        weth9: string;
        seaport: string;
        seaportV1_4: string;
        openseaConduit: string;
        nftxZap: string;
        x2y2: string;
        foundation: string;
        sudoswap: string;
        elementMarket: string;
        nft20Zap: string;
        cryptopunks: string;
        looksRareV2: string;
        routerRewardsDistributor: string;
        looksRareRewardsDistributor: string;
        looksRareToken: string;
        v2Factory: string;
        v3Factory: string;
        pairInitCodeHash: BytesLike;
        poolInitCodeHash: BytesLike;
    }, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RouterImmutables>;
    getDeployTransaction(params: {
        permit2: string;
        weth9: string;
        seaport: string;
        seaportV1_4: string;
        openseaConduit: string;
        nftxZap: string;
        x2y2: string;
        foundation: string;
        sudoswap: string;
        elementMarket: string;
        nft20Zap: string;
        cryptopunks: string;
        looksRareV2: string;
        routerRewardsDistributor: string;
        looksRareRewardsDistributor: string;
        looksRareToken: string;
        v2Factory: string;
        v3Factory: string;
        pairInitCodeHash: BytesLike;
        poolInitCodeHash: BytesLike;
    }, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RouterImmutables;
    connect(signer: Signer): RouterImmutables__factory;
    static readonly bytecode = "0x34610320576001600160401b0361034b38819003610300601f8201601f19168101908482119082101761030a5761028092829160405261030039126103205760405161028081019182118183101761030a5761026091604052610063610300610325565b808252610071610320610325565b6020830152610081610340610325565b6040830152610091610360610325565b60608301526100a1610380610325565b60808301526100b16103a0610325565b60a08301526100c16103c0610325565b60c08301526100d16103e0610325565b60e08301526100e1610400610325565b6101008301526100f2610420610325565b610120830152610103610440610325565b610140830152610114610460610325565b610160830152610125610480610325565b6101808301526101366104a0610325565b6101a08301526101476104c0610325565b6101c08301526101586104e0610325565b6101e0830152610169610500610325565b61020083015261017a610520610325565b610220838101918252610540516102408086019182526103008701518787019081526001600160a01b0395861660a09081526020880151871660809081526040808a0151891660c090815260608b01518a1660e0908152928b01518a16610100908152938b01518a16610120908152908b01518a16610140908152928b01518a16610160908152938b01518a16610180908152908b01518a166101a0908152928b01518a166101c0908152938b01518a166101e0908152908b01518a16610200908152908b01518a16909752918901518816909352918701518616909752919094015183166102805292516102a05251166102c05290516102e05251601161033a823960805181505060a05181505060c05181505060e05181505061010051815050610120518150506101405181505061016051815050610180518150506101a0518150506101c0518150506101e05181505061020051815050610220518150506102405181505061026051815050610280518150506102a0518150506102c0518150506102e051815050601190f35b634e487b7160e01b600052604160045260246000fd5b600080fd5b51906001600160a01b03821682036103205756fe600080fdfea164736f6c6343000811000a";
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
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): RouterImmutablesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RouterImmutables;
}
