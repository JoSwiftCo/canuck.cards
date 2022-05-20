export interface Issuer {
    displayName: string,
    codeName: IssueCodeName,
    numberOfCreditCards: number, // Number of cards supported by canuck.cards
    linkToAllCreditCards: string, // Used to track if there's a new card
    numberOfPrepaidCards: number, // Including debit cards & prepaid cards. Note: Charge card (from Amex) will be counted toward credit cards
    linkToAllPrepaidCards: string, // Used to track if there's a new card
}

export const Issuers:Issuer[] = [
    {
        displayName: 'KOHO',
        codeName: 'koho',
        numberOfCreditCards: 0,
        linkToAllCreditCards: '',
        numberOfPrepaidCards: 1,
        linkToAllPrepaidCards: ''
    },
    {
        displayName: 'STACK Financial',
        codeName: 'stackfinancial',
        numberOfCreditCards: 0,
        linkToAllCreditCards: '',
        numberOfPrepaidCards: 1,
        linkToAllPrepaidCards: ''
    },
    {
        displayName: 'Wealthsimple',
        codeName: 'wealthsimple',
        numberOfCreditCards: 0,
        linkToAllCreditCards: '',
        numberOfPrepaidCards: 1,
        linkToAllPrepaidCards: ''
    },
    {
        displayName: '(Transfer) WISE',
        codeName: 'transferwise',
        numberOfCreditCards: 0,
        linkToAllCreditCards: '',
        numberOfPrepaidCards: 1,
        linkToAllPrepaidCards: ''
    },
    {
        displayName: 'MOGO',
        codeName: 'mogo',
        numberOfCreditCards: 0,
        linkToAllCreditCards: '',
        numberOfPrepaidCards: 1,
        linkToAllPrepaidCards: ''
    },
    {
        displayName: 'American Express',
        codeName: 'amex',
        numberOfCreditCards: 20,
        linkToAllCreditCards: 'https://www.americanexpress.com/ca/en/credit-cards/all-cards/?intlink=ca-en-hp-product1-cm-personalcards-03242021',
        numberOfPrepaidCards: 0,
        linkToAllPrepaidCards: ''
    },
    {
        displayName: 'Scotiabank',
        codeName: 'scotiabank',
        numberOfCreditCards: 16,
        linkToAllCreditCards: 'https://www.scotiabank.com/ca/en/personal/credit-cards/compare-cards.html',
        numberOfPrepaidCards: 0,
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
    'wealthsimple' |
    'stackfinancial' |
    'transferwise' |
    'mogo'
;