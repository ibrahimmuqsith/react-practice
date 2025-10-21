const heading = React.createElement(
    'h1',
    {
        // this adds attributes to the HTML tag
        id: "heading",
        testing: "muqsith"
    },
    "Hello World from React !!"
)

const parent = React.createElement('div', { id: 'container' },
    [
        React.createElement('div', { id: 'parent1', key: 'parent2' },
            [
                React.createElement('h1', { id: 'heading1', key: 'heading1' }, "this is parent1 - H1 tag"),
                React.createElement('h2', { id: 'heading2', key: 'heading2' }, "this is parent1 - H2 tag"),
            ]
        ),
        React.createElement('div', { id: 'parent2', key: 'parent2' },
            [
                React.createElement('h3', { id: 'heading3', key: 'heading3' }, "this is parent2 - H3 tag"),
                React.createElement('h4', { id: 'heading4', key: 'heading4' }, "this is parent2 - H4 tag"),
            ]
        )
    ]
)

console.log(parent)
//returns a react h1 element ==> JS object with a lot of details

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)
root.render(parent)