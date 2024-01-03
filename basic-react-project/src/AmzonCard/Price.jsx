import "./Price.css";
export default function Price({ oldPrice, newPrice }) {
    return (
        <div className="price">
            Price : <span id="old">{oldPrice}
            </span> &nbsp;
            
            <span id="new">{newPrice}</span>

        </div>
    );
}