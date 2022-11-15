import React from "react";
import "../styles/pages/Places.css"
import {Cardcon} from "../components/CardCon";
import {Card} from "../components/Card";

export const Places = () => {
    return (
        <>
            <div className="container__places">
                <div className={"filter"}>
                    <label htmlFor={"filters_nav"} id={"filters"}>
                        Filters <img
                        src={require('../assets/others/setting-5@3x.png')} alt=""/>
                    </label>
                    <input type={"checkbox"} style={{display: "none"}} id={"filters_nav"}/>
                    <div className={"filter__links"}>
                        <a href={"#"}>Restaurant</a>
                        <a href={"#"}>Cottage</a>
                        <a href={"#"}>Castle</a>
                        <a href={"#"}>Fantasy City</a>
                        <a href={"#"}>Beach</a>
                        <a href={"#"}>Cabins</a>
                        <a href={"#"}>Off-grids</a>
                        <a href={"#"}>Farm</a>
                    </div>

                    <a href={"#"} id={"location__filter"}>Location <img
                        src={require('../assets/others/setting-5@3x.png')} alt=""/></a>
                </div>
                <section>
                    <Cardcon>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151nft-3.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151nft-4.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151nft-5.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151nft-6.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151nft.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151nft7.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151nft-1.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151nft-2.jpg")}/>
                        {/* duplicate*/}
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151-1.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151-2.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151-3.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151-4.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151-5.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151-6.jpg")}/>
                        <Card name={"Desert king"} availability={"2 weeks"} distance={2345} price={1}
                              imgUrl={require("../assets/nfts/Frame 151-7.jpg")}/>

                    </Cardcon>
                </section>
            </div>
        </>
    );
}