/// <reference types="react" />
declare const multicall: {
    reducerPath: string;
    reducer: import("redux").Reducer<import("@mageswap/redux-multicall").MulticallState, import("redux").AnyAction>;
    actions: import("@reduxjs/toolkit").CaseReducerActions<{
        addMulticallListeners: (state: import("immer/dist/internal").WritableDraft<import("@mageswap/redux-multicall").MulticallState>, action: {
            payload: import("@mageswap/redux-multicall").MulticallListenerPayload;
            type: string;
        }) => void;
        removeMulticallListeners: (state: import("immer/dist/internal").WritableDraft<import("@mageswap/redux-multicall").MulticallState>, action: {
            payload: import("@mageswap/redux-multicall").MulticallListenerPayload;
            type: string;
        }) => void;
        fetchingMulticallResults: (state: import("immer/dist/internal").WritableDraft<import("@mageswap/redux-multicall").MulticallState>, action: {
            payload: import("@mageswap/redux-multicall").MulticallFetchingPayload;
            type: string;
        }) => void;
        errorFetchingMulticallResults: (state: import("immer/dist/internal").WritableDraft<import("@mageswap/redux-multicall").MulticallState>, action: {
            payload: import("@mageswap/redux-multicall").MulticallFetchingPayload;
            type: string;
        }) => void;
        updateMulticallResults: (state: import("immer/dist/internal").WritableDraft<import("@mageswap/redux-multicall").MulticallState>, action: {
            payload: import("@mageswap/redux-multicall").MulticallResultsPayload;
            type: string;
        }) => void;
        updateListenerOptions: (state: import("immer/dist/internal").WritableDraft<import("@mageswap/redux-multicall").MulticallState>, action: {
            payload: import("@mageswap/redux-multicall").MulticallListenerOptionsPayload;
            type: string;
        }) => void;
    }, string>;
    hooks: {
        useMultipleContractSingleData: (chainId: number | undefined, latestBlockNumber: number | undefined, addresses: (string | undefined)[], contractInterface: import("@ethersproject/abi").Interface, methodName: string, callInputs?: (string | number | import("ethers").BigNumber | import("@mageswap/redux-multicall/dist/validation").MethodArg[] | undefined)[] | undefined, options?: Partial<import("@mageswap/redux-multicall").ListenerOptionsWithGas> | undefined) => import("@mageswap/redux-multicall").CallState[];
        useSingleContractMultipleData: (chainId: number | undefined, latestBlockNumber: number | undefined, contract: import("ethers").Contract | null | undefined, methodName: string, callInputs: ((string | number | import("ethers").BigNumber | import("@mageswap/redux-multicall/dist/validation").MethodArg[] | undefined)[] | undefined)[], options?: Partial<import("@mageswap/redux-multicall").ListenerOptionsWithGas> | undefined) => import("@mageswap/redux-multicall").CallState[];
        useSingleContractWithCallData: (chainId: number | undefined, latestBlockNumber: number | undefined, contract: import("ethers").Contract | null | undefined, callDatas: string[], options?: Partial<import("@mageswap/redux-multicall").ListenerOptionsWithGas> | undefined) => import("@mageswap/redux-multicall").CallState[];
        useSingleCallResult: (chainId: number | undefined, latestBlockNumber: number | undefined, contract: import("ethers").Contract | null | undefined, methodName: string, inputs?: (string | number | import("ethers").BigNumber | import("@mageswap/redux-multicall/dist/validation").MethodArg[] | undefined)[] | undefined, options?: Partial<import("@mageswap/redux-multicall").ListenerOptionsWithGas> | undefined) => import("@mageswap/redux-multicall").CallState;
        useMultiChainMultiContractSingleData: (chainToBlockNumber: Record<number, number | undefined>, chainToAddresses: Record<number, (string | undefined)[]>, contractInterface: import("@ethersproject/abi").Interface, methodName: string, callInputs?: (string | number | import("ethers").BigNumber | import("@mageswap/redux-multicall/dist/validation").MethodArg[] | undefined)[] | undefined, options?: Partial<import("@mageswap/redux-multicall").ListenerOptionsWithGas> | undefined) => Record<number, import("@mageswap/redux-multicall").CallState[]>;
        useMultiChainSingleContractSingleData: (chainToBlockNumber: Record<number, number | undefined>, chainToAddress: Record<number, string | undefined>, contractInterface: import("@ethersproject/abi").Interface, methodName: string, callInputs?: (string | number | import("ethers").BigNumber | import("@mageswap/redux-multicall/dist/validation").MethodArg[] | undefined)[] | undefined, options?: Partial<import("@mageswap/redux-multicall").ListenerOptionsWithGas> | undefined) => Record<number, import("@mageswap/redux-multicall").CallState>;
    };
    Updater: (props: Pick<import("@mageswap/redux-multicall/dist/updater").UpdaterProps, "chainId" | "listenerOptions" | "latestBlockNumber" | "contract" | "isDebug">) => JSX.Element;
};
export default multicall;
export declare function MulticallUpdater(): JSX.Element;
