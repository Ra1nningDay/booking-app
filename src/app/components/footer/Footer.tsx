import { FooterSection } from "./FooterSection";
import { SocialIcon } from "./SocialIcon";
import { footerData } from "./footerData";
import { socialIcons } from "./socialIcons";

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    {footerData.map((section, index) => (
                        <FooterSection
                            key={index}
                            title={section.title}
                            links={section.links}
                        />
                    ))}
                </div>

                <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                        © 2023 <a href="https://flowbite.com/">Flowbite™</a>.
                        All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        {socialIcons.map((social, index) => (
                            <SocialIcon
                                key={index}
                                href={social.href}
                                icon={social.icon}
                                label={social.label}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
