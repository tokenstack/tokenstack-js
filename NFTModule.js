
const TOKENSTACK_API_URL = "https://us-central1-tokenstack-dev.cloudfunctions.net/api/"
import axios from 'axios';

export default class NFTModule{

    constructor(accessToken) {
        if (!accessToken){
            throw new Error("API Key is Invalid")
        }
        this.accessToken = accessToken
    }

    async mintNFT(name = "", description = "", attributes = "", externalUrl = "", fileData, privateKey, publicKey) {
        if (!fileData || !privateKey || !publicKey) {
            throw new Error("Invalid arguments passed into function")
        }

        const nftData = {
            accessToken: this.accessToken,
            description: description,
            attributes: attributes,
            externalUrl: externalUrl,
            name: name,
            fileData: fileData,
            privateKey: privateKey,
            publicKey: publicKey
        }
        

        const nft = await axios({
            method: 'post',
            url: TOKENSTACK_API_URL + "v1/nft/mint",
            data: nftData
        }).then((response) => response.data).catch(function (error) {
            if (error.response) {
                console.log(error.response.headers);
            }
        });

        return nft
    }
}
