export const Card = ({imgUrl, name, price, distance, availability}) => {
    return (
        <div className={"card"}>
            <img className={"nft__image"} src={imgUrl} alt={name}/>
            <div>
                <span>{name}</span>
                <span>{price}MBT per night</span>
            </div>
            <br/>
            <div>
                <span>{distance}km away</span>
                <span>available for {availability} stay</span>
            </div>
            <br/>
            <div className={"rating"}>
                <img src={require("../assets/others/Frame 59528.png")} alt="stars"/>
            </div>
        </div>
    );
}
