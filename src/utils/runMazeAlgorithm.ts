import { binaryTree } from "../lib/algorithms/maze/binaryTree";
import { GridType, MazeType, SpeedType, TileType } from "./type";

export const runMazeFunction = async ({
    maze,
    grid,
    startTile,
    endTile,
    setIsDisabled,
    speed,
}:{
    maze: MazeType;
    grid: GridType;
    startTile: TileType;
    endTile:TileType;
    setIsDisabled: (isDisabled:boolean)=>void;
    speed: SpeedType;
})=>{
    if( maze == "BINARY_TREE"){
        await binaryTree(grid, startTile,endTile, setIsDisabled,speed)
    }
}