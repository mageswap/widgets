/// <reference types="react" />
import { Currency } from '@mageswap/sdk-core';
export default function CommonBases({ chainId, onSelect, selected, }: {
    chainId?: number;
    selected?: Currency | null;
    onSelect: (currency: Currency) => void;
}): JSX.Element | null;
