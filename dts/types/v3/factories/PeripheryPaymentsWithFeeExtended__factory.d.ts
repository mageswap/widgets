import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PeripheryPaymentsWithFeeExtended, PeripheryPaymentsWithFeeExtendedInterface } from "../PeripheryPaymentsWithFeeExtended";
export declare class PeripheryPaymentsWithFeeExtended__factory {
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
    static createInterface(): PeripheryPaymentsWithFeeExtendedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PeripheryPaymentsWithFeeExtended;
}
