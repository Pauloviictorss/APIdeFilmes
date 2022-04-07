import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmY0OWZjNjVkMThmZjA0OTFkNGY2ZmFlN2JlZjQ3YiIsInN1YiI6IjYyNGUyMGI5MjA5ZjE4MDA1MmViN2FiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EMCE-mJIhVsj_e9yFTxKr-ZyV9UFOgBhxy9P5F6UncY',
        'content-type':'application/json;charset=utf-8',
    } //só quando necessita de uma api key
})

export default apiFilmes 