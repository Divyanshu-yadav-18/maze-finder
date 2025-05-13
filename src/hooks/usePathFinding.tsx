import { useContext } from "react"
import { PathFindingContext } from "../context/pathFindingContext"

export const usePathFinding = () =>{
    const context = useContext(PathFindingContext);

    if(!context){
        throw new Error("usePathfinding must be used within a PathfindingProvider");
    }
    return context;
}