
import { useState } from "react"
import { CardIncial } from "./components/CardInicial"
import { CardFinal } from "./components/CardFinal"

export function App() {
  const [AlteraValor, setAlteraValor] = useState(0)
  const [ submited, setSumited] = useState(false)

  

  function handleSubmit() {
    if (AlteraValor !== 0) {
      setSumited(true)
      return
    }

    alert("Plese, chouse a note!")
  }

  return(
    submited === false ? (
      <CardIncial setAlteraValor={setAlteraValor} handleSubmit={handleSubmit} />
    ) : (
      <CardFinal AlteraValor={AlteraValor}/>
    )
  )
}