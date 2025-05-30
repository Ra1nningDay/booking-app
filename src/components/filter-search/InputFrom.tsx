"use client";

import Image from "next/image";
import plane from "../../../public/icon-flag/airplane.png";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

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

export default function InputFrom() {
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
                    <div className="flex">
                        <Image
                            src={plane}
                            alt="plane"
                            className="me-2"
                            width={20}
                        />
                        {value
                            ? cities.find((citie) => citie.value === value)
                                  ?.label
                            : "Where from?"}
                    </div>
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput
                        placeholder="Airport or city"
                        className="h-9"
                    />
                    <CommandList>
                        <CommandEmpty>No citie found.</CommandEmpty>
                        <CommandGroup>
                            {cities.map((citie) => (
                                <CommandItem
                                    key={citie.value}
                                    value={citie.value}
                                    onSelect={(currentValue) => {
                                        setValue(
                                            currentValue === value
                                                ? ""
                                                : currentValue
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    {citie.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === citie.value
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
