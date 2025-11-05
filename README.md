# Parcel
    1. Bundler - combine all files to one JS file for browser.
    2. Set up Local server.
    3. HMP -> File watchig algo (C++).
    4. Minification, compressing, optimization.
    5. Dev Build. caching local -> faster Builds.
    6. Tree shaking -> remove unaccesses code.
    7. Code splitting / chunking / lazy loading / dynamic bundling.
    8. Code Hashing & Obfuscation.

------------------------------------------------------------------------------------------------

# App Skeleton
    1. Header
        1. Logo
        2. NavBar
    2. Body
        1. Filter
        2. Restaurant Card
            1. Name
            2. Picture
            3. Ratings
            4. Location
            5. Cuisine
    3. Footer
        1. T&C
        2. Contact details
        3. Privacy

------------------------------------------------------------------------------------------------

# Hooks
    1. Hook            - JS utility function for a specific task.
    2. useState        - Filtering top rated restaurant (rating more than 4*)
    3. useEffect       - Made API call after rendering the component.
    4. useParams       - react router DOM hook for finding parameters in url.
    5. useFetchData    - custom hook to call an API and return response data.
    6. useContext      - react context data state management implemented.

------------------------------------------------------------------------------------------------

# APIs
    1. Swiggy          - fetched restaurants List Data from swiggy
    2. NamasteDev      - https://namastedev.com/blog/restaurant-data-api-documentation/

------------------------------------------------------------------------------------------------

# UX/UI
    1. Shimmer Loader   - created a customer shimmer comp to show loading.
    2. Accordian Tabs   - created a custom Accordian to display menu by category.

------------------------------------------------------------------------------------------------

# Routings:
    1. Server Side Routing:
        1. HTML pages have routing on servers. `onClick()` of */about* nav bar menu fetches a new page from server.
    2. Client Side Routing
        1. SPAs have routing on client side. `onClick()` of */about* nav bar menu routes to new components which already exists.

------------------------------------------------------------------------------------------------

# Lifecycle Methods:
    1. Mounting:
        1. constructor
        2. render
        3. componentDidMount
    2. Updating:
        1. render
        2. componentDidUpdate
    3. Unmounting:
        1. componentWillUnmount

    4. Eg for batch mounting:
        - Parent constructor
        - Parent render
            - Child1 constructor
            - Child1 render
            - Child2 constructor
            - Child2 render
            - Child1 componentDidMount
            - Child2 componentDidMount
        - Parent componentDidMount

------------------------------------------------------------------------------------------------

# Styles for App
    1. Inline Styles
    2. style.css  / main.css    - Primitive, not trackable.
    3. SCSS / SASS              - Easy for devs, but not scalable.
    4. Styled Components        - Open source styling - https://styled-components.com/
    5. CSS Frameworks           - Bootstrap, MaterialUI, ChakraUI, SemanticsU I, AntDesign, etc
    6. TailwindCSS              - Tailwind uses postCSS -> transforming CSS with JavaScript

------------------------------------------------------------------------------------------------

# Concepts implemented:
    1. HOC:
        - JS fn with takes a comp as Input, enhances it & returns the comp.
    2. Controlled comps:
        - A comp which is managed (states) by its parent comp is controlled comp. This gives power of lifting the states up to the parent.
    3. Uncontrolled comps:
        - A comp which has no power (states) by its parent comp is an uncontrolled comp.
    4. Prop Drilling:
        - Passing data from the parent to multiple level child components via intermediate components.
        - It will complicate coding & code reading experience.
        - It will bloat components even when specific props are not used in certain components.

------------------------------------------------------------------------------------------------

# Context API
    1. Central state storage accessible across the App.
    2. Context in class components:
        1. getData
            - use <NAME_OF_CONTEXT_CREATED.Consumer> comp to get the context variable.
            - If context name is `UserContext()` the wrapper comp will be <UserContext.Consumer>.
        2. setData
            - use <NAME_OF_CONTEXT_CREATED.Provider> comp to update the context variable.
            - If context name is `UserContext()` the wrapper comp will be <UserContext.Provider>.
    3. Context in functional components:
        1. getData
            - use `useContext()` hook to get the context variable in comp.
        2. setData
            - legacy code.

------------------------------------------------------------------------------------------------

# Jargons & Terminologies:
    1.  Redux            - A JS state management technique for scalable apps.
    2.  React-Redux      - Library to bridge React & Redux.
    3.  Redux-Toolkit    - Latest updates on vanilla Redux.
    4.  Store            - Global placeholder for all state variables.
    5.  Slice            - Logical partitioning in a store (theme slice, user slice, cart slice)
    6.  Subscribing      - Process of being in sync with the data from store.
    7.  Selector         - It is used to read data (Subscribing) from store. 
    8.  Dispatch         - Triggering a change action.
    9.  Action           - JS object which tells what activity happend.
    10. Reducer          - Pure Function which changes the value of store variable.
    11. Flow             - when a interaction happens, it dispatches an action that calls a
                            reducer fn to update the slice of the store.

------------------------------------------------------------------------------------------------

# RTK flow
    1. install Redux Toolkit & React-Redux
    2. Build a store 
    3. Connect store to App
    4. Slice
    5. Dispatch Action
    6. Selector Subscription