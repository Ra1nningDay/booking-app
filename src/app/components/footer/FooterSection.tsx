interface FooterSectionProps {
    title: string;
    links: Array<{
        name: string;
        href: string;
    }>;
}

export function FooterSection({ title, links }: FooterSectionProps) {
    return (
        <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">
                {title}
            </h2>
            <ul className="text-gray-800 font-medium">
                {links.map((link, index) => (
                    <li key={index} className="mb-4">
                        <a href={link.href} className="hover:underline">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
