import React, {useEffect, useState} from 'react';

const Card = ({url}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch starships.');
                return res.json();
            })
            .then((data) => {
                setData(data.result.properties);
            }).catch((error) => {
            console.log(error);
        }).finally(() => setLoading(false));
    }, [url])
    if (loading) return <p>Loading...</p>;
    if (!data) return null;

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h5 className="card-title">Назва: {data.name}</h5>
                <p className="card-text">Довжина: {data.length} м</p>
                <p className="card-text">Модель: {data.model}</p>
                <p className="card-text">Макс. швидкість: {data.max_atmosphering_speed}</p>
                <p className="card-text">Клас зорельоту: {data.starship_class}</p>
            </div>
        </div>
    );
}

export default Card;