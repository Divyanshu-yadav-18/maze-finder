import { Children, createContext, ReactNode, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/type";

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
    const [grid,setGrid] = useState<GridType>([]);
}