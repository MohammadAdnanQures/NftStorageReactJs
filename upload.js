// import { NFTStorage, File } from "nft.storage";
// import { getFilesFromPath } from "files-from-path";
const { NFTStorage, File } = require("nft.storage");
const { getFilesFromPath } = require("files-from-path");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEVBM0Q1ZDUxZURCODJFMUY0NDk2NTc2YTc0YmQ3NjkyODQwODhGMDciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MDk2MDkxNDkwMCwibmFtZSI6InRlc3QifQ.8p-ikCWkKWIwxppkZPSKRQ5qwd2cfCmJUlrxlpFDVDw";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU1OTUzODljODNDYjZEMzRCNzMyMUVDNTAzYjgzNzMxZjNGYTcyMUEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MDg3MDA2ODQ2MCwibmFtZSI6IkFmbG9hdEVuZHBvaW50In0.RH0DQ08fJNOhGoHhKfD5obFOXBm3z1otAdtWK5-4cuI";
async function main() {
  const path = "/Users/adnanqureshi/Desktop/PracticeCoyo/nftStorage/imgs";
  const files = await getFilesFromPath(
    "/Users/adnanqureshi/Desktop/PracticeCoyo/nftStorage/imgs"
  );

  const storage = new NFTStorage({ token });

  console.log(`storing ${files.length} file(s) from ${path}`);
  const cid = await storage.storeDirectory(files, {
    pathPrefix: path, // see the note about pathPrefix below
    hidden: true, // use the default of false if you want to ignore files that start with '.'
  });
  console.log({ cid });

  const status = await storage.status(cid);
  console.log(status);
}
main();
