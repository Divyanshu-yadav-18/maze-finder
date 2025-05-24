import { useState } from "react";
import { usePathFinding } from "../hooks/usePathFinding";
import { useTile } from "../hooks/useTile";
import { MAZES, PATHFINDING_ALGORITHMS } from "../utils/constant";
import { resetGrid } from "../utils/resetGrid";
import { AlgorithmType, MazeType } from "../utils/type";
import { Select } from "./select";
import { runMazeFunction } from "../utils/runMazeAlgorithm";
import { useSpeed } from "../hooks/useSpeed";
import { runPathfindingAlgorithm } from "../utils/runPathfindingAlgorithm";
import { PlayButton } from "./playButton";

export function Nav(){
    const [isDisabled, setIsDisabled] = useState(false)
    const {maze, setMaze, grid, setGrid,isGraphVisualized, setIsGraphVisualized,algorithm, setAlgorithm} = usePathFinding();
    const {startTile, endTile} = useTile();
    const {speed} = useSpeed();

    const handleGenerateMaze = (maze: MazeType)=>{
        if(maze==='NONE'){
            setMaze(maze)
            resetGrid({grid, startTile, endTile})
            return;
        }

        setMaze(maze);
        setIsDisabled(true);
        runMazeFunction({
            maze, grid, startTile, endTile, setIsDisabled, speed
        });
        const newGrid = grid.slice();
        setGrid(newGrid)
        setIsGraphVisualized(false)
    }

    const handleRunVisualizer = ()=>{
        if(isGraphVisualized){
            setIsGraphVisualized(false);
            resetGrid({grid : grid.slice(), startTile, endTile});
            return
        }

        const {traversedTiles, path}=runPathfindingAlgorithm({
            algorithm,
            grid,
            startTile,
            endTile,
        })

        console.log('traversedTile', traversedTiles); 
        console.log('path', path); 
    }
    return(
        <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
            <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
                <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
                    MazeFinder 
                </h1>
                <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
                    <Select 
                        label='Maze'
                        value={maze}
                        options={MAZES}
                        onChange={(e)=>{
                            handleGenerateMaze(e.target.value as MazeType)
                        }}/>
                        <Select
                            label='Graph'
                            value={algorithm}
                            options={PATHFINDING_ALGORITHMS}
                            onChange={(e)=>{
                                setAlgorithm(e.target.value as AlgorithmType)
                            }}
                        />
                        <PlayButton isDisabled={isDisabled}
                        isGraphVisualized = {isGraphVisualized}
                        handleRunVisualizer={handleRunVisualizer} />
                </div>
            </div>
        </div>
    )
}