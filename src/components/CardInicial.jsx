import iconStar from "../../public/icon-star.svg"
import { InputButton } from "./InputButton"

export function CardIncial({setAlteraValor, AlteraValor, setSumited}) {

    function handleSubmit() {
        if (AlteraValor !== 0) {
            setSumited(true)
            return
        }

            alert("Plese, chouse a note!")
            
        }

    return (
        <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103">
            <div className="bg-dark-blue w-fit p-4 rounded-full mb-4">
            <img src={iconStar} alt="Icon Star" />
            </div>

            <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>

            <p className="text-sm text-light-grey mb-6 leading-1">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            <div className="flex justify-between mb-6">
                <InputButton setAlteraValor={setAlteraValor} value={1}/>
                <InputButton setAlteraValor={setAlteraValor} value={2}/>
                <InputButton setAlteraValor={setAlteraValor} value={3}/>
                <InputButton setAlteraValor={setAlteraValor} value={4}/>
                <InputButton setAlteraValor={setAlteraValor} value={5}/>
            </div>

            <button className="bg-orange w-full uppercase tracking-1 font-bold rounded-3xl text-sm py-3 hover:bg-white hover:text-orange cursor-pointer duration-500" onClick={handleSubmit}>Submit</button>
        </div>
    )
} 