"use client";

import * as React from "react";
import Image from "next/image";
import passenger from "../../../public/icon-flag/user.png";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export default function InputPassenger() {
    const [adults, setAdults] = React.useState(1);
    const [children, setChildren] = React.useState(0);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-[200px] py-6 justify-between text-left font-normal"
                >
                    <div className="flex items-center">
                        <Image
                            src={passenger}
                            width={20}
                            className="me-2"
                            alt="Passenger"
                        />
                        <span>
                            {adults} Adult{adults > 1}, {children} Child
                        </span>
                    </div>
                    {/* <span className="opacity-50">Passengers</span> */}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-4">
                <div className="space-y-4">
                    {/* Adults */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Adults</span>
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() =>
                                    setAdults((prev) =>
                                        prev > 1 ? prev - 1 : prev
                                    )
                                }
                            >
                                <Minus className="w-4 h-4" />
                            </Button>
                            <span>{adults}</span>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setAdults((prev) => prev + 1)}
                            >
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Children */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Children</span>
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() =>
                                    setChildren((prev) =>
                                        prev > 0 ? prev - 1 : prev
                                    )
                                }
                            >
                                <Minus className="w-4 h-4" />
                            </Button>
                            <span>{children}</span>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setChildren((prev) => prev + 1)}
                            >
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
