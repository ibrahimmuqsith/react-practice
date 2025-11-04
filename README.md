1. Parcel
    1. Bundler - combine all files to one JS file for browser.
    2. Set up Local server.
    3. HMP -> File watchig algo (C++).
    4. Minification, compressing, optimization.
    5. Dev Build. caching local -> faster Builds.
    6. Tree shaking -> remove unaccesses code.
    7. Code splitting / chunking / lazy loading / dynamic bundling.
    8. ode Hashing & Obfuscation.

------------------------------------------------------------------------------------------------

2. App Skeleton
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

3. Hooks
    1. Hook            - JS utility function for a specific task.
    2. useState        - Filtering top rated restaurant (rating more than 4*)
    3. useEffect       - Made API call after rendering the component.
    4. useParams       - react router DOM hook for finding parameters in url.
    5. useFetchData    - custom hook to call an API and return response data.

------------------------------------------------------------------------------------------------

4. APIs
    1. Swiggy          - fetched restaurants List Data from swiggy
    2. NamasteDev      - https://namastedev.com/blog/restaurant-data-api-documentation/

------------------------------------------------------------------------------------------------

5. UX/UI
    1. Shimmer Loader   - created a customer shimmer comp to show loading.
    2. Accordian Tabs   - created a custom Accordian to display menu by category.

------------------------------------------------------------------------------------------------

6. Routings:
    1. Server Side Routing:
        1. HTML pages have routing on servers. `onClick()` of */about* nav bar menu fetches a new page from server.
    2. Client Side Routing
        1. SPAs have routing on client side. `onClick()` of */about* nav bar menu routes to new components which already exists.

------------------------------------------------------------------------------------------------

7. Lifecycle Methods:
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

8. Styles for App
    1. Inline Styles
    2. style.css  / main.css    - Primitive, not trackable.
    3. SCSS / SASS              - Easy for devs, but not scalable.
    4. Styled Components        - Open source styling - https://styled-components.com/
    5. CSS Frameworks           - Bootstrap, MaterialUI, ChakraUI, SemanticsU I, AntDesign, etc
    6. TailwindCSS              - Tailwind uses postCSS -> transforming CSS with JavaScript

9. JS concepts:
    1. HOC - JS fn with takes a comp as Input, enhances it & returns the comp.
    2. Controlled comps: A comp which is managed (states) by its parent comp is controlled comp.
    2. Uncontrolled comps: A comp which has no power (states) by its parent comp is an uncontrolled comp.
