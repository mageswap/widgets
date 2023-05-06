import { Icon } from 'icons';
import { ReactNode } from 'react';
import { Color } from 'theme';
interface StatusHeaderProps {
    icon: Icon;
    iconColor?: Color;
    iconSize?: number;
    children: ReactNode;
}
export declare function StatusHeader({ icon: Icon, iconColor, iconSize, children }: StatusHeaderProps): JSX.Element;
interface ErrorDialogProps {
    header?: ReactNode;
    message: ReactNode;
    error?: Error;
    action: ReactNode;
    onClick: () => void;
    onDismiss: () => void;
}
export default function ErrorDialog({ header, message, error, action, onClick, onDismiss }: ErrorDialogProps): JSX.Element;
export {};
