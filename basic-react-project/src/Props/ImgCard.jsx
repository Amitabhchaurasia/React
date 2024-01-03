import './ImgCard.css'

function ImgCard({src}){
    return(
        <div className="imgCont">
            <img src={src} />
        </div>
    );
}

export default ImgCard;