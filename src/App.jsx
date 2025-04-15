
import { useState } from "react"
import { CardIncial } from "./components/CardInicial"
import { CardFinal } from "./components/CardFinal"

export function App() {
  const [AlteraValor, setAlteraValor] = useState(0)
  const [ submited, setSumited] = useState(false)

  return(
    submited === false ? (
      <CardIncial setAlteraValor={setAlteraValor}  setSumited={setSumited} AlteraValor={AlteraValor}/>
    ) : (
      <CardFinal AlteraValor={AlteraValor} />
    )
  )
}