import React from "react";
import {Card} from "../components/Card";
import "../styles/components/Card.css"

const Home = () => {
    return (<>
        <div className="container">
            <section className={"intro"}>
                <div className="search__info">
                    <h1>Rent a <span className={"notice"}>Place</span> away from <span
                        className={"notice"}>Home</span> in the <span className={"notice"}>Metaverse</span>
                    </h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn
                        your imagination to reality at your comfort zone</p>

                    <div id={"search"}>
                        <input type="text" name={"search"}/>
                        <input type={"button"} value={"Search"}/>
                    </div>
                </div>
                <div className="intro__images">
                    <img src={require("../assets/intro_Images/Group 4028.jpg")} alt=""/>
                </div>
            </section>
            <div className={"divider"}>
                <div>
                    <img src={require("../assets/logo/Group 59536mbtoken.png")} alt=""/>
                    <span id={"mbtoken"}>MBToken</span>
                </div>
                <div>
                    <img src={require("../assets/logo/Group 4038metamask.png")} alt=""/>
                    <span id={"metamask"}>METAMASK</span>
                </div>
                <div>
                    <img src={require("../assets/logo/logoopensea.png")} alt=""/>
                    <span id={"opensea"}>OpenSea</span>
                </div>
            </div>

            <section>
                <h1>Inspiration for your next adventure</h1>


                <div className={"card__flex"}>
                    <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                          imgUrl={require("../assets/nfts/Frame 151nft.jpg")}/>
                    <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                          imgUrl={require("../assets/nfts/Frame 151nft7.jpg")}/>
                    <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                          imgUrl={require("../assets/nfts/Frame 151nft-1.jpg")}/>
                    <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                          imgUrl={require("../assets/nfts/Frame 151nft-2.jpg")}/>
                    <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                          imgUrl={require("../assets/nfts/Frame 151nft-3.jpg")}/>
                    <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                          imgUrl={require("../assets/nfts/Frame 151nft-4.jpg")}/>
                    <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                          imgUrl={require("../assets/nfts/Frame 151nft-5.jpg")}/>
                    <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                          imgUrl={require("../assets/nfts/Frame 151nft-6.jpg")}/>
                </div>
            </section>

            <section className={"learn__more"}>
                <div>

                    <h1>
                        Metabnb NFTs
                    </h1>
                    <p>
                        Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded
                        as
                        NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                    </p>
                    <a href={'#'} id={"learn__more__btn"}>
                        Learn More
                    </a>
                </div>
                <img src={require("../assets/intro_Images/Frame 59546learnmore.jpg")} alt="nft"/>

            </section>
        </div>
    </>);
}

export default Home;