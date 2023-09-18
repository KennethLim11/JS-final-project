/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftCollection = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, type, health, speed, damage) {
    const nft = {
        "name" : name,
        "type" : type,
        "health" : health,
        "speed" : speed,
        "damage" : damage
    };
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("name: ", nftCollection[i].name);
        console.log("type: ", nftCollection[i].type);
        console.log("health: ", nftCollection[i].health);
        console.log("speed: ", nftCollection[i].speed);
        console.log("damage: ", nftCollection[i].damage, "\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return console.log("Total number of NFTs: ", nftCollection.length);
}

// call your functions below this line
mintNFT("Pumpkin", "plant", 60, 31, 45);
mintNFT("Lizzy", "reptile", 55, 36, 48);
mintNFT("Robin", "bird", 40, 60, 55);
listNFTs();
getTotalSupply();
