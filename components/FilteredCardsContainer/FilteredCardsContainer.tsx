import { Benefit, BenefitCode, Benefits } from "../../classes/benefit.model";
import { Card } from "../../classes/card.model";
import CardImage from "../CardImage/CardImage";

interface CardBenefitBadgeProps {
    benefitCodes: BenefitCode[]
}

const CardBenefitBadges = ({ benefitCodes }: CardBenefitBadgeProps) => {
    const benefitDisplayNames: string[] = benefitCodes.map((code: BenefitCode) => Benefits.find((item: Benefit) => item.codeName === code).displayName);
    return (
        <>
            {
                benefitDisplayNames.map((benefitName: string) => (
                    <span
                        key={benefitName} 
                        className="bg-indigo-300 hover:bg-indigo-100 text-indigo-800 text-xs font-semibold my-[2px] mx-[2px] px-2.5 py-0.5 rounded-full dark:bg-indigo-200 dark:text-indigo-900">
                        {benefitName}
                    </span>
                ))
            }
        </>
    )
}

export { CardBenefitBadges };

const FilteredCardsContainer = ({ filteredCards }) => {
    return (
        <>
            {
                filteredCards.map((card: Card) => (
                    <a href="#" key={card.codeName}
                        className="relative rounded-lg pt-3 my-2 mx-2 flex 
                            flex-col items-center border-2 lg:max-w-[47%] 
                            md:max-w-[47%] sm:max-w-lg h-[500px] hover:bg-stone-50"
                        >
                        <CardImage
                            imageUrl={card.codeName}
                            issuerCode={card.issuer}
                        ></CardImage>
                        <div className="flex flex-col justify-between p-[10px] leading-normal">
                            <h5 className="text-x1 tracking-tight text-gray-900 text-center">{card.displayName}</h5>
                            <p className="text-center font-bold">{card.spendingCurrency.symbol} {card.annualFee}/year</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{card.description}</p>
                            <div className="flex flex-wrap flex-row justify-center">
                                <CardBenefitBadges benefitCodes={card.benefits}></CardBenefitBadges>
                            </div>
                        </div>
                        <button className="absolute bottom-1 rounded-full focus:outline-none 
                            text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 
                            font-medium text-sm px-5 py-2.5 mb-2 dark:bg-purple-600
                            dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                            Learn more
                        </button>
                    </a>
                ))
            }
        </>
    )//   bg-white  
}

export default FilteredCardsContainer;