require('dotenv').config();

// const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=XzgW9znTnJorYyKnPIB7XHsLUTeQUSZz&q=llama&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
// const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;


async function getImage(query){
    try{
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=XzgW9znTnJorYyKnPIB7XHsLUTeQUSZz&q=${query}&limit=25&offset=0&rating=g&lang=en`
    const response = await fetch(endpoint);
    const data = await response.json();
    // return data

    let gifLink = data.url[0]
    return gifLink

}
    catch (error){
        console.error("Failed to get image", error)
    }
}

getImage('llama').then(data => console.log(data));

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)