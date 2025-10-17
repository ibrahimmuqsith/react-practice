import React from 'react'
import ReactDOM from 'react-dom/client'

// const jsxHeading  = <h1 key={'h1'}> Hello World from JSX </h1>

const Heading = () => <h1> Hello World from React HeadingComponent </h1>

const HeadingComponent = () => {
    return (
        <div className='container'>
            <Heading />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(jsxHeading)
root.render(<HeadingComponent />)