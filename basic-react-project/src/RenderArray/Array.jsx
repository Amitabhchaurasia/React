

function Array({arr}) {
    return (
        <>
            <p>{
                arr.map((arr) => (
                    <li>{arr}</li>
                ))
            }</p>
        </>
    );
}

export default Array;