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
        let results:Card[] = [];
        const selectedSections:FilterItem[] = filters.filter(item => item.count);
        for (let i = 0; i < selectedSections.length; i++) {
            const section:FilterItem = selectedSections[i];
            let cardsFound:Card[] = [];
            if (section.id === 'benefits') {
                const benefitCodes:BenefitCode[] = section.options
                    .filter((item:BenefitSelector) => item.checked)
                    .map((item:BenefitSelector) => item.codeName);
                cardsFound = allCards.filter((card:Card) => benefitCodes.every((code:BenefitCode) => card.benefits.includes(code)));
                
            }
            else if (section.id === 'networks') {
                const networkCodes:NetworkCode[] = section.options
                    .filter((item:NetworkSelector) => item.checked)
                    .map((item:NetworkSelector) => item.codeName);
                cardsFound = allCards.filter((card:Card) => networkCodes.includes(card.network));
            }
            else {
                const issuerCodes:IssueCodeName[] = section.options
                    .filter((item:IssuerSelector) => item.checked)
                    .map((item:IssuerSelector) => item.codeName);
                cardsFound = allCards.filter((card:Card) => issuerCodes.includes(card.issuer));
            }
            results = results.concat(cardsFound);
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