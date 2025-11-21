import React, { useEffect, useState } from "react"

const useFetchData = (url, params) => {

    const [data, setData] = useState()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const resp = await fetch(url + params)
        const jsonResp = await resp.json()
        console.log("jsonResp Custom hook", jsonResp.data)
        setData(jsonResp.data)
    }

    return data;
}

export default useFetchData