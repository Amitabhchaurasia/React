function index({userName,txtColor}){
    let styles={color: txtColor};
    return(
        <>
        <h1 style={styles}>Hii , {userName}</h1>
        </>
    );
}

export default index;