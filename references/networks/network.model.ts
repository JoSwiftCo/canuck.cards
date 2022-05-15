// List of networks supported by canuck.cards
export type NetworkCode = 'amex' | 'mastercard' | 'visa' | 'discovery'

export interface Network {
    displayName: string,
    codeName: NetworkCode,
    availableInCanada: Boolean
}