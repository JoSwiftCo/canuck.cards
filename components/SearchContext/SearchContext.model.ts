import { BenefitCode } from "../../references/benefits/benefit.model";
import { IssueCodeName } from "../../references/issuers/issuer.model";
import { NetworkCode } from "../../references/networks/network.model";

export interface SearchContextQuery {
    networks: Array<NetworkCode>,
    benefits: Array<BenefitCode>,
    issuers: Array<IssueCodeName>
}