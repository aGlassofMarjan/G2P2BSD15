import { useState } from "react";
import UseSpeechToText from "../../hooks/useSpeechToText";


const VoiceInput = () => {
    const [textInput, setTextInput] = useState('')

    const {isListening, transcript, startListening, stopListening} = UseSpeechToText({continous: true})

    const startStopListeniing = () => {
        isListening? stopVoiceInput() : startListening()
    }

    const stopVoiceInput = () => {
        setTextInput(prevVal => prevVal + (transcript.length ? (prevVal.length ? ' ' : '') + transcript : ''))
        stopListening()
    }
 
    return (
        <div style={{display: 'block', margin: '0 auto', width: '400px', textAlign: 'center', marginTop: '200px'}}>
            <button
            onClick={() => {startStopListeniing()}}>
                {isListening? 'Stop Listening' : 'Speak'}
            </button>
            <textarea
            style={{
                marginTop: '20px',
                width: '100%',
                height: '150px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                transition: 'border-color 0.3s ease',
                 resize: 'none',
                 backgroundColor: '#f8f8f8',
                 color: '#333'
            }}
            disabled={isListening}
            value={isListening? textInput + (transcript.length? (textInput.length? ' ' : '' ) + transcript : '') : textInput}
            onChange={(e) => {setTextInput(e.target.value)}}>

            </textarea>
        </div>
    )
}

export default VoiceInput