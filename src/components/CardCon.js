import "../styles/components/Cardcon.css"

export function Cardcon({children}) {
    return (
        <div className={"card__flex"}>
            {children}
        </div>
    );
}