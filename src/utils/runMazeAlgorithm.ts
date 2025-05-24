import { binaryTree } from "../lib/algorithms/maze/binaryTree";
import recursiveDivision from "../lib/algorithms/maze/recursiveDevision";
import { MAX_COLS, MAX_ROWS, SPEEDS } from "./constant";
import { constructBorders } from "./constructBorders";
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
    }else if(maze == "RECURSIVE_DIVISION"){
        const currentSpeed = SPEEDS.find((s)=>s.value === speed)!.value ?? 2
        await constructBorders(grid, startTile, endTile)
        await recursiveDivision({
            grid,
            startTile,
            endTile,
            row:1,
            col:1,
            height: Math.floor((MAX_ROWS -1)/2),
            width: Math.floor((MAX_COLS -1)/2),
            setIsDisabled,
            speed,
        })
        setTimeout(()=> {
            setIsDisabled(false);
        }, 800* currentSpeed);
    }
};