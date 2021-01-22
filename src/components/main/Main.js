import React, {useState, useEffect} from 'react';

const Main = () => {
    const [data, setData] = useState('');

    const getData = async() =>{
        const res = await fetch(`http://0.0.0.0:9002/api/v2/barong/identity/ping`);
          const fetchData = await res.json();
          setData(fetchData);
    };

    useEffect(()=>{
        getData()
    },[]);

    return (
        <div>
            <h1>{data.ping}</h1>
        </div>
    );
};

export default Main;