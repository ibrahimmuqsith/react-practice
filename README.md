------------------------------------------------------------------------------------------------
Parcel
    - Bundler - combine all files to one JS file for browser.
    - Set up Local server.
    - HMP -> File watchig algo (C++).
    - Minification, compressing, optimization.
    - Dev Build. caching local -> faster Builds.
    - Tree shaking -> remove unaccesses code.
    - Code splitting / chunking / lazy loading / dynamic bundling.
    - code Hashing & Obfuscation.

------------------------------------------------------------------------------------------------

Header
    Logo
    NavBar
Body
    Filter
    Restaurant
        Restaurant Name
        Restaurant Picture
        Restaurant Ratings
        Restaurant Location
        Restaurant Cuisine
Footer
    T&C
    Contact details
    Privacy

------------------------------------------------------------------------------------------------

Hooks
    Hook            - JS utility function for a specific task.
    useState        - Filtering top rated restaurant (rating more than 4*)
    useEffect       - Made API call after rendering the component.
    useParams       - react router DOM hook for finding parameters in url.
    useFetchData    - custom hook to call an API and return response data.

------------------------------------------------------------------------------------------------

APIs
    Swiggy          - fetched restaurants List Data from swiggy
    NamasteDev      - https://namastedev.com/blog/restaurant-data-api-documentation/

------------------------------------------------------------------------------------------------

UX/UI
    Shimmer Loader  - created a customer shimmer comp to show loading

------------------------------------------------------------------------------------------------

1. Routings:
    1. Server Side Routing:
        1. HTML pages have routing on servers. `onClick()` of */about* nav bar menu fetches a new page from server.
    2. Client Side Routing
        1. SPAs have routing on client side. `onClick()` of */about* nav bar menu routes to new components which already exists.

------------------------------------------------------------------------------------------------

Lifecycle Methods:
    Mounting:
        constructor
        render
        componentDidMount
    Updating:
        render
        componentDidUpdate
    Unmounting:
        componentWillUnmount

    Eg for batch mounting:
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