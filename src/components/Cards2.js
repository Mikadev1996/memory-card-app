import React, {useState} from 'react';

const Cards2 = () => {
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

    const shuffleArray = (array) => {
        const tempArr = array;
        let shuffled = tempArr
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

        return shuffled;
    }

    const randomize = () => {
        setCards(shuffleArray(cards));
    }

    return (
        <div id="container">
            <div id="card-container">
                <div id="1"></div>
                <div id="2"></div>
                <div id="3"></div>
                <div id="4"></div>
                <div id="5"></div>
                <div id="6"></div>
                <div id="7"></div>
                <div id="8"></div>
            </div>
            <button onClick={this.randomize}>Randomize</button>
        </div>
    );
}

