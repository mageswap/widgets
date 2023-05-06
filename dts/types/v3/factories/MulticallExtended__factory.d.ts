import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { MulticallExtended, MulticallExtendedInterface } from "../MulticallExtended";
export declare class MulticallExtended__factory {
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
    static createInterface(): MulticallExtendedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MulticallExtended;
}
