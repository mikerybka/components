import { useEffect, useState } from "react";

interface FrontendProps {
    userID: string;
    sessionToken: string;
    host: string;
    path: string;
    setPath: (path: string) => void;
}

export const Frontend = ({userID, sessionToken: sessionToken, host, path}: FrontendProps) => {
    const {data, loading} = useData(userID, sessionToken, host, path);

    if (loading) {
        return <text>Loading...</text>
    }

    if (!data) {
        return <text>404 page not found</text>
    }

    return <view>
        {JSON.stringify(data)}
    </view>
}

const useData = (userID: string, sessionToken: string, host: string, path: string)  => {
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (loading) return;

        setLoading(true);
        fetchData(userID, sessionToken, host, path).then((d: string) => {
            localStorage.setItem(`data:${path}`, d);
        }).catch((e: Error) => {
            console.log(e);
        }).finally(() => {
            setLoading(false);
        });
    }, [path]);

    return {
        data: localStorage.getItem(`data:${path}`),
        loading,
    }
}

const fetchData = async (userID: string, sessionToken: string, host: string, path: string) => {
    const url = `https://api.${host}/data${path}`
    const res = await fetch(url, {
        headers: {
            UserID: userID,
            Token: sessionToken,
        }
    });
    if (res.status === 404) return "";
    if (!res.ok) {
        const msg = `${res.status} ${res.statusText}: ${await res.text()}`;
        throw new Error(msg);
    }
    return await res.text();
}
