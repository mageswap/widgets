import { PropsWithChildren } from 'react';
export declare const Context: import("react").Context<{
    open: boolean;
    collapse: () => void;
    onToggleOpen: () => void;
}>;
export declare function Provider({ children }: PropsWithChildren): JSX.Element;
export declare function useCollapseToolbar(): () => void;
