import { Grid } from "./components/grid"
import { PathFindingProvider } from "./context/pathFindingContext"
import { SpeedProvider } from "./context/speedContext"
import { TileProvider } from "./context/tileContext"


function App() {

  return(
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Grid /> 
          </div>
        </SpeedProvider>
      </TileProvider>
  </PathFindingProvider>
  );
}

export default App;
