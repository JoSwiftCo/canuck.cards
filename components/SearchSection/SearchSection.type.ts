import { Benefit } from "../../references/benefits/benefit.model"
import { CardType } from "../../references/Cards/card.model"
import { Issuer } from "../../references/issuers/issuer.model"
import { Network } from "../../references/networks/network.model"

export interface FilterItem {
    id: 'networks' | 'benefits' | 'issuers' | 'cardtypes',
    name: string,
    count: number,
    options: NetworkSelector[] | BenefitSelector[] | IssuerSelector[] | CardTypeSelector[]
}

export interface NetworkSelector extends Network {
    checked: Boolean
}

export interface BenefitSelector extends Benefit {
    checked: Boolean
}

export interface IssuerSelector extends Issuer {
    checked: Boolean
}

export interface CardTypeSelector extends CardType {
    checked: Boolean
}