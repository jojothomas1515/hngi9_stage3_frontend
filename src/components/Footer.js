import {FooterLogoSvg} from "./logosvg";

export const Footer = () => {
    return (
        <footer>
            <div className="mfoot_flex">
                <FooterLogoSvg/>

                <div className={"socials"}>
                    <a href={"#"}><img
                        src={require("../assets/intro_Images/social_icons/facebook-263-721950.png")}/></a>
                    <a href={"#"}><img src={require("../assets/intro_Images/social_icons/twitter-241-721979.png")}/></a>
                    <a href={"#"}><img
                        src={require("../assets/intro_Images/social_icons/instagram-216-721958.png")}/></a>
                </div>
            </div>
            <div className={"foot_flex"}>
                <div className="foot__flex">
                    <h4>Community</h4>
                    <a href={"#"}>NFT</a>
                    <a href={"#"}>Tokens</a>
                    <a href={"#"}>Landlords</a>
                    <a href={"#"}>Discord</a>
                </div>
                <div className="foot__flex">
                    <h4>Places</h4>
                    <a href={"#"}>Castle</a>
                    <a href={"#"}>Farms</a>
                    <a href={"#"}>Beach</a>
                    <a href={"#"}>Learn More</a>
                </div>
                <div className="foot__flex">
                    <h4>About Us</h4>
                    <a href={"#"}>Road map</a>
                    <a href={"#"}>Creators</a>
                    <a href={"#"}>Career</a>
                    <a href={"#"}>Contact us</a>
                </div>

            </div>
            <p> &copy; 2022 Metabnb</p>

        </footer>
    );
}