import {  createContext, ReactNode, useState } from "react";
import { TileType } from "../utils/type";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constant";

interface TileContextInterface{
    startTile: TileType;
    setStartTile: (startTile: TileType) => void;
    endTile: TileType;
    setEndTile: (endTile: TileType)=> void;
}

export const TileContext = createContext<TileContextInterface | undefined>(undefined);

export const TileProvider = ({children}: {children :ReactNode})=> {
    const [startTile, setStartTile] =useState<TileType> (START_TILE_CONFIGURATION);
    const [endTile, setEndTile] = useState<TileType> (END_TILE_CONFIGURATION);

    return (
        <TileContext.Provider
            value={{
                startTile,
                setStartTile,
                endTile,
                setEndTile,
            }}
            >
                {children}
        </TileContext.Provider>
    );
}