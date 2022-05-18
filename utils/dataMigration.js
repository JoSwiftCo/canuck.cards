import path from 'path';
import fs from "fs";

const DATABASE_FOLDER = path.join(process.cwd(), 'databases');

const getFolderNameFromFileType = fileType => fileType === 'json' ? 'jsons' : 'thumbnails';

const getTargetFolder = (folderName) => {
    return path.join(process.cwd(), `public/${folderName}`);
}

const checkFileNames = (fileNames, folderPath) => {
    fileNames = fileNames.map(name => name.split('.')[0]);
    if (fileNames[0] !== fileNames[1]) {
        console.error('ERROR: Found invalid file names at: ', folderPath);
        return false;
    }
    return true;
}

const validateJsonContent = (jsonObj) => {
    return true;
}

/**
 * Note: This file should never be included in the build | Meant to be used separately
 * Run this scripts whenever a new issuer/card 's information need to be updated to the server:
 * >>> node <path>/dataMigration.js
 * Then make a build:
 * >>> npm run build
 * Then deploy
 * 
 * Strategy: Scan every folder inside /databases.
 *  Get all the json files inside /database/${subFolderName} and put them in /public/jsons
 *  Get all the thumbnails inside /database/${subFolderName} and put them in /public/thumbnails
 * 
 */

const issuerFolderNames = fs.readdirSync(DATABASE_FOLDER);
issuerFolderNames.forEach(issuerName => {
    const cardFolderNames = fs.readdirSync(path.join(DATABASE_FOLDER, issuerName));
    cardFolderNames.forEach(codeName => {
        const folderPath = path.join(DATABASE_FOLDER, `${issuerName}/${codeName}`);
        const fileNames = fs.readdirSync(folderPath);
        if (!checkFileNames(fileNames, folderPath)) return;

        fileNames.forEach(fileName => {
            const fileType = fileName.split('.')[1];
            const filePath = path.join(DATABASE_FOLDER, `${issuerName}/${codeName}/${fileName}`);
            console.log(filePath)
            if (fileType === 'json') {
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const jsonData = JSON.parse(fileContents);
                if (!validateJsonContent(jsonData)) return;
            }
            const dest = getTargetFolder(getFolderNameFromFileType(fileType));
            const destTest = path.join(process.cwd(), 'test');
            fs.copyFile(filePath, destTest, (err) => {
                console.error('Error: ', err);
            });
        });
    });
});