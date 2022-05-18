import Image from 'next/image';

export interface CardImageProps {
    imageUrl: string
}

const CardImage = ( { imageUrl }: CardImageProps) => {
    return (
        <Image
            alt={imageUrl}
            className="rounded-lg"
            src={`/api/thumbnail/${imageUrl}`}
            width={200}
            height={122}
        />
    )
}

export default CardImage;