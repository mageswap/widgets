import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Callbacks, CallbacksInterface } from "../Callbacks";
export declare class Callbacks__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Callbacks>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Callbacks;
    connect(signer: Signer): Callbacks__factory;
    static readonly bytecode = "0x60808060405234610016576103d8908161001c8239f35b600080fdfe60808060405260048036101561001457600080fd5b600091823560e01c90816301ffc9a71461023357508063150b7a02146101a6578063bc197c81146100e25763f23a6e611461004e57600080fd5b346100de5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100de57610085610321565b5061008e610349565b5060843567ffffffffffffffff81116100da576100ae925036910161036c565b505060206040517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b8280fd5b5080fd5b50346100de5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100de5761011a610321565b50610123610349565b5067ffffffffffffffff6044358181116101a257610144903690840161039a565b50506064358181116101a25761015d903690840161039a565b50506084359081116100da57610176925036910161036c565b505060206040517fbc197c81000000000000000000000000000000000000000000000000000000008152f35b8380fd5b50346100de5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100de576101de610321565b506101e7610349565b5060643567ffffffffffffffff81116100da57610207925036910161036c565b505060206040517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b919050346100da5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100da57357fffffffff0000000000000000000000000000000000000000000000000000000081168091036100da57602092507f4e2312e00000000000000000000000000000000000000000000000000000000081149081156102f7575b81156102cd575b5015158152f35b7f01ffc9a700000000000000000000000000000000000000000000000000000000915014386102c6565b7f150b7a0200000000000000000000000000000000000000000000000000000000811491506102bf565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361034457565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361034457565b9181601f840112156103445782359167ffffffffffffffff8311610344576020838186019501011161034457565b9181601f840112156103445782359167ffffffffffffffff8311610344576020808501948460051b0101116103445756fea164736f6c6343000811000a";
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
    static createInterface(): CallbacksInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Callbacks;
}
