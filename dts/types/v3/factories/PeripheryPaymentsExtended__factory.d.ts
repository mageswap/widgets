import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PeripheryPaymentsExtended, PeripheryPaymentsExtendedInterface } from "../PeripheryPaymentsExtended";
export declare class PeripheryPaymentsExtended__factory {
    static readonly abi: ({
        inputs: never[];
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
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): PeripheryPaymentsExtendedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PeripheryPaymentsExtended;
}
