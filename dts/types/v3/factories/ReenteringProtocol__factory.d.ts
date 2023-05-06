import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReenteringProtocol, ReenteringProtocolInterface } from "../ReenteringProtocol";
export declare class ReenteringProtocol__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ReenteringProtocol>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ReenteringProtocol;
    connect(signer: Signer): ReenteringProtocol__factory;
    static readonly bytecode = "0x60808060405234610016576101c6908161001c8239f35b600080fdfe60808060405260048036101561001457600080fd5b600091823560e01c63260b0b4c1461002b57600080fd5b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b55782823573ffffffffffffffffffffffffffffffffffffffff811681036101b1576024359067ffffffffffffffff938483116101ad57366023840112156101ad57828601358581116101a95736602482860101116101a957818186959260248794018337810182815203925af1903d156101a3573d81811161017757604051917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f85011601168301908382109082111761014b5760405281528360203d92013e5b15610123575080f35b6040517fb418cb98000000000000000000000000000000000000000000000000000000008152fd5b6024866041877f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b6024856041867f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b5061011a565b8480fd5b8380fd5b5080fd5b8280fdfea164736f6c6343000811000a";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): ReenteringProtocolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReenteringProtocol;
}
