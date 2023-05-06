/// <reference types="react" />
import { TextProps as TextPropsWithCss } from 'rebass';
import type { Color } from './theme';
type TextProps = Omit<TextPropsWithCss, 'css' | 'color' | 'userSelect'> & {
    color?: Color;
    userSelect?: boolean;
    $inline?: boolean;
};
export declare function H1(props: TextProps): JSX.Element;
export declare function H2(props: TextProps): JSX.Element;
export declare function H3(props: TextProps): JSX.Element;
export declare function H4(props: TextProps): JSX.Element;
export declare function Subhead1(props: TextProps): JSX.Element;
export declare function Subhead2(props: TextProps): JSX.Element;
export declare function Body1(props: TextProps): JSX.Element;
export declare const Body2LineHeightRem = 1.25;
export declare function Body2(props: TextProps): JSX.Element;
export declare function Caption(props: TextProps): JSX.Element;
export declare function Badge(props: TextProps): JSX.Element;
export declare function ButtonLarge(props: TextProps): JSX.Element;
export declare function ButtonMedium(props: TextProps): JSX.Element;
export declare function ButtonSmall(props: TextProps): JSX.Element;
export declare function TransitionButton(props: TextProps & {
    buttonSize: 'small' | 'medium' | 'large';
}): JSX.Element;
export declare function Code(props: TextProps): JSX.Element;
export {};
