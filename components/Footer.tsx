import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/rakibulislam8226",
    icon: <TbBrandGithub />,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/rakibulislam8226/",
    icon: <SiLeetcode />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rakibulislam8226/",
    icon: <SlSocialLinkedin />,
  },
  {
    label: "Email",
    href: "mailto:rakibulislam8226@gmail.com",
    icon: <MdEmail />,
  },
];

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      {socials.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Footer;
