
import { useState } from "react"
import { CardIncial } from "./components/CardInicial"
import { CardFinal } from "./components/CardFinal"

export function App() {
  const [AlteraValor, setAlteraValor] = useState(0)
  const [ submited, setSumited] = useState(false)

  function handleAlteraValor(valor) {
    setAlteraValor(valor)
  }

  function handleSubmit() {
    if (AlteraValor !== 0) {
      setSumited(true)
      return
    }

    alert("Plese, chouse a note!")
  }

  return(
    submited === false ? (
      <CardIncial handleValor={AlteraValor} handleSubmit={handleSubmit} />
    ) : (
      <CardFinal AlteraValor={AlteraValor}/>
    )
  )
}