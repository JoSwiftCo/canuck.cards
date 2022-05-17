import { Card } from "../../references/Cards/card.model";
import CardImage from "../CardImage/CardImage";

const FilteredCardsContainer = ({filteredCards}) => {
    return (
        <>
            {
                filteredCards.map((card:Card) => (
                    <a href="#" key={card.codeName} 
                        className="px-3 py-3 my-5 ml-auto mr-auto flex flex-col items-center bg-white rounded-lg border-2 md:flex-row md:max-w-xl">
                        <CardImage
                            imageUrl={card.codeName}
                            issuerCode={card.issuer}
                        ></CardImage>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl tracking-tight text-gray-900">{card.displayName}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                        </div>
                    </a>
                ))
            }
        </>
    )
}

export default FilteredCardsContainer;