"use client";

import React, { useState, useEffect } from "react";
import { getCareerApplications } from "@/app/actions/product"; 

type CareerApplication = {
    id: string;
    name: string;
    phone: string;
    message: string;
    createdAt: string;
};

const CareerInbox = () => {
    const [applications, setApplications] = useState<CareerApplication[]>([]);
    const [selectedApplication, setSelectedApplication] = useState<CareerApplication | null>(null);

    useEffect(() => {
        const fetchApplications = async () => {
            const data = await getCareerApplications();
            setApplications(data);
        };
        fetchApplications();
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/4 bg-white p-5 border-r">
                <h2 className="text-xl font-bold mb-4">Career Inbox</h2>
                <ul>
                    {applications.map((app) => (
                        <li
                            key={app.id}
                            className={`p-3 border-b cursor-pointer ${selectedApplication?.id === app.id ? "bg-gray-200" : "hover:bg-gray-100"}`}
                            onClick={() => setSelectedApplication(app)}
                        >
                            <p className="font-semibold">{app.name}</p>
                            <p className="text-sm text-gray-500">{app.phone}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Message View */}
            <div className="flex-1 p-5">
                {selectedApplication ? (
                    <div className="bg-white shadow-lg p-5 rounded-lg">
                        <h2 className="text-2xl font-bold">{selectedApplication.name}</h2>
                        <p className="text-gray-600">{selectedApplication.phone}</p>
                        <hr className="my-3" />
                        <p className="text-lg">{selectedApplication.message}</p>
                    </div>
                ) : (
                    <p className="text-gray-500 text-lg">Select a message to read</p>
                )}
            </div>
        </div>
    );
};

export default CareerInbox;
