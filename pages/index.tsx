import path from "path";
import fs from "fs";
import { createContext, useState } from 'react';
import { Card } from '../references/cards/card.model';
import Header from '../components/Header/Header';
import SearchSection from '../components/SearchSection/SearchSection';
import SearchSectionFilterContextProvider from '../components/SearchSection/SearchSectionFilterContext';

export const AllCardsContext = createContext([]);

const Home = ({ data, imageUrls }) => {
  const [allCards] = useState<Card[]>(data);
  if (imageUrls.length) {
    for (let i = 0; i < imageUrls.length; i++)
      fetch(imageUrls[i]);
  }
  return (
    <AllCardsContext.Provider value={allCards}>
      <Header></Header>
      <SearchSectionFilterContextProvider>
        <SearchSection></SearchSection>
      </SearchSectionFilterContextProvider>
      <div>
      </div>
    </AllCardsContext.Provider>
  );
}

const getStaticProps = async () => {
  const basePath: string = '../../../public/thumbnails';
  const parentDirectory: string = path.join(__dirname, basePath);
  const issuerFolderNames: string[] = fs.readdirSync(parentDirectory);
  let allCardsMetadata: string[] = [];
  let imageUrls:string[] = [];
  issuerFolderNames.forEach(issuerName => {
    const issuerDirectory: string = `${parentDirectory}/${issuerName}`;
    const cardFolderNames: string[] = fs.readdirSync(issuerDirectory);
    cardFolderNames.forEach((cardName: string) => {
      const cardJsonDirectory: string = `${issuerDirectory}/${cardName}`;
      const cardFolderFiles: string[] = fs.readdirSync(cardJsonDirectory);
      const imageFileName:string = cardFolderFiles.find(name => name.endsWith('.webp'));
      if (imageFileName && !imageUrls.includes(imageFileName)) imageUrls.push(`/api/thumbnails/${issuerName}/${cardName}`);
      const jsonFileName: string = cardFolderFiles.find(name => name.endsWith('.json'));
      if (!jsonFileName) return;
      const jsonFullPath: string = `${cardJsonDirectory}/${jsonFileName}`;
      const fileContents = fs.readFileSync(jsonFullPath, 'utf8');
      const jsonData = JSON.parse(fileContents);
      allCardsMetadata.push(jsonData);
    });
  });
  return { props: { data: allCardsMetadata, imageUrls: imageUrls } };
}

export { getStaticProps }

export default Home;
