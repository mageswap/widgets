import { PropsWithChildren, ReactElement } from 'react';
export interface HeaderProps {
    title?: ReactElement;
}
export default function Header({ title, children }: PropsWithChildren<HeaderProps>): JSX.Element;
