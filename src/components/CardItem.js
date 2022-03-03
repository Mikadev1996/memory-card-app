import React from "react";

function CardItem(props) {
    return (
        <div data-name={props.name} onClick={props.handleClick} className="card" id={`card-${props.id}`}>
            <Image name={props.name} imageURL={props.url}/>
        </div>
    );
}

function Image(props) {
    return (
        <div>
            <img data-name={props.name} className="card-image" src={props.imageURL} alt=""/>
            <p>{props.name}</p>
        </div>
    )

}

export default CardItem;