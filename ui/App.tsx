import { useState } from 'react'
import './App.css'

function App() {
    const [msg] = useState('MasterGo');

    return (
        <div>
            <div className="hello">Hello {msg}</div>
            <div>
                <button
                    onClick={() => {
                        // alert('hi')
                        // console.log('mg', mg)
                        parent.postMessage({ data: '123456' }, '*')

                    }}
                >Send Message</button>
            </div>
        </div>
    )
}
export default App
