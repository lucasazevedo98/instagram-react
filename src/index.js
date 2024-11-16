import { createRoot } from "react-dom/client"





function App() {
    return (
        <>
        <h1>Ola mundo</h1>
        <p>olalalal</p>
        </>
    )
}

const root = createRoot(document.querySelector('.root'))

root.render(<App />)
