export interface Issuer {
    displayName: string,
    codeName: IssueCodeName,
    numberOfCreditCard: number, // Number of cards supported by canuck.cards
    linkToAllCreditCards: string, // Used to track if there's a new card
    numberOfPrepaidCard: number, // Including debit cards & prepaid cards. Note: Charge card (from Amex) will be counted toward credit cards
    linkToAllPrepaidCards: string, // Used to track if there's a new card
}

// Curated list of card issuers currently supported by canuck.cards
export type IssueCodeName = 
    'alterna' |
    'amex' |
    'bmo' |
    'capitalone' |
    'cibc' |
    'cwb' |
    'hometrust' |
    'cicici' |
    'invis' |
    'koho' |
    'laurential' |
    'manulife' |
    'nationalbank' |
    'pcfinancial' |
    'rbc' |
    'refreshfinancial' |
    'rogersbank' |
    'scotiabank' |
    'servus' |
    'simplii' |
    'tangerine' |
    'td' |
    'triangle' |
    'wealthsimple'
;