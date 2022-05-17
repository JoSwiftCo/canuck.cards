export interface Benefit {
    displayName: string,
    codeName: BenefitCode
}

export type BenefitCode =
    'travel' |
    'merchandise' |
    'lowrate' |
    'balancetransfer' |
    'cashback' |
    'rebuildcredit' |
    'fxspending' |
    'free' |
    'lounge' |
    'business' |
    'wifi' |
    'insurance' |
    'hotel' |
    'usd' |
    'metal' |
    'crypto'
;

export const Benefits:Array<Benefit> = [
    {
        displayName: 'Travel',
        codeName: 'travel'
    },
    {
        displayName: 'Crypto Rewards',
        codeName: 'crypto'
    },
    {
        displayName: 'Cash back',
        codeName: 'cashback'
    },
    {
        displayName: 'Merchandise',
        codeName: 'merchandise'
    },
    {
        displayName: 'Low Rate',
        codeName: 'lowrate'
    },
    {
        displayName: 'Balance Transfer',
        codeName: 'balancetransfer'
    },
    {
        displayName: 'Rebuild credit',
        codeName: 'rebuildcredit'
    },
    {
        displayName: 'FX Spending',
        codeName: 'fxspending'
    },
    {
        displayName: 'Free',
        codeName: 'free'
    },
    {
        displayName: 'Lounge Access',
        codeName: 'lounge'
    },
    {
        displayName: 'Business spending',
        codeName: 'business'
    },
    {
        displayName: 'Wifi',
        codeName: 'wifi'
    },
    {
        displayName: 'Insurance',
        codeName: 'insurance'
    },
    {
        displayName: 'Hotel',
        codeName: 'hotel'
    },
    {
        displayName: 'USD Spending',
        codeName: 'usd'
    },
    {
        displayName: 'Metal card',
        codeName: 'metal'
    }
];