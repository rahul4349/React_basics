import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    Children: "Click me to visit google"
}

function Myapp(){
    return (
        <div>
            <h1>Custom React app</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {href:"https://google.com", target:'_blank'},
    "Click me to visit google"
)

createRoot(document.getElementById('root')).render(
    // Myapp()
    // AnotherElement
    areactElement
    
)
