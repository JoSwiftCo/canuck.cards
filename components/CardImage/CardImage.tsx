import Image from 'next/image';
import { CardImageProps } from './CardImage.model';

const CardImage = (props: CardImageProps) => {
    const { imageUrl, issuerCode } = props;
    return (
        <Image
            alt={imageUrl}
            className="rounded-lg"
            src={`/api/thumbnails/${issuerCode}/${imageUrl}`}
            width={200}
            height={122}
        />
    )
}

export default CardImage;