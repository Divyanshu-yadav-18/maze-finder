import { PathFindingProvider } from "./context/pathFindingContext"
import { TileProvider } from "./context/tileContext"


function App() {

  return
    <PathFindingProvider>
      <TileProvider>
        <h1 className="text-3xl font-bold underline ">
          Hello World!
        </h1>
      </TileProvider>
  </PathFindingProvider>
}

export default App
