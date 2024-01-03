import "./Product.css";
import Price from "./Price";
export default function Product({ title, idx }) {

    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = ["8,000 DPI","intuitive surface","designed for iPad pro","wireless"];
    return (<>
        <div className="proCont">
            <h4>{title}</h4>
            <br />
            <p>{description[idx]}</p>
            <br />
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    </>);
}