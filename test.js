import { Tokenstack } from "./index.js";
import 'dotenv/config';
import * as fs from 'fs';

const fileData = fs.readFileSync('./image.jpg', 'base64');; // Base64 Encoded Image
const tokenstack = await new Tokenstack(process.env.TOKENSTACK_API_KEY, process.env.TOKENSTACK_PROJECT_ID);
const nftTesting = await tokenstack.nft.mintNFT(fileData, process.env.TEST_PRIVATE_KEY, process.env.TEST_PUBLIC_KEY);

console.log(nftTesting);