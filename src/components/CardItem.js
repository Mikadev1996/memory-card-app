import React from "react";

function CardItem(props) {
    return (
        <div data-name={props.name} onClick={props.handleClick} className="card" id={`card-${props.id}`}>
            <Image imageURL={props.url}/>
        </div>
    );
}

function Image({imageURL}) {
    return (
        <img className="card-image" src={imageURL} alt=""/>
    )

}

export default CardItem;