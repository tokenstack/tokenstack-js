import NFTModule from './NFTModule.js';
import axios from 'axios';
const TOKENSTACK_API_URL = "https://us-central1-tokenstack-dev.cloudfunctions.net/api/"

export function hello(someString) {
    console.log(someString);
}


async function getAccessToken(sampleApiKey) {

    const accessToken = await axios({
        method: 'post',
        url: TOKENSTACK_API_URL + "authenticate",
        data: {
            apiKey: sampleApiKey,
        }
    }).then((response) => response.data)
        .catch(() => {
            return null;
        })
    return accessToken ? accessToken.accessToken : null
}

export class Tokenstack {
    constructor(apiKey, projectId) {
        return (async () => {

            this.apiKey = apiKey;
            this.projectId = projectId;
            this.accessToken = await getAccessToken(apiKey);
            this.nft = new NFTModule(this.accessToken, projectId);

            return this;
        })();
    }

    async init() {

    }

}


