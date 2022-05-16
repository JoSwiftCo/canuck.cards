const dataset = [
    {
        issuer: 'scotia',
        network: 'mastercard',
        benefits: []
    },
    {
        issuer: 'bmo',
        network: 'mastercard',
        benefits: ['benefit1', 'benefit2', 'benefit4']
    },
    {
        issuer: 'scotia',
        network: 'amex',
        benefits: ['benefit2', 'benefit3']
    },
    {
        issuer: 'rbc',
        network: 'visa',
        benefits: ['benefit1']
    },
    {
        issuer: 'td',
        network: 'mastercard',
        benefits: ['benefit1', 'benefit5', 'benefit3']
    }
];

const benefits = [
    'benefit1',
    'benefit2',
    'benefit3',
    'benefit4',
    'benefit5',
    'benefit6',
    'benefit7'
];

const nerworks = [
    'amex',
    'mastercard',
    'visa'
]

const issuers = [
    'scotia',
    'rbc',
    'td',
    'bmo'
];

const search_query = {
    networks: ['mastercard', 'visa'], // string[]
    benefits: ['benefit4'], // string[]
    issuers: ['scotia', 'bmo'] // string[]
}

const search = (filter) => {

}

search(test1)