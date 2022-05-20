import { Fragment, useContext, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FilterIcon, ViewGridIcon } from '@heroicons/react/solid'
import { mergeTailwindClass } from '../../utils/tailwindClass'
import { SearchSectionFilterContext } from './SearchSectionFilterContext'
import FilterSections from '../FilterSections'
import dynamic from "next/dynamic";
import { Card } from '../../classes/card.model'

// Lazy importing hidden-by-default components
const SearchSectionMobileViewDynamic = dynamic(() => import('./SearchSectionMobileView'));
const FilteredCardsContainerDynamic = dynamic(() => import("../FilteredCardsContainer"));
const CardDialogDynamic = dynamic(() => import("../CardDialog"));
const SortContainerDynamic = dynamic(() => import('../SortContainer'));

const SearchSection = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [cardDialogOpen, setCardDialogOpen] = useState(false);
    const [selectedCardForDialog, setSelectedCardForDialog] = useState<Card|any>({});
    const { updateFilterOptions, filteredCards } = useContext(SearchSectionFilterContext);
    return (
        <>
            {/* Mobile filter dialog */}
            <SearchSectionMobileViewDynamic
                mobileFiltersOpen={mobileFiltersOpen}
                setMobileFiltersOpen={setMobileFiltersOpen}
            ></SearchSectionMobileViewDynamic>

            {/* Card Dialog */}
            <CardDialogDynamic
                cardDialogOpen={cardDialogOpen}
                setCardDialogOpen={setCardDialogOpen}
                selectedCardForDialog={selectedCardForDialog}
            ></CardDialogDynamic>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 flex items-baseline justify-between pt-3 pb-3 h-[50px]">
                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>
                            <SortContainerDynamic></SortContainerDynamic>
                        </Menu>

                        <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">View grid</span>
                            <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                            onClick={() => setMobileFiltersOpen(true)}
                        >
                            <span className="sr-only">Filters</span>
                            <FilterIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" className="pt-0 pb-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                        {/* Filters */}
                        <div className="hidden lg:block h-[calc(100vh_-_80px)] overflow-y-auto">
                            <FilterSections
                                disclosureClasses='border-b border-gray-200 py-6'
                                disclosureH3Classes='-my-3 flow-root'
                                disclosureButtonClasses='py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500'
                                disclosurePanelDiv='space-y-4'
                                isMobile={false}
                                labelClasses='ml-3 text-sm text-gray-600'
                            ></FilterSections>
                        </div>

                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            {/* Replace with your content */}
                            <div className="lg:h-[calc(100vh_-_80px)] md:h-full sm:h-full flex flex-row flex-wrap w-full overflow-y-auto lg:px-20 md:px-15 sm:px-1">
                                <FilteredCardsContainerDynamic
                                    filteredCards={filteredCards}
                                    setSelectedCardForDialog={setSelectedCardForDialog}
                                    setCardDialogOpen={setCardDialogOpen}
                                ></FilteredCardsContainerDynamic>
                            </div>
                            {/* /End replace */}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SearchSection;