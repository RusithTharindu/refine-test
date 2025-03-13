import { Refine } from "@refinedev/core"
import { dataProvider } from "./providers/data-provider";
import ShowProduct from "./pages/products/show";

const App = () => {
  return(
    <Refine dataProvider={dataProvider}>
      <ShowProduct/>
    </Refine>
  )
}

export default App;