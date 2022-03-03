import React, {useState} from 'react';
import CardItem from "./CardItem";

const Cards = () => {
    const [cards, setCards] = useState([
        {id: 1, name: "C", imageURL: "someURL"},
        {id: 2, name: "C++", imageURL: "someURL"},
        {id: 3, name: "C#", imageURL: "someURL"},
        {id: 4, name: "Python", imageURL: "someURL"},
        {id: 5, name: "Java", imageURL: "https://banner2.cleanpng.com/20190623/uxe/kisspng-logo-java-development-kit-portable-network-graphic-5d0f25d6871765.6875406615612738145533.jpg"},
        {id: 6, name: "JavaScript", imageURL: "someURL"},
        {id: 7, name: "Swift", imageURL: "someURL"},
        {id: 8, name: "PHP", imageURL: "someURL"},
        {id: 9, name: "GoLang", imageURL: "someURL"},
    ])

    const [winCount, setWinCount] = useState(0);
    const [selectedCards, setSelectedCards] = useState([]);

    const shuffleArray = (array) => {
        return array
            .map(value => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value);
    }

    const randomize = () => {
        setCards(shuffleArray(cards));
    }

    const updateGameState = (e) => {g
        setSelectedCards(array => [...array, e.target.dataset.name]);
        let repeated = selectedCards.some((item) => {
            return item === e.target.dataset.name;
        })
        if (!repeated) {
            setWinCount(winCount + 1);
        } else {
            setWinCount(0);
        }
    }

    const handleCardClick = (e) => {
        randomize();
        updateGameState(e);
    }

    return (
        <div id="container">
            <div id="card-container">
                <div id="score-container"><p>Score: {winCount}</p></div>
                {cards.map((data) => {
                    return (
                            <CardItem handleClick={handleCardClick} name={data.name} key={data.id} id={data.id} url={data.imageURL}/>
                    )
                })}
            </div>
        </div>
    );
}


export default Cards;