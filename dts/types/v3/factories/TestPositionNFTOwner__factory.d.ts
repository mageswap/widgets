import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestPositionNFTOwner, TestPositionNFTOwnerInterface } from "../TestPositionNFTOwner";
export declare class TestPositionNFTOwner__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestPositionNFTOwner>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestPositionNFTOwner;
    connect(signer: Signer): TestPositionNFTOwner__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610306806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806313af4035146100465780631626ba7e1461007b5780638da5cb5b1461015d575b600080fd5b6100796004803603602081101561005c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661018e565b005b6101286004803603604081101561009157600080fd5b813591908101906040810160208201356401000000008111156100b357600080fd5b8201836020820111156100c557600080fd5b803590602001918460018302840111640100000000831117156100e757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101d5945050505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b6101656102dd565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6020818101516040808401516060808601516000805485518281528089018088528b905292821a83870181905293830187905260808301859052945190969394929373ffffffffffffffffffffffffffffffffffffffff9093169260019260a0808201937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081019281900390910190855afa158015610278573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1614156102ca57507f1626ba7e0000000000000000000000000000000000000000000000000000000092506102d7915050565b50600092506102d7915050565b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff168156fea164736f6c6343000706000a";
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
    static createInterface(): TestPositionNFTOwnerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestPositionNFTOwner;
}
