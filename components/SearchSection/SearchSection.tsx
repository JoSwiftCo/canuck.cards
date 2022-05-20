import { useContext, useState } from 'react'
import { Menu } from '@headlessui/react'
import { ChevronDownIcon, FilterIcon } from '@heroicons/react/solid'
import { SearchSectionFilterContext } from './SearchSectionFilterContext'
import FilterSections from '../FilterSections'
import { Card } from '../../classes/card.model'
import SearchSectionMobileView from './SearchSectionMobileView'
import CardDialog from '../CardDialog'
import SortContainer from '../SortContainer'
import FilteredCardsContainer from '../FilteredCardsContainer'

const SearchSection = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [cardDialogOpen, setCardDialogOpen] = useState(false);
    const [selectedCardForDialog, setSelectedCardForDialog] = useState<Card|any>({});
    const { updateFilterOptions, filteredCards } = useContext(SearchSectionFilterContext);
    return (
        <>
            {/* Mobile filter dialog */}
            <SearchSectionMobileView
                mobileFiltersOpen={mobileFiltersOpen}
                setMobileFiltersOpen={setMobileFiltersOpen}
            ></SearchSectionMobileView>

            {/* Card Dialog */}
            <CardDialog
                cardDialogOpen={cardDialogOpen}
                setCardDialogOpen={setCardDialogOpen}
                selectedCardForDialog={selectedCardForDialog}
            ></CardDialog>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh_-_64px)]">
                <div className="relative z-10 flex items-baseline justify-end pt-3 pb-3 h-[50px]">
                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-white bg-gray-800 px-2 py-1 rounded-full">
                                    Sort
                                    <ChevronDownIcon
                                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>
                            <SortContainer></SortContainer>
                        </Menu>
                        <button
                            type="button"
                            className="p-2 -m-2 ml-4 sm:ml-6 lg:hidden"
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
                        <div className="hidden lg:block h-[calc(100vh_-_114px)] overflow-y-auto">
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
                            <div className="lg:h-[calc(100vh_-_114px)] md:h-full sm:h-full flex flex-row flex-wrap w-full overflow-y-auto lg:px-20 md:px-15 sm:px-1">
                                <FilteredCardsContainer
                                    filteredCards={filteredCards}
                                    setSelectedCardForDialog={setSelectedCardForDialog}
                                    setCardDialogOpen={setCardDialogOpen}
                                ></FilteredCardsContainer>
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