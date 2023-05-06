import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { OracleSlippage, OracleSlippageInterface } from "../OracleSlippage";
export declare class OracleSlippage__factory {
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
    })[];
    static createInterface(): OracleSlippageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleSlippage;
}
