import React, { useState, useEffect } from 'react';
import { Card, Progress } from 'flowbite-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {  BiUser } from 'react-icons/bi';
import { CgGlass } from 'react-icons/cg';
import { FaMoneyBill } from 'react-icons/fa';

const DashboardOverview = () => {
    const overviewData = [
        {
            title: "Total Users",
            value: 8025,
            max: 10000,
            icon: <BiUser />,
            color: "blue"
        },
        {
            title: "Active Classes",
            value: 4152,
            max: 5000,
            icon: <CgGlass />,
            color: "green"
        },
        {
            title: "Revenue Achieved",
            value: 5948,
            max: 8000,
            icon: <FaMoneyBill />,
            color: "yellow"
        },
    ];

    const revenueData = [
        { date: 'Jan', Revenue: 120000 },
        { date: 'Feb', Revenue: 150000 },
        { date: 'Mar', Revenue: 180000 },
        { date: 'Apr', Revenue: 200000 },
        { date: 'May', Revenue: 170000 },
        { date: 'Jun', Revenue: 220000 },
    ];
    return (
        <section className="p-6 mx-auto w-11/12 mt-20">
            <h2 className="text-4xl text-center font-bold mb-10">Dashboard Overview</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {overviewData.map((item, index) => (
                    <Card key={index} className="bg-white rounded-lg shadow-md p-2 flex flex-col justify-center mx-auto">
                        <div className="mb-4 text-5xl flex justify-center mx-auto">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                        <div className="w-48 mb-4">
                            <Progress
                                color={item.color}
                                progress={Math.round((item.value / item.max) * 100)}
                            />
                        </div>
                        <p className="text-xl font-bold">
                            {item.value} / {item.max}
                        </p>
                    </Card>
                ))}
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium mb-4">Revenue Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Revenue" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium mb-4">Recent Revenue</h3>
                <table className="min-w-full divide-y divide-gray-200 border border-collapse"> {/* Added border and border-collapse */}
    <thead>
        <tr>
            <th className="px-4 py-2 border"> {/* Added border to header cell */}
                Month
            </th>
            <th className="px-4 py-2 border"> {/* Added border to header cell */}
                Amount
            </th>
        </tr>
    </thead>
    <tbody className='text-center'>
        {revenueData.map((Revenue, index) => (
            <tr key={index}>
                <td className="px-4 py-2 border"> {/* Added border to data cell */}
                    {Revenue.date}
                </td>
                <td className="px-4 py-2 border"> {/* Added border to data cell */}
                    {Revenue.Revenue}
                </td>
            </tr>
        ))}
    </tbody>
</table>
            </div>

        </section>
    );
};

export default DashboardOverview;