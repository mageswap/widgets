import { Currency, CurrencyAmount } from '@mageswap/sdk-core';
export default function approveAmountCalldata(amount: CurrencyAmount<Currency>, spender: string): {
    to: string;
    data: string;
    value: '0x0';
};
