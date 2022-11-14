import React from "react";
import "../styles/pages/Places.css"
import {Cardcon} from "../components/CardCon";
import {Card} from "../components/Card";

export const Places = () => {
    return (
        <>
            <div className="container">
                <div className={"filter"}>
                    <a href={"#"}>Restaurant</a>
                    <a href={"#"}>Cottage</a>
                    <a href={"#"}>Castle</a>
                    <a href={"#"}>Fantasy City</a>
                    <a href={"#"}>Beach</a>
                    <a href={"#"}>Cabins</a>
                    <a href={"#"}>Off-grids</a>
                    <a href={"#"}>Farm</a>

                    <a href={"#"} id={"location__filter"}>Location <img
                        src={require('../assets/others/setting-5@3x.png')} alt=""/></a>
                </div>
                <section>
                    <Cardcon>
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
                    </Cardcon>
                </section>
            </div>
        </>
    );
}