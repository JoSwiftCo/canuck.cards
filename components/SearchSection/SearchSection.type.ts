import { Benefit } from "../../classes/benefit.model"
import { CardType } from "../../classes/card.model"
import { Issuer } from "../../classes/issuer.model"
import { Network } from "../../classes/network.model"

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