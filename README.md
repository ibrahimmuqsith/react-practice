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
    restaurants     - fetched restaurants List Data from swiggy

UX/UI
    Shimmer Loader  - created a customer shimmer comp to show loading


1. Routings:
    1. Server Side Routing:
        1. HTML pages have routing on servers. `onClick()` of */about* nav bar menu fetches a new page from server.
    2. Client Side Routing
        1. SPAs have routing on client side. `onClick()` of */about* nav bar menu routes to new components which already exists.