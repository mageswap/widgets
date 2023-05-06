import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LockAndMsgSender, LockAndMsgSenderInterface } from "../LockAndMsgSender";
export declare class LockAndMsgSender__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LockAndMsgSender>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LockAndMsgSender;
    connect(signer: Signer): LockAndMsgSender__factory;
    static readonly bytecode = "0x60808060405234602657600080546001600160a01b031916600117905560119081602c8239f35b600080fdfe600080fdfea164736f6c6343000811000a";
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): LockAndMsgSenderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LockAndMsgSender;
}
