import { Button } from "@/components/ui/button";
import InputFrom from "./InputFrom";
import InputTo from "./InputTo";
import { InputDate } from "./InputDate";
import InputPassenger from "./InputPassenger";

interface FilterSearchProps {
    title: string;
}

export default function FilterSearch({ title }: FilterSearchProps) {
    return (
        <div className="relative -mt-16 px-4 mb-16">
            <div className="mx-auto max-w-screen-lg bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <div className="flex gap-2">
                    <InputFrom />
                    <InputTo />
                    <InputDate />
                    <InputPassenger />
                    <Button variant="outline" className="cursor-pointer py-6">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
}
