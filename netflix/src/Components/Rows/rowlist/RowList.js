import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Utils/requests'

function RowList() {
    return (
    <>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrginals}
    isLargeRow={true}
    />
    <Row title="Trending Now" fetchUrl ={requests.fetchTrending} />
    <Row title="Action Movies" fetchUrl ={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl ={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl ={requests.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchUrl ={requests.fetchRomanticMovies} /> 
    <Row title="Documentaries Movies" fetchUrl ={requests.fetchDocumentaries} />
    <Row title="Recomendation Movies" fetchUrl={requests.fetchRecomendation} />
    <Row title="Tv Shows" fetchUrl={requests.fetchTvShow}/>
</>
    )
}

export default RowList