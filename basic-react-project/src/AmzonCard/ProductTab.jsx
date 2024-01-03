import Product from "./Product"
function ProductTab() {
   let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        
    };
    return (
        <div style={styles}>
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple Pencil (2nd Gen)" idx={1} />
            <Product title="Zebronices Zeb-transformer" idx={2} />
            <Product title="Petronices Toad 23" idx={3} />
        </div>
    )
}

export default ProductTab;