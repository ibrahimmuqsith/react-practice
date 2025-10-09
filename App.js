const heading = React.createElement(
    'h1',
    {
        // this adds attributes to the HTML tag
        id: "heading",
        testing: "muqsith"
    },
    "Hello World from React !!")

console.log(heading)
//returns a react h1 element ==> JS object with a lot of details

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)