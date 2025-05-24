import { useRef } from "react"
import { Grid } from "./components/grid"
import { PathFindingProvider } from "./context/pathFindingContext"
import { SpeedProvider } from "./context/speedContext"
import { TileProvider } from "./context/tileContext"
import { Nav } from "./components/nav"


function App() {
  const isVisualizationRunningRef = useRef(false)
  return(
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Nav isVisualizationRunningRef={isVisualizationRunningRef}/>
            <Grid isVisualizationRunningRef={isVisualizationRunningRef}/> 
          </div>
        </SpeedProvider>
      </TileProvider>
  </PathFindingProvider>
  );
}

export default App;
