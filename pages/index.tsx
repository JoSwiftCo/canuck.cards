import styles from '../styles/Home.module.css'
import path from "path";
import fs from "fs";

const Home = ({ data }) => {
  console.log(data);
  return (
    <div></div>
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
