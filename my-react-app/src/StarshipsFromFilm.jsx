import React, {useEffect, useState} from "react";
import Card from "./Card.jsx";

const StarshipsFromFilm = () => {
    const [starshipsUrls, setStarshipsUrls] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://www.swapi.tech/api/films/1')
            .then(res => res.json())
            .then(data => {
                setStarshipsUrls(data.result.properties.starships)
                setTitle(data.result.properties.title)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return <p>Loading...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h1 className="card-title">Назва: {title}</h1>

            {starshipsUrls.map(url => (
                <Card key={url} url={url}/>
            ))}
        </div>
    );
}
export default StarshipsFromFilm;