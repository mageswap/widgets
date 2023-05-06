import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ApproveAndCall, ApproveAndCallInterface } from "../ApproveAndCall";
export declare class ApproveAndCall__factory {
    static readonly abi: ({
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
    } | {
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
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): ApproveAndCallInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ApproveAndCall;
}
