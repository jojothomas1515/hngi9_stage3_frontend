import "../styles/components/WalletsModal.css"

export default function WalletModal({setModal}) {

    function close() {
        setModal(false)
    }

    return (<div className="wallets__modal">
            <h4>Connect Wallet</h4>
            <hr/>
            <svg id={"close__btn"} onClick={close} width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>

            <div className={"modal__body"}>
                <h3>Choose your preferred wallet:</h3>
                <div className={"wallets__list"}>
                    <a href={"#"} className={"wallet__item"}>
                        <div className={"wallet_name_logo"}>
                            <img src={require("../assets/wallet/image 66@2x.png")}
                                 alt=""/> <span>Metamask</span>
                        </div>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z"
                                fill="#959DA6"/>
                        </svg>
                    </a>
                    <a href={"#"} className={"wallet__item"}>
                        <div className={"wallet_name_logo"}>
                            <img src={require("../assets/wallet/image 69@2x.png")}
                                 alt=""/> <span>WalletConnect</span>
                        </div>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z"
                                fill="#959DA6"/>
                        </svg>
                    </a>
                </div>
            </div>

        </div>

    )

}