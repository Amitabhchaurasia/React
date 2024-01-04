import { useState } from "react"

export default function(){
    let [moves , setMoves] = useState({blue:0,green:0,red:0,black:0});
    return(
        <div>
            <h3>Game Beggine</h3>
            <div className="buttoncard">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor : "blue"}} onClick={()=>{
                    setMoves((preMoves)=>{
                        return {...preMoves,blue:preMoves.blue+1};
                    })
                }}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor : "green"}} onClick={()=>{
                    setMoves((preMoves)=>{
                        return {...preMoves,green:preMoves.green+1};
                    })
                }}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor : "red"}} onClick={()=>{
                    setMoves((preMoves)=>{
                        return {...preMoves,red:preMoves.red+1};
                    })
                }}>+1</button>
                <p>Black Moves = {moves.black}</p>
                <button style={{backgroundColor : "black"}} onClick={()=>{
                    setMoves((preMoves)=>{
                        return {...preMoves,black:preMoves.black+1};
                    })
                }}>+1</button>
            </div>
        </div>
    )
}