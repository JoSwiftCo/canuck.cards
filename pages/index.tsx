import styles from '../styles/Home.module.css'
import path from "path";
import fs from "fs";
import { createContext, useState } from 'react';
import { Card } from '../references/Cards/card.model';
import Header from '../components/Header/Header';
import { SearchContextProvider } from '../components/SearchContext/SearchContext';
import SearchSection from '../components/SearchSection/SearchSection';

const AllCardsContext = createContext([]);

const Home = ({ data }) => {
  console.log(data);
  const [allCards] = useState<Array<Card>>(data);
  return (
    <AllCardsContext.Provider value={allCards}>
      <Header></Header>
      <SearchContextProvider>
        <SearchSection></SearchSection>
        <div>
        </div>
      </SearchContextProvider>

    </AllCardsContext.Provider>
  );
}

const getStaticProps = async () => {
  const basePath: string = '../../../public/thumbnails';
  const parentDirectory: string = path.join(__dirname, basePath);
  const issuerFolderNames: string[] = fs.readdirSync(parentDirectory);
  let allCardsMetadata: string[] = [];

  issuerFolderNames.forEach(issuerName => {
    const issuerDirectory: string = `${parentDirectory}/${issuerName}`;
    const cardFolderNames: string[] = fs.readdirSync(issuerDirectory);
    cardFolderNames.forEach((cardName: string) => {
      const cardJsonDirectory: string = `${issuerDirectory}/${cardName}`;
      const cardFolderFiles: string[] = fs.readdirSync(cardJsonDirectory);
      const jsonFileName: string = cardFolderFiles.find(name => name.endsWith('.json'));
      if (!jsonFileName) return;
      const jsonFullPath: string = `${cardJsonDirectory}/${jsonFileName}`;
      const fileContents = fs.readFileSync(jsonFullPath, 'utf8');
      const jsonData = JSON.parse(fileContents);
      allCardsMetadata.push(jsonData);
    });
  });
  return { props: { data: allCardsMetadata } };
}

export { getStaticProps }

export default Home;
