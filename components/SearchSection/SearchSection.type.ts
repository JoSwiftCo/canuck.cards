import { Benefit } from "../../references/benefits/benefit.model"
import { CardType } from "../../references/cards/card.model"
import { Issuer } from "../../references/issuers/issuer.model"
import { Network } from "../../references/networks/network.model"

export interface FilterItem {
    id: 'networks' | 'benefits' | 'issuers' | 'cardtypes',
    name: string,
    count: number,
    options: any[]
}

export interface Selector {
    checked: Boolean
}

export interface NetworkSelector extends Network, Selector {}

export interface BenefitSelector extends Benefit, Selector {}

export interface IssuerSelector extends Issuer, Selector {}

export interface CardTypeSelector extends CardType, Selector {}