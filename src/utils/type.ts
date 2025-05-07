export type AlgorithmType = 'DIJKSTRA' | 'A_STAR' | 'BFS' | 'DFS';

export type MazeType = 'NONE' | 'BINARY_TREE' | 'RECURSIVE_DIVISION';

export type TileType = {
    row: number;
    col: number;
    inEnd:boolean;
    isWall: boolean;
    isPath: boolean;
    distance: number;
    isStart : boolean;
    parent: TileType | null;
}

export type GridType = TileType[][];