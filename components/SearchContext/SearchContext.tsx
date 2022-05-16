import { createContext, useState } from "react";
import { Card } from "../../references/Cards/card.model";
import { SearchContextQuery } from "./SearchContext.model";

export const SearchContext = createContext({});

export const SearchContextProvider = (props) => {
    const [searchQuery, setSearchQuery] = useState<SearchContextQuery>({
        networks: [],
        benefits: [],
        issuers: []
    });
    const updateSearchQuery = (query: SearchContextQuery) => {
        setSearchQuery(query);
    }

    const [searchResults, setSearchResults] = useState<Array<Card>>([]);
    const updateSearchResults = (results:Array<Card>) => {
        setSearchResults(results);
    }
    
    return (
        <SearchContext.Provider value={{searchQuery, updateSearchQuery, searchResults, updateSearchResults}}>
            { props.children }
        </SearchContext.Provider>
    )
}