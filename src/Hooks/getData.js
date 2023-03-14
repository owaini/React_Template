

import { useEffect, useState } from 'react'

function GetData() {
    const [data , setData] = useState([]);
		useEffect(() => {
			fetch("js/data.json")
				.then((res) => res.json())
				.then((data) => setData(data))
				.catch((err) => console.log(err.message));
		},[data]);

    return data
}

export default GetData