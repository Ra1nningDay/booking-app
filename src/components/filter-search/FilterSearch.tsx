import { Button } from "@/components/ui/button";

export default function FilterSearch() {
    return (
        <div className="relative -mt-16 px-4 mb-16">
            <div className="mx-auto max-w-screen-lg bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-semibold mb-4">
                    Lorem, ipsum dolor sit amet
                </h2>
                <div className="flex gap-2">
                    <input
                        type="text"
                        className="bg-gray-200"
                        placeholder="From"
                    />
                    <input
                        type="text"
                        className="bg-gray-200"
                        placeholder="To"
                    />
                    <input
                        type="text"
                        className="bg-gray-200"
                        placeholder="Date"
                    />
                    <input
                        type="text"
                        className="bg-gray-200"
                        placeholder="Passengers"
                    />
                    <Button variant="outline" className="cursor-pointer">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
}
