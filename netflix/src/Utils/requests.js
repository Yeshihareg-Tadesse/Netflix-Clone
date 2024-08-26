const API_KEY = process.env.REACT_APP_API_KEY;;

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&llanguage=en-US,`,
    fetchNetflixOrginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRecomendation:`/movie/550/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTvShow:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    
};  
export default requests;   
