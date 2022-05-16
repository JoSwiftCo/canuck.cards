export interface Benefit {
    displayName: string,
    code: BenefitCode
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
    'metal'