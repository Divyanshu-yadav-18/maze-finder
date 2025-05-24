import { bfs } from "../lib/algorithms/pathFinding/bfs";
import { dfs } from "../lib/algorithms/pathFinding/dfs";
import {AlgorithmType, GridType, TileType} from "./type"

export const runPathfindingAlgorithm = ({
    algorithm,
    grid,
    startTile,
    endTile,

}:{
    algorithm: AlgorithmType,
    grid: GridType,
    startTile: TileType,
    endTile: TileType;
})=>{
    switch (algorithm){
        case "BFS":
            return bfs(grid, startTile, endTile)
        case "DFS":
            return dfs(grid, startTile, endTile)
        default:
            return bfs(grid, startTile, endTile)
    }
}