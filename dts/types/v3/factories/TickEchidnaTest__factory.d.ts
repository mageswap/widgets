import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TickEchidnaTest, TickEchidnaTestInterface } from "../TickEchidnaTest";
export declare class TickEchidnaTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TickEchidnaTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TickEchidnaTest;
    connect(signer: Signer): TickEchidnaTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101c0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063858027e514610030575b600080fd5b6100506004803603602081101561004657600080fd5b503560020b610052565b005b620d89e8600282900b131561006657600080fd5b60008160020b1361007657600080fd5b600081600281900b620d89e7198161008a57fe5b05029050600082600281900b620d89e8816100a157fe5b0502905060006100b084610140565b90508260000360020b8260020b146100c457fe5b60008260020b136100d157fe5b8360020b83830360020b816100e257fe5b0760020b156100ed57fe5b60008460020b84840360020b8161010057fe5b0560020b60010190506fffffffffffffffffffffffffffffffff801681836fffffffffffffffffffffffffffffffff1602111561013957fe5b5050505050565b60008082600281900b620d89e7198161015557fe5b05029050600083600281900b620d89e88161016c57fe5b0502905060008460020b83830360020b8161018357fe5b0560010190508062ffffff166fffffffffffffffffffffffffffffffff8016816101a957fe5b049594505050505056fea164736f6c6343000706000a";
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
    static createInterface(): TickEchidnaTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TickEchidnaTest;
}
