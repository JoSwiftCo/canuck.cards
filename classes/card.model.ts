import { BenefitCode } from "./benefit.model";
import { IssueCodeName } from "./issuer.model";
import { NetworkCode } from "./network.model";
import { RewardProgramCodeName } from "./reward.model";


/**
 * Note: Prepaid cards don't have interest on spending or cash funding (because they are prepaid card)
 * The minValue and maxValue is for future use when comparing cards
 * We need to have displayValue because some cards have dynamic spening/funding rates
 * Ex: The funding rate for the TD Emerald Flex Visa Card is "TD Prime + 4.50% to 12.75%"
 */
interface CashAdvanceInterest {
    displayValue: string,
    minValue: number,
    maxValue: number
}

interface SpendingInterest {
    displayValue: string,
    minValue: number,
    maxValue: number
}

/**
 * Some cards were designed to USD spending, not CAD. Ex: Scotiabank ® U.S. Dollar VISA* Card
 */
type SpendingCurrency = {
    symbol: CurrencySymbol,
    name: CurrencyName
}
type CurrencySymbol = '$'
type CurrencyName = 'cad' | 'usd';

interface AdditionalCard {
    available: Boolean,
    annualFee: number,
    monthlyFee: number
}

export type CardTypeCode = 'credit' | 'charge' | 'prepaid';

export interface CardType {
    displayName: string,
    codeName: CardTypeCode
}
export const CardTypes:CardType[] = [
    {
        displayName: 'Credit Card',
        codeName: 'credit'
    },
    {
        displayName: 'Prepaid Card',
        codeName: 'prepaid'
    },
    {
        displayName: 'Charge Card',
        codeName: 'charge'
    }
]

/**
 * Rules for codeName:
 * 1. Do not include the words "card" at the end of the name
 * 2. All lowercase, separated by "_"
 * 3. Follow this format: <issuer_code>_<card_name>_<card_type>_<network>
 * Note: For American Express we don't have to include amex at the end of the codeName (they own their own payment network)
 * Examples:
 * Incorrect: Amex_Cobalt | amexCobalt | amex_cobalt_card | amexcobalt
 * Correct: amex_cobalt
 */
export interface Card {
    codeName: string, // Unique identifier to be used for the image thumbnail
    displayName: string,
    description: string,
    type: CardTypeCode,
    network: NetworkCode,
    promo: string,
    issuer: IssueCodeName,
    cashAdvanceInterest: CashAdvanceInterest | null,
    spendingInterest: SpendingInterest | null,
    annualFee: number,
    monthlyFee: number,
    signUpFee: number,
    topUpFee: number,
    currencySymbol: string,
    spendingCurrency: SpendingCurrency,
    officialLink: string, // Link to the official website of the issuer of this card
    referralLink: string,
    referralCode: string,
    rewardProgramCode: RewardProgramCodeName | null,
    additionalCard: AdditionalCard | null, // Prepaid cards don't have this feature
    benefits: BenefitCode[],
    notes: string[],
    highlights:string[],
    benefitsDetails: any // used for more information on the benefits (Tooltip)
}