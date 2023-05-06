/// <reference types="react" />
import { Currency, CurrencyAmount } from '@mageswap/sdk-core';
import { PriceImpact } from 'hooks/usePriceImpact';
import { Field } from 'state/swap';
export declare function useFormattedFieldAmount({ currencyAmount, fieldAmount, }: {
    currencyAmount?: CurrencyAmount<Currency>;
    fieldAmount?: string;
}): string;
interface FieldWrapperProps {
    field: Field;
    maxAmount?: string;
    approved?: boolean;
    fiatValueChange?: PriceImpact;
    subheader: string;
}
export declare function FieldWrapper({ field, maxAmount, approved, fiatValueChange, className, subheader, }: FieldWrapperProps & {
    className?: string;
}): JSX.Element;
export default function Input(): JSX.Element;
export {};
