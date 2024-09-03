import React, { useEffect, useState } from 'react';

const Ffxiv = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://catfact.ninja/fact'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1 style={{color: "white"}}>FFXIV</h1>
            <a href="https://docs.universalis.app/">https://docs.universalis.app/</a>

            <pre style={{color: "white"}}>{JSON.stringify(data.fact, null, 2)}</pre>
        </div>
    )
}

export default Ffxiv;