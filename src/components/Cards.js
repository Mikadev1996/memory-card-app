import React from "react";

class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.Randomize = this.Randomize.bind(this);

        this.state = {
            count: 0,
            cards: [
                {id: 1, name: "C", imageURL: "someURL"},
                {id: 2, name: "C++", imageURL: "someURL"},
                {id: 3, name: "C#", imageURL: "someURL"},
                {id: 4, name: "Python", imageURL: "someURL"},
                {id: 5, name: "Java", imageURL: "https://banner2.cleanpng.com/20190623/uxe/kisspng-logo-java-development-kit-portable-network-graphic-5d0f25d6871765.6875406615612738145533.jpg"},
                {id: 6, name: "JavaScript", imageURL: "someURL"},
                {id: 7, name: "Swift", imageURL: "someURL"},
                {id: 8, name: "PHP", imageURL: "someURL"},
                {id: 9, name: "GoLang", imageURL: "someURL"},
            ]
        }
    }

    Randomize = () => {
        console.log(this.state.cards)
        let testArr = this.state.cards;
        let shuffled = testArr
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        console.log(shuffled)
        // this.setState({cards: shuffled});
        // console.log(this.state.cards);
    }

    render() {
        return (
            <div id="container">
                <div id="card-container">
                    {this.state.cards.map((data) => {
                        return (
                            <CardItem key={data.id} id={getPosition()} url={data.imageURL}/>
                        )
                    })}
                </div>
                <button onClick={this.Randomize}>Randomize</button>
            </div>
        );
    }
}

function CardItem(props) {
    return (
        <div className="card" id={`card-${props.id}`}>
            <Image imageURL={props.url}/>
        </div>
    );
}



function Image({imageURL}) {
    return (
        <img className="card-image" src={imageURL} alt="picture"/>
    )

}



let availablePositions = [];
const getPosition = () => {
    while (true) {
        let randX = Math.floor((Math.random()) * 9) + 1;
        let checkPositions = availablePositions.some((item) => {
            return item === randX;
        })
        if (!checkPositions && randX !== 0) {
            availablePositions.push(randX);
            return randX;
        }
    }
}


export default Cards;