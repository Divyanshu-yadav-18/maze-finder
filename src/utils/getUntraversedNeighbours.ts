import { MAX_COLS, MAX_ROWS } from "./constant";
import { GridType, TileType } from "./type";

export const getUntraversedNeighbours = (grid: GridType, tile: TileType)=>{
    const {row,col} = tile;
    const neighbours = [];

    if(row>0){
        neighbours.push(grid[row - 1][col]);
    }

    if(row < MAX_ROWS - 1){
        neighbours.push(grid[row + 1][col]);
    }
    if(col>0){
        neighbours.push(grid[row][col - 1]);
    }
    if(col<MAX_COLS - 1){
        neighbours.push(grid[row][col + 1]);
    }
    return neighbours.filter((neighbour)=>!neighbour.isTraversed)
}