import { useContext } from "react"
import { TileContext } from "../context/tileContext"

export const useTile = ()=>{
    const context = useContext(TileContext);

    if(!context){
        throw Error("useTile must be used within TileProvider")
    }
    return context;
}