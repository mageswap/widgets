import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ImmutableState, ImmutableStateInterface } from "../ImmutableState";
export declare class ImmutableState__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ImmutableStateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ImmutableState;
}
