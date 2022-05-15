import { IssueCodeName } from "./issuer_code_name.type";

/**
 * To do:
 * 1. Figure out a way to crawl the websites using allCreditCardPage | allNonCreditCardPage
 */
export interface Issuer {
    displayName: string,
    codeName: IssueCodeName,
    numberOfCreditCard: number, // Number of cards supported by canuck.cards
    linkToAllCreditCards: string, // Used to track if there's a new card
    numberOfPrepaidCard: number, // Including debit cards & prepaid cards. Note: Charge card (from Amex) will be counted toward credit cards
    linkToAllPrepaidCards: string, // Used to track if there's a new card
}