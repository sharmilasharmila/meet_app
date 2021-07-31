import React, {useEffect, useState} from 'react';
import {
    PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';



const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
        const data = genres.map((genre) => {
          const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;
          return { name: genre, value };
        })
      return data;
    };

    useEffect(() => { 
        setData(() => getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [events]); 

    const colors = ['#000ab4', '#c1000a', '#e300f2', '#23d900', '#000308']

    return (
        <ResponsiveContainer height={400} >
            <PieChart margin={"auto"} align-content={"center"}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                    {data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} name={entry.name}/>)}
                    </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default EventGenre;