import { Benefit } from "../../references/benefits/benefit.model"
import { Issuer } from "../../references/issuers/issuer.model"
import { Network } from "../../references/networks/network.model"

export interface FilterItem {
    id: 'networks' | 'benefits' | 'issuers',
    name: string,
    count: number,
    options: Array<NetworkSelector> | Array<BenefitSelector> | Array<IssuerSelector>
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