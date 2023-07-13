import { useEffect } from "react";
import {useParams} from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
        ).json();
        console.log(json)
       };
    useEffect(() => {
        getMovie();
    }, [])

    return <h1>Detail</h1>
}

export default Detail;

//json을 state에 넣어서 사용하기
//loading 추가하기

//gh-pages : 번들링 패키지