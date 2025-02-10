"use client";

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { submitCareerApplication } from "@/app/actions/product"; // Import server action

const Career = () => {
    const { toast } = useToast();

    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const result = await submitCareerApplication(name, phone, message);

        if (result.success) {
            toast({
                title: "YMER'S GRILL",
                description: "Mesazhi juaj u dergua me sukses!",
            });
            setName("");
            setPhone("");
            setMessage("");
        } else {
            toast({
                title: "Gabim",
                description: result.error || "Ndodhi një problem, provoni përsëri.",
                variant: "destructive",
            });
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center lg:flex-row flex-col bg-[#DCD1BE] lg:pr-[5%] py-5 px-[5%] gap-2">
            <div className="lg:w-[50%] ">
                <img src="/plate.webp" alt="" />
            </div>
            <div className="lg:w-[50%]">
                <h2 className="text-gray-900 insane relative text-4xl">
                    Bashkohuni me Ne në <br /> YMER&apos;S GRILL
                </h2>
                <p className="text-gray-900 text-lg py-1 font-semibold">
                    A doni të bëheni pjesë e ekipit tonë?
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2 py-1">
                        <Label>Emer Mbiemer</Label>
                        <Input className="border-[0.3px] bg-white" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2 py-1">
                        <Label>Numri jauj i telefonit</Label>
                        <Input className="border-[0.3px] bg-white" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2 py-1">
                        <Label>Mesazh</Label>
                        <textarea
                            rows={5}
                            className="border-[0.3px] rounded-lg p-3"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button type="submit" disabled={loading} className="px-3 py-2 text-lg text-white rounded-lg bg-[#B82424] mt-2">
                        {loading ? "Duke dërguar..." : "Dergo"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Career;
