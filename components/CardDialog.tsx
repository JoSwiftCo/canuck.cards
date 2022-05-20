import { Dialog } from "@headlessui/react";
import { Dispatch } from "react";
import { Card } from "../classes/card.model";
import CardImage from "./CardImage";
import { CardBenefitBadges } from "./FilteredCardsContainer";

interface CardDialogProps {
    cardDialogOpen: boolean,
    setCardDialogOpen: Dispatch<any>,
    selectedCardForDialog: Card | any
}

const CardDialog = ({ cardDialogOpen, setCardDialogOpen, selectedCardForDialog }: CardDialogProps) => {
    if (!selectedCardForDialog || !selectedCardForDialog.codeName) {
        return (<></>);
    }
    return (
        <Dialog
            open={cardDialogOpen}
            onClose={() => setCardDialogOpen(false)}
            className="relative z-50"
        >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            {/* Full-screen scrollable container */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                {/* Container to center the panel */}
                <div className="flex min-h-full items-center justify-center">
                    {/* The actual dialog panel  */}
                    <Dialog.Panel 
                        className="mx-auto max-w-md bg-white rounded pt-6 overflow-y-auto">
                        <div className="flex justify-center">
                            <CardImage
                                imageUrl={selectedCardForDialog.codeName}
                            ></CardImage>
                        </div>
                        <div className="flex flex-col justify-between p-[10px] leading-normal">
                            <h5 className="text-x1 tracking-tight text-gray-900 text-center">{selectedCardForDialog.displayName}</h5>
                            <p className="text-center font-bold">{selectedCardForDialog.spendingCurrency.symbol}{selectedCardForDialog.annualFee}/year</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{selectedCardForDialog.description}</p>
                            <div className="flex flex-wrap flex-row justify-center">
                                <CardBenefitBadges benefitCodes={selectedCardForDialog.benefits}></CardBenefitBadges>
                            </div>
                        </div>
                        <ul className="text-center text-sm text-gray-700">
                            {
                                selectedCardForDialog.highlights.map((item: string) => (
                                    <li key={item}>{item}</li>
                                ))
                            }
                        </ul>
                        <button className="absolute bottom-1 rounded-full focus:outline-none 
                        text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 
                        font-medium text-sm px-5 py-2.5 mb-2 dark:bg-purple-600
                        dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                            Learn more
                        </button>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>

    )
}

export default CardDialog;