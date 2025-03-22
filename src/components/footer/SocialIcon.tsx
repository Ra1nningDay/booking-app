interface SocialIconProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

export function SocialIcon({ href, icon, label }: SocialIconProps) {
    return (
        <a href={href} className="text-gray-400 hover:text-gray-900">
            {icon}
            <span className="sr-only">{label}</span>
        </a>
    );
}