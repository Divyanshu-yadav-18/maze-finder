import { PathFindingProvider } from "./context/pathFindingContext"
import { SpeedProvider } from "./context/speedContext"
import { TileProvider } from "./context/tileContext"


function App() {

  return
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <h1 className="text-3xl font-bold underline ">
            Hello World!
          </h1>
        </SpeedProvider>
      </TileProvider>
  </PathFindingProvider>
}

export default App
