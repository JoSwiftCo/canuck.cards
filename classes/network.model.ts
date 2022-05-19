// List of networks supported by canuck.cards
export type NetworkCode = 'amex' | 'mastercard' | 'visa' | 'discovery'

export interface Network {
    displayName: string,
    codeName: NetworkCode,
    availableInCanada: Boolean
}

export const Networks:Network[] = [
    {
        displayName: 'American Express',
        codeName: 'amex',
        availableInCanada: true
    },
    {
        displayName: 'Mastercard',
        codeName: 'mastercard',
        availableInCanada: true
    },
    {
        displayName: 'Visa',
        codeName: 'visa',
        availableInCanada: true
    }
];