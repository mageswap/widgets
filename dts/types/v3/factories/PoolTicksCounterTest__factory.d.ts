import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoolTicksCounterTest, PoolTicksCounterTestInterface } from "../PoolTicksCounterTest";
export declare class PoolTicksCounterTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PoolTicksCounterTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PoolTicksCounterTest;
    connect(signer: Signer): PoolTicksCounterTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061075e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80634c5b941c14610030575b600080fd5b6100766004803603606081101561004657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020810135600290810b9160400135900b61008f565b6040805163ffffffff9092168252519081900360200190f35b60006100b273ffffffffffffffffffffffffffffffffffffffff851684846100ba565b949350505050565b60008060008060008060008060088b73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561010e57600080fd5b505afa158015610122573d6000803e3d6000fd5b505050506040513d602081101561013857600080fd5b5051600290810b908c900b8161014a57fe5b0560020b901d905060006101008c73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561019d57600080fd5b505afa1580156101b1573d6000803e3d6000fd5b505050506040513d60208110156101c757600080fd5b5051600290810b908d900b816101d957fe5b0560020b816101e457fe5b079050600060088d73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561023157600080fd5b505afa158015610245573d6000803e3d6000fd5b505050506040513d602081101561025b57600080fd5b5051600290810b908d900b8161026d57fe5b0560020b901d905060006101008e73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102c057600080fd5b505afa1580156102d4573d6000803e3d6000fd5b505050506040513d60208110156102ea57600080fd5b5051600290810b908e900b816102fc57fe5b0560020b8161030757fe5b07905060008160ff166001901b8f73ffffffffffffffffffffffffffffffffffffffff16635339c296856040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b15801561036857600080fd5b505afa15801561037c573d6000803e3d6000fd5b505050506040513d602081101561039257600080fd5b50511611801561042557508d73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103e357600080fd5b505afa1580156103f7573d6000803e3d6000fd5b505050506040513d602081101561040d57600080fd5b5051600290810b908d900b8161041f57fe5b0760020b155b801561043657508b60020b8d60020b135b945060008360ff166001901b8f73ffffffffffffffffffffffffffffffffffffffff16635339c296876040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b15801561049657600080fd5b505afa1580156104aa573d6000803e3d6000fd5b505050506040513d60208110156104c057600080fd5b50511611801561055357508d73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561051157600080fd5b505afa158015610525573d6000803e3d6000fd5b505050506040513d602081101561053b57600080fd5b5051600290810b908e900b8161054d57fe5b0760020b155b801561056457508b60020b8d60020b125b95508160010b8460010b128061059057508160010b8460010b14801561059057508060ff168360ff1611155b156105a6578399508297508198508096506105b3565b8199508097508398508296505b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60ff87161b9150505b8560010b8760010b136106ea578560010b8760010b1415610624577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60ff858103161c165b6000818c73ffffffffffffffffffffffffffffffffffffffff16635339c2968a6040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b15801561067b57600080fd5b505afa15801561068f573d6000803e3d6000fd5b505050506040513d60208110156106a557600080fd5b50511690506106b381610712565b61ffff16989098019750506001909501947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6105df565b81156106f7576001880397505b8215610704576001880397505b505050505050509392505050565b6000805b821561074b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff830190921691600101610716565b9291505056fea164736f6c6343000706000a";
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
    static createInterface(): PoolTicksCounterTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PoolTicksCounterTest;
}
