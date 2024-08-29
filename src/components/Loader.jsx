import { useState, useEffect } from 'react'
import { DotLoader } from 'react-spinners'

export default function Loader({children}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f0f0f0'
            }}>
                <DotLoader color='#2978b5' size={50} />
            </div>
        )
    }

    return children;
}