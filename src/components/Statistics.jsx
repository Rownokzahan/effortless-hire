import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import Banner from './Banner';

const data = [
    { id: 'A1', name: 'Assignment 1', mark: 60 },
    { id: 'A2', name: 'Assignment 2', mark: 60 },
    { id: 'A3', name: 'Assignment 3', mark: 60 },
    { id: 'A4', name: 'Assignment 4', mark: 53 },
    { id: 'A5', name: 'Assignment 5', mark: 60 },
    { id: 'A6', name: 'Assignment 6', mark: 60 },
    { id: 'A7', name: 'Assignment 7', mark: 60 },
    { id: 'A8', name: 'Assignment 8', mark: 60 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active) {
        const { name, mark } = payload[0].payload;
        return (
            <div className="p-2 bg-black text-white rounded-md">
                <h5>{name}</h5>
                <p>Obtain Mark :{mark}</p>
            </div>
        );
    }

    return null;
};

const Statistics = () => {
    return (
        <>
            <Banner>Statistics</Banner>

            <div className='mx-2 md:mx-10 lg:mx-20 my-16 md:my-32 flex justify-center'>
                <AreaChart width={500} height={300} data={data} >
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#9873FF" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#9873FF" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="id" />
                    <YAxis type="number" domain={[0, 60]} ticks={[0, 10, 20, 30, 40, 50, 60]} tickCount={7} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="mark" stroke="#602bf3" fillOpacity={1} fill="url(#color)" />
                </AreaChart>
            </div>
        </>
    );
};

export default Statistics;