import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NonfungiblePositionManagerPositionsGasTest, NonfungiblePositionManagerPositionsGasTestInterface } from "../NonfungiblePositionManagerPositionsGasTest";
export declare class NonfungiblePositionManagerPositionsGasTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_nonfungiblePositionManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NonfungiblePositionManagerPositionsGasTest>;
    getDeployTransaction(_nonfungiblePositionManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NonfungiblePositionManagerPositionsGasTest;
    connect(signer: Signer): NonfungiblePositionManagerPositionsGasTest__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516101803803806101808339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b031661011a610066600039806067525061011a6000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063994ea42c14610030575b600080fd5b61004d6004803603602081101561004657600080fd5b503561005f565b60408051918252519081900360200190f35b6000805a90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166399fbab88846040518263ffffffff1660e01b8152600401808281526020019150506101806040518083038186803b1580156100d757600080fd5b505afa1580156100eb573d6000803e3d6000fd5b505050506040513d61018081101561010257600080fd5b50505a90039291505056fea164736f6c6343000706000a";
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
    })[];
    static createInterface(): NonfungiblePositionManagerPositionsGasTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NonfungiblePositionManagerPositionsGasTest;
}
