import { useEffect, useState } from "react";
import { fetchdataApi } from "../Utilis/api";
const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall();
    }, [endpoint]);

    const makeApiCall = async () => {
        const res = await fetchdataApi(endpoint);
        setData(res);
    };

    return { data };
};
export default useFetch;