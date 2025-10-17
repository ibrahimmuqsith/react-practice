import React from 'react'
import ReactDOM from 'react-dom/client'

// const jsxHeading  = <h1 key={'h1'}> Hello World from JSX </h1>
const jsContent = "this is a jsContent"

const Heading = () => <h1> Hello World from React HeadingComponent </h1>

const HeadingComponent = () => {
    return (
        <div className='container'>
            {Heading()}
            <Heading />
            <Heading></Heading>
            <h2 className='jsContent'>
                {jsContent}
            </h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(jsxHeading)
root.render(<HeadingComponent />)