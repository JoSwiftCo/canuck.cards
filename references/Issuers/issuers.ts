export interface Issuer {
    displayName: string,
    codeName: IssueCodeName,
    numberOfCreditCard: number, // Number of cards supported by canuck.cards
    linkToAllCreditCards: string, // Used to track if there's a new card
    numberOfPrepaidCard: number, // Including debit cards & prepaid cards. Note: Charge card (from Amex) will be counted toward credit cards
    linkToAllPrepaidCards: string, // Used to track if there's a new card
}

export const Issuers:Array<Issuer> = [
    {
        displayName: 'American Express',
        codeName: 'amex',
        numberOfCreditCard: 20,
        linkToAllCreditCards: 'https://www.americanexpress.com/ca/en/credit-cards/all-cards/?intlink=ca-en-hp-product1-cm-personalcards-03242021',
        numberOfPrepaidCard: 0,
        linkToAllPrepaidCards: ''
    },
    {
        displayName: 'Scotiabank',
        codeName: 'scotiabank',
        numberOfCreditCard: 16,
        linkToAllCreditCards: 'https://www.scotiabank.com/ca/en/personal/credit-cards/compare-cards.html',
        numberOfPrepaidCard: 0,
        linkToAllPrepaidCards: ''
    },
];

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