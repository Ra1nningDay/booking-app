import Link from "next/link";

const links = [
    {
        name: "Home",
        link: "",
    },
    { name: "About", link: "" },
];

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
        <nav className="bg-white dark:bg-[#030711] shadow-md">
            <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
                <span className="text-xl font-bold text-grey-800 dark:text-white">
                    <Link href={link}>{header}</Link>
                </span>

                <ul className="flex space-x-6">
                    {links.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                className="dark:text-white hover:text-blue-600 "
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-4">
                    {auth.map((item, index) => (
                        <a
                            key={index}
                            href=""
                            className="dark:text-white border-2 dark:hover:bg-white dark:hover:text-black rounded-4xl px-4 py-2"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
