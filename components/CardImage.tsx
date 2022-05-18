import Image from 'next/image';
import { IssueCodeName } from '../classes/issuer.model';

export interface CardImageProps {
    imageUrl: string,
    issuerCode: IssueCodeName
}

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