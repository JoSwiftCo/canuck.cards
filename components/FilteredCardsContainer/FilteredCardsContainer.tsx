import { Card } from "../../references/Cards/card.model";
import CardImage from "../CardImage/CardImage";

const FilteredCardsContainer = ({ filteredCards }) => {
    return (
        <>
            {
                filteredCards.map((card: Card) => (
                    <a href="#" key={card.codeName}
                        className="px-3 py-3 my-2 mx-2 flex flex-col items-center border-2 lg:max-w-[47%] md:max-w-[47%] sm:max-w-lg">
                        <CardImage
                            imageUrl={card.codeName}
                            issuerCode={card.issuer}
                        ></CardImage>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl tracking-tight text-gray-900 text-center">{card.displayName}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{card.description}</p>
                        </div>
                    </a>
                ))
            }
        </>
    )//   bg-white  
}

export default FilteredCardsContainer;