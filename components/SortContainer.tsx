import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { mergeTailwindClass } from "../utils/tailwindClass";
import { SearchSectionFilterContext } from "./SearchSection/SearchSectionFilterContext";

const SortContainer = () => {
    const { sortOptions, updateSortOptions} = useContext(SearchSectionFilterContext);
    return (
        <>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {sortOptions.map((option) => (
                            <Menu.Item key={option.name}>
                                {({ active }) => (
                                    <a
                                        href={option.href}
                                        className={mergeTailwindClass(
                                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        {option.name}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </>
    );
}

export default SortContainer;