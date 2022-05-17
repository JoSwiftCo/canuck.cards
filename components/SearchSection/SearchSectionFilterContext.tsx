import { createContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useContext, useEffect, useState } from "react";
import { Networks } from '../../references/networks/networks'
import { Benefits } from '../../references/benefits/benefits'
import { Issuers } from '../../references/issuers/issuers'
import { BenefitSelector, FilterItem, IssuerSelector, NetworkSelector } from './SearchSection.type';
import { Card } from "../../references/Cards/card.model";
import { AllCardsContext } from "../../pages";
import { BenefitCode } from "../../references/benefits/benefit.model";
import { NetworkCode } from "../../references/networks/network.model";
import { IssueCodeName } from "../../references/issuers/issuer.model";

export const SearchSectionFilterContext = createContext({
    filters: [],
    updateFilterOptions: (sectionIndex:number, optionIndex: number) => {},
    sortOptions: [],
    updateSortOptions: (_options) => {},
    filteredCards: []
});

const defaultSortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

const networkOptions: Array<NetworkSelector> = Networks.map(item => {
    const newItem: NetworkSelector = {
        checked: false,
        ...item
    }
    return newItem;
});

const benefitOptions: Array<BenefitSelector> = Benefits.map(item => {
    const newItem: BenefitSelector = {
        checked: false,
        ...item
    }
    return newItem;
});

const issuerOptions: Array<IssuerSelector> = Issuers.map(item => {
    const newItem: IssuerSelector = {
        checked: false,
        ...item
    }
    return newItem;
});

const defaultFilters: Array<FilterItem> = [
    {
        id: 'networks',
        name: 'Networks',
        count: 0,
        options: networkOptions
    },
    {
        id: 'benefits',
        name: 'Benefits',
        count: 0,
        options: benefitOptions
    },
    {
        id: 'issuers',
        name: 'Issuers',
        count: 0,
        options: issuerOptions
    },
]

const SearchSectionFilterContextProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal; }) => {
    const allCards = useContext<Card[]>(AllCardsContext);
    const [filters, setFilters] = useState<FilterItem[]>(defaultFilters);
    const [filteredCards, setFilteredCards] = useState<Card[]>([]);
    const updateFilterOptions = (sectionIndex:number, optionIndex: number) => {
        const target:Boolean = !filters[sectionIndex].options[optionIndex].checked;
        const count:number = target ? 1 : -1;
        filters[sectionIndex].options[optionIndex].checked = target;
        filters[sectionIndex].count += count;
        setFilters([...filters]);
    }
    const [sortOptions, setSortOptions] = useState(defaultSortOptions);
    const updateSortOptions = (_options) => {
        setSortOptions(_options);
    }

    const updateFilteredCard = () => {
        if (filters.every((item:FilterItem) => item.count === 0)) {
            setFilteredCards([]);
            return;
        }
        let results:Card[] = [];

        const benefitSectionIndex:number = filters.findIndex((item:FilterItem) => item.id === 'benefits');
        const networkSectionIndex:number = filters.findIndex((item:FilterItem) => item.id === 'networks');
        const issuerSectionIndex:number = filters.findIndex((item:FilterItem) => item.id === 'issuers');

        const benefitsCount:number = filters[benefitSectionIndex].count;
        const networksCount:number = filters[networkSectionIndex].count;
        const issuersCount:number = filters[issuerSectionIndex].count;

        const selectedBenefits:Array<BenefitCode> = filters[benefitSectionIndex].options
            .filter((item:BenefitSelector) => item.checked)
            .map((item:BenefitSelector) => item.codeName);
        const selectedNetworks:Array<NetworkCode> = filters[networkSectionIndex].options
            .filter((item:NetworkSelector) => item.checked)
            .map((item:NetworkSelector) => item.codeName);
        const selectedIssuers:Array<IssueCodeName> = filters[networkSectionIndex].options
            .filter((item:IssuerSelector) => item.checked)
            .map((item:IssuerSelector) => item.codeName);

        if (networksCount && issuersCount) {
            results = allCards.filter((card:Card) => selectedNetworks.includes(card.network) && selectedIssuers.includes(card.issuer));
        }
        else {
            if (networksCount) results = allCards.filter((card:Card) => selectedNetworks.includes(card.network));
            if (issuersCount) results = allCards.filter((card:Card) => selectedIssuers.includes(card.issuer));
        }

        if (benefitsCount) {
            const temp:Card[] = results.length ? results : allCards;
            results = temp.filter((card: Card) => selectedBenefits.every((benefit:BenefitCode) => card.benefits.includes(benefit)));
        }
        console.log(results);
        setFilteredCards(results);
    }

    useEffect(() => {
        updateFilteredCard();
    }, [filters]);
    return (
        <SearchSectionFilterContext.Provider value={{filters, updateFilterOptions, sortOptions, updateSortOptions, filteredCards}}>
            {props.children}
        </SearchSectionFilterContext.Provider>
    )
}

export default SearchSectionFilterContextProvider;