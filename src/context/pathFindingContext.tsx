import { createContext, ReactNode, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/type";
import { createGrid } from "../utils/helper";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constant";

interface PathFindingContextInterface {
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;
    maze: MazeType;
    setMaze:(maze: MazeType) => void;
    grid: GridType;
    setGrid:(grid: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathFindingContext = createContext<PathFindingContextInterface | undefined>(undefined);

export const PathFindingProvider = ({children}:{children:ReactNode})=>{
    const [algorithm,setAlgorithm] = useState<AlgorithmType>("BFS");
    const [maze,setMaze] = useState<MazeType>("NONE");
    const [grid,setGrid] = useState<GridType>(createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION));
    const [isGraphVisualized, setIsGraphVisualized] = useState<boolean> (false);

    return (
        <PathFindingContext.Provider
            value={{
                algorithm,
                setAlgorithm,
                maze,
                setMaze,
                grid,
                setGrid,isGraphVisualized,
                setIsGraphVisualized,
            }}
        >{children}</PathFindingContext.Provider>
    )
}