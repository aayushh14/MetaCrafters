// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, year, description, price) {
    let nft = {
        name: name,
        artist: artist,
        year: year,
        description: description,
        price: price
    };
    nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("Name: " + nftCollection[i].name);
        console.log("Artist: " + nftCollection[i].artist);
        console.log("Year: " + nftCollection[i].year);
        console.log("Description: " + nftCollection[i].description);
        console.log("");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line
mintNFT("negroni", "Ayush", 2022, "A beautiful sunset over the ocean.","10$ million");
mintNFT("Mountain where people die", "Boby", 2021, "A majestic mountain range covered in snow.", "12$ million");
mintNFT("jungle jungle", "Chacha", 2023, "A bustling cityscape at night.","12$ million");
mintNFT("gaon dream", "Dadi", 2024, "A surreal digital art piece.","12$ million");

console.log("List of all NFTs:");
listNFTs();

console.log("Total Supply of NFTs:", getTotalSupply());
