import { createContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { Networks } from '../../references/networks/networks'
import { Benefits } from '../../references/benefits/benefits'
import { Issuers } from '../../references/issuers/issuers'
import { BenefitSelector, FilterItem, IssuerSelector, NetworkSelector } from './SearchSection.type';

export const SearchSectionFilterContext = createContext({
    filters: [],
    updateFilterOptions: (sectionIndex:number, optionIndex: number) => {},
    sortOptions: [],
    updateSortOptions: (_options) => {}
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
    const [filters, setFilters] = useState<FilterItem[]>(defaultFilters);
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
    return (
        <SearchSectionFilterContext.Provider value={{filters, updateFilterOptions, sortOptions, updateSortOptions}}>
            {props.children}
        </SearchSectionFilterContext.Provider>
    )
}

export default SearchSectionFilterContextProvider;