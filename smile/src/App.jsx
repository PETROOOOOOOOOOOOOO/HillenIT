import {useEffect, useState} from "react";

const emojis = ["😊", "😢", "😡"];

export default function App() {
    const [votes, setVotes] = useState(() => {
        const saved = localStorage.getItem("emojiVotes");
        return saved ? JSON.parse(saved) : emojis.reduce((acc, e) => ({...acc, [e]: 0}), {});
    });

    const [winner, setWinner] = useState(null);

    useEffect(() => {
        localStorage.setItem("emojiVotes", JSON.stringify(votes));
    }, [votes]);

    const handleVote = (emoji) => {
        setVotes((prev) => ({
            ...prev,
            [emoji]: prev[emoji] + 1,
        }));
    };

    const handleShowResults = () => {
        const maxVotes = Math.max(...Object.values(votes));
        const winners = Object.entries(votes)
            .filter(([_, count]) => count === maxVotes)
            .map(([emoji]) => emoji);

        setWinner(winners.length > 1 ? `Нічия: ${winners.join(" ")}` : `Переможець: ${winners[0]}`);
    };

    const handleClear = () => {
        const resetVotes = emojis.reduce((acc, e) => ({...acc, [e]: 0}), {});
        setVotes(resetVotes);
        localStorage.removeItem("emojiVotes");
        setWinner(null);
    };

    return (
        <div style={{textAlign: "center", fontSize: "2rem", marginTop: "2rem"}}>
            <h1>Голосування за смайлик</h1>
            {emojis.map((emoji) => (
                <div key={emoji} style={{margin: "10px"}}>
                    <button onClick={() => handleVote(emoji)} style={{fontSize: "2rem", marginRight: "1rem"}}>
                        {emoji}
                    </button>
                    Голосів: {votes[emoji]}
                </div>
            ))}

            <div style={{marginTop: "2rem"}}>
                <button onClick={handleShowResults} style={{marginRight: "1rem"}}>
                    Show Results
                </button>
                <button onClick={handleClear}>Очистити результати</button>
            </div>

            {winner && <h2 style={{marginTop: "2rem"}}>{winner}</h2>}
        </div>
    );
}
