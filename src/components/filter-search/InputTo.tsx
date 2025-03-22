"use client";

import Image from "next/image";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import planeranway from "../../../public/icon-flag/this.png";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const cities = [
    {
        value: "bangkok",
        label: "Bangkok",
    },
    {
        value: "tokyo",
        label: "Tokyo",
    },
    {
        value: "paris",
        label: "Paris",
    },
    {
        value: "new-york",
        label: "New York",
    },
    {
        value: "sydney",
        label: "Sydney",
    },
];

export default function InputTo() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] py-6 justify-between"
                >
                    <div className="flex items-center">
                        <Image
                            src={planeranway}
                            className="me-2"
                            width={30}
                            alt="ranway"
                        />
                        {value
                            ? cities.find((cities) => cities.value === value)
                                  ?.label
                            : "Where to?"}
                    </div>
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput
                        placeholder="Airport or city..."
                        className="h-9"
                    />
                    <CommandList>
                        <CommandEmpty>No cities found.</CommandEmpty>
                        <CommandGroup>
                            {cities.map((cities) => (
                                <CommandItem
                                    key={cities.value}
                                    value={cities.value}
                                    onSelect={(currentValue) => {
                                        setValue(
                                            currentValue === value
                                                ? ""
                                                : currentValue
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    {cities.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === cities.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
