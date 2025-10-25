import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    return (
        <div className="error">
            {console.log("error", error)}
            <h1>
                Oops !!  {error.status}
            </h1>

            <h2>
                {error.data}
            </h2>
        </div>
    )
}

export default Error