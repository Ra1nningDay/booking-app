import Image from "next/image";
import search from "../../public/icon-flag/search.png";
import FilterSearch from "@/components/filter-search/FilterSearch";

export default function Home() {
    return (
        <>
            <div className="relative bg-gray-200">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-36">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-center mb-8 md:mb-12 font-bold">
                        Find Cheap Booking Here!
                    </h1>
                    <div className="flex items-center bg-white rounded-full mx-4 md:mx-auto max-w-3xl shadow-lg">
                        <Image
                            src={search}
                            alt="Search Icon"
                            width={24}
                            height={24}
                            className="ml-6 mr-3"
                        />
                        <input
                            type="search"
                            className="w-full bg-transparent py-4 px-3 rounded-r-full outline-none"
                            placeholder="Search Flights..."
                        />
                    </div>
                </div>
            </div>

            <FilterSearch title={"Lorem, ipsum dolor sit amet"} />

            <div className="max-w-screen-xl mx-auto px-4 mb-16">
                <h2 className="text-3xl font-semibold">Popular Destinations</h2>
            </div>
        </>
    );
}
