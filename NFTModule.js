
const TOKENSTACK_API_URL = "https://us-central1-tokenstack-dev.cloudfunctions.net/api/"
import axios from 'axios';

export default class NFTModule {

    constructor(accessToken, projectId) {
        if (!accessToken || !projectId) {
            throw new Error("API Key or Project Id is Invalid")
        }
        this.accessToken = accessToken;
        this.projectId = projectId;
    }

    async mintNFT(fileData, privateKey, publicKey, name = "", description = "", attributes = [], externalUrl = "") {
        if (!fileData || !privateKey || !publicKey) {
            throw new Error("Invalid arguments passed into function")
        }

        const nftData = {
            accessToken: this.accessToken,
            projectId: this.projectId,
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
