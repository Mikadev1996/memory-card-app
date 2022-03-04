import React, {useState} from 'react';
import CardItem from "./CardItem";

const Cards = () => {
    const [cards, setCards] = useState([
        {id: 1, name: "C", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/1280px-The_C_Programming_Language_logo.svg.png"},
        {id: 2, name: "C++", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1280px-ISO_C%2B%2B_Logo.svg.png"},
        {id: 3, name: "C#", imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg"},
        {id: 4, name: "Python", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png"},
        {id: 5, name: "Java", imageURL: "https://banner2.cleanpng.com/20190623/uxe/kisspng-logo-java-development-kit-portable-network-graphic-5d0f25d6871765.6875406615612738145533.jpg"},
        {id: 6, name: "JavaScript", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"},
        {id: 7, name: "Swift", imageURL: "https://developer.apple.com/swift/images/swift-og.png"},
        {id: 8, name: "PHP", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"},
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

    const updateGameState = (e) => {
        let repeated = selectedCards.some((item) => {
            return item === e.target.dataset.name;
        })
        if (!repeated) {
            setSelectedCards(array => [...array, e.target.dataset.name]);
            setWinCount(winCount + 1);
            if (winCount === 7) {
                window.alert("Congratulations you won!")

            }
            randomize();
        } else {
            setWinCount(0);
            setSelectedCards([]);
        }
    }


    const handleCardClick = (e) => {
        console.log(e.target.dataset, e.target.dataset.name, selectedCards);

        updateGameState(e);
    }

    return (
        <div id="container">
            <div id="score-container"><p>Score: {winCount}</p></div>
            <div id="card-container">

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