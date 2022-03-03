import { Tokenstack } from "./index.js";
import 'dotenv/config';

const name = "tokenstack SDK NFT"
const description = "SDK Testing"
const attributes = [{
    "trait-type": "Animal",
    "value": "Cat"
}]
const externalUrl = "https://en.wikipedia.org/wiki/Space_Chickens_in_Space"
// const fileData = fs.readFileSync('./image-2.jpg', { encoding: 'base64' });
const fileData = "aGVsbG8gd29ybGQ="
const privateKey = process.env.TEST_PRIVATE_KEY;
const publicKey = process.env.TEST_PUBLIC_KEY;
const tokenstack = await new Tokenstack(process.env.TEST_API_KEY, process.env.TEST_PROJECT_ID);
console.log(tokenstack.nft);
const nftTesting = await tokenstack.nft.mintNFT(name, description, attributes, externalUrl, fileData, privateKey, publicKey);

console.log(nftTesting)