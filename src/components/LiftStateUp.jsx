import {useState} from 'react'

export const LiftingState = () => {

    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <InputComponent input={inputValue} set={setInputValue} />
            <DisplayComponent input={inputValue} />
        </>
    )
} 

const InputComponent = ({input, set}) => {
    return (<>
        <input type="text" value={input} onChange={(e) => set(e.target.value) } />
    </>)
}

const DisplayComponent = ({input}) => {
    return (<>
        <p>The current input value is: {input} </p>
    </>)
}