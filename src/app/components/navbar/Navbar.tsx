import Link from "next/link";
import uk from "./../../../../public/icon-flag/uk.png";
import Image from "next/image";

// const links = [
//     {
//         name: "Home",
//         link: "",
//     },
//     { name: "About", link: "" },
// ];

const auth = [
    {
        name: "Register",
        link: "",
    },
    {
        name: "Sign in",
        link: "",
    },
];

interface HeaderProps {
    link: string;
    header: string;
}

export default function Navbar({ link, header }: HeaderProps) {
    return (
        <nav className="bg-white  shadow-md">
            <div className="flex justify-between items-center px-4 py-3 max-w-screen-xl mx-auto">
                {/* Logo */}
                <span className="text-4xl font-bold text-black ">
                    <Link href={link}>{header}</Link>
                </span>

                {/* <ul className="flex space-x-6">
                    {links.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                className=" hover:text-blue-600 text-black"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul> */}

                {/* Select Languages */}
                <div className="flex gap-2">
                    <div className="flex items-center me-2">
                        <button className="flex items-center">
                            <Image
                                className="me-1"
                                src={uk}
                                alt="UK Flag"
                                width={20}
                                height={15}
                            />
                            <span>EN/THB</span>
                        </button>
                    </div>

                    {/* Authenticate Section */}
                    {auth.map((item, index) => (
                        <a
                            key={index}
                            href=""
                            className=" border-2 rounded-[4px] px-4 py-2 bg-white text-black hover:text-blue-500"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
