import './style.css';
function Product ({Name,Price}){
    return (
        <div className="main">
            <div className="con">
            <h1>{Name}</h1>
            <p>Price is :{Price}</p>
        </div>
        </div>
    );
}

export default Product;