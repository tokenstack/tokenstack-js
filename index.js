import { ethers } from "ethers";

class Tokenstack {
    constructor(a, b) {
        if (typeof (a) === "string") {
            const userWallet = new ethers.Wallet(
                a,
                ethers.getDefaultProvider(b)
            )
            this.wallet = userWallet;
            this.address = userWallet.address;
        }
        else {
            const wallet = a;
            this.wallet = wallet;
            this.address = wallet.address;
        }
    }

}