import { Benefit } from "../Benefits/benefit.model";
import { IssueCodeName } from "../Issuers/issuer.model";
import { NetworkCode } from "../networks/network.model";
import { RewardProgramCodeName } from "../reward_programs/reward_program.model";



/**
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
 * Annual fee = fee * frequency
 * We arrive at this interface because some cards charge users on a monthly basic, not annually (Amex Cobalt card)
 * So annual fee for the Amex cobalt card would be: $12.99 * 12 (months) = $155.88 (annually)
 */
interface MaintainingFee {
    basis: 12 | 1, // annually = 1; monthly = 12. Most of the time this would be 1
    fee: number
}

/**
 * Some cards were designed to USD spending, not CAD. Ex: Scotiabank ® U.S. Dollar VISA* Card
 */
type SpendingCurrency = 'cad' | 'usd';

interface AdditionalCard {
    available: Boolean,
    fee: MaintainingFee
}

type CardType = 'credit' | 'charge' | 'prepaid';

export interface CreditCard {
    codeName: string, // Unique identifier to be used for the image thumbnail
    displayName: string,
    description: string,
    type: CardType,
    network: NetworkCode,
    promo: string,
    issuer: IssueCodeName,
    cashAdvanceInterest: CashAdvanceInterest,
    spendingInterest: SpendingInterest,
    fee: MaintainingFee,
    spendingCurrency: SpendingCurrency,
    thumbnail: string, // URL to the thumbnail image of this card
    officialLink: string, // Link to the official website of the issuer of this card
    referralLink: string,
    rewardProgramCode: RewardProgramCodeName,
    additionalCard: AdditionalCard,
    benefits: Array<Benefit>
}