require('dotenv').config();

// const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`


// async function getImage(query){
    
//     // const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
//     const response = await fetch(endpoint + "&q=" + query);
//     const data = await response.json();
//     if (data.data.length > 0){
//     const gifUrl = data.data[0].url
//     console.log( "Gif Url:", gifUrl );
//     return gifUrl;}

async function getImage(query, random = false) {
    try {
      const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
      const response = await fetch(endpoint);
      const data = await response.json();
  
      let gifUrl;
      if (random) {
        const randomIndex = Math.floor(Math.random() * 25);
        gifUrl = data.data[randomIndex].images.original.url;
      } else {
        const gifUrls = data.data.map((gif) => gif.images.original.url);
        return gifUrls;
      }
  
      console.log(gifUrl);
      return gifUrl;
    } catch (error) {
      console.error('Error fetching gif:', error);
      throw error;
    }
  }
  
  getImage('cats', true);
  getImage('cats');

    // return data

    // let gifLink = data.url[0]
    // return gifLink


    // catch (error){
    //     console.error("Failed to get image", error)
    // }
}


// .then(data => console.log(data));

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)