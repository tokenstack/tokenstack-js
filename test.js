import { Tokenstack } from "./index.js";


const name = "tokenstack SDK NFT"
const description = "SDK Testing"
const attributes = [{
    "trait-type": "Animal",
    "value": "Cat"
}]
const externalUrl = "https://en.wikipedia.org/wiki/Space_Chickens_in_Space"
// const fileData = fs.readFileSync('./image-2.jpg', { encoding: 'base64' });
const fileData = "aGVsbG8gd29ybGQ="
const privateKey = ""
const publicKey = ""
const tokenstack = await new Tokenstack("187d9041-7380-443f-9384-37deb2c34914", "25qAHFNHzdvt4hjGwRC1");
console.log(tokenstack.nft);
const nftTesting = await tokenstack.nft.mintNFT(name, description, attributes, externalUrl, fileData, privateKey, publicKey);

console.log(nftTesting)