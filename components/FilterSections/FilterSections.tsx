import { Disclosure } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { SearchSectionFilterContext } from "../SearchSection/SearchSectionFilterContext";
import { FilterSectionsProps } from "./FilterSections.type";

const FilterSections = (props: FilterSectionsProps) => {
    
    const {
        disclosureClasses,
        disclosureH3Classes,
        disclosureButtonClasses,
        disclosurePanelDiv,
        isMobile,
        labelClasses
    } = props;
    console.log('Filter [isMobile:', isMobile,'] is rendered')
    const { filters, updateFilterOptions } = useContext(SearchSectionFilterContext);
    return (<>
        {filters.map((section, sectionIdx) => (
            <Disclosure as="div" key={section.id} className={disclosureClasses}>
                {({ open }) => (
                    <>
                        <h3 className={disclosureH3Classes}>
                            <Disclosure.Button className={disclosureButtonClasses}>
                                <span className="font-medium text-gray-900">
                                    {section.name}
                                    <span className="ml-1 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs leading-none text-red-100 bg-red-600 rounded-full">
                                        {section.count}
                                    </span>
                                </span>
                                <span className="ml-6 flex items-center">
                                    {open ? (
                                        <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                        <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                                </span>
                            </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                            <div className={disclosurePanelDiv}>
                                {section.options.map((option, optionIdx) => (
                                    <div key={option.codeName} className="flex items-center">
                                        <input
                                            id={`filter-${section.id}-${optionIdx}`}
                                            name={`${section.id}[]`}
                                            defaultValue={option.codeName}
                                            type="checkbox"
                                            defaultChecked={option.checked}
                                            onChange={() => { updateFilterOptions(sectionIdx, optionIdx) }}
                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label
                                            htmlFor={
                                                isMobile ? `filter-mobile-${section.id}-${optionIdx}` : `filter-${section.id}-${optionIdx}`
                                            }
                                            className={labelClasses}
                                        >
                                            {option.displayName}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        ))}
    </>
    )
}

export default FilterSections;