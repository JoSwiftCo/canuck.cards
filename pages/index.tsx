import path from "path";
import fs from "fs";
import { createContext, useState } from 'react';
import { Card } from '../classes/card.model';
import Header from '../components/Header/Header';
import SearchSection from '../components/SearchSection/SearchSection';
import SearchSectionFilterContextProvider from '../components/SearchSection/SearchSectionFilterContext';

export const AllCardsContext = createContext([]);

const Home = ({ data }) => {
  const [allCards] = useState<Card[]>(data);
  return (
    <AllCardsContext.Provider value={allCards}>
      {/* <Header></Header> */}
      <SearchSectionFilterContextProvider>
        <SearchSection></SearchSection>
      </SearchSectionFilterContextProvider>
      <div>
      </div>
    </AllCardsContext.Provider>
  );
}

const getStaticProps = async () => {
  const jsonFolderPath:string = path.join(process.cwd(), 'public/jsons');
  const jsonFileNames:string[] = fs.readdirSync(jsonFolderPath);
  const allJsonContent:any[] = jsonFileNames.map(name => {
    const jsonFullPath:string = path.join(process.cwd(), `public/jsons/${name}`);
    const jsonContent:string = fs.readFileSync(jsonFullPath, 'utf8');
    const jsonData:any = JSON.parse(jsonContent);
    return jsonData;
  });
  return { props: { data: allJsonContent } };
}

export { getStaticProps }

export default Home;
