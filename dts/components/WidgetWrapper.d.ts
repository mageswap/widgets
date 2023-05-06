import { PropsWithChildren } from 'react';
interface WidgetWrapperProps {
    width: number | string | undefined;
    className?: string | undefined;
}
export default function WidgetWrapper(props: PropsWithChildren<WidgetWrapperProps>): JSX.Element;
export {};
