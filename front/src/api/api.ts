type Method = "GET" | "POST" | "DELETE";

const fetchingData = async (url: string, method: Method, data?: any) => {
    const res = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await res.json();

    return result;
};

export default fetchingData;
