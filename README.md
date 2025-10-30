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
        Restaurant Cuisine
Footer
    T&C
    Contact details
    Privacy

Hooks
    useState        - Filtering top rated restaurant (rating more than 4*)
    useEffect       - Made API call after rendering the component.

APIs
    Swiggy          - fetched restaurants List Data from swiggy
    NamasteDev      - https://namastedev.com/blog/restaurant-data-api-documentation/


UX/UI
    Shimmer Loader  - created a customer shimmer comp to show loading


1. Routings:
    1. Server Side Routing:
        1. HTML pages have routing on servers. `onClick()` of */about* nav bar menu fetches a new page from server.
    2. Client Side Routing
        1. SPAs have routing on client side. `onClick()` of */about* nav bar menu routes to new components which already exists.

Lifecycle Methods:
    1. Class components order:
        - Parent constructor
        - Parent render
            - Child1 constructor
            - Child1 render
            - Child2 constructor
            - Child2 render
            - Child1 componentDidMount
            - Child2 componentDidMount
        - Parent componentDidMount