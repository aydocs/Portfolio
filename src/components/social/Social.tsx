// components/social/Social.tsx
import React from "react";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/yourhandle",
    icon: FaInstagram,
    color: "bg-pink-500",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourhandle",
    icon: FaTwitter,
    color: "bg-blue-500",
  },
  {
    name: "GitHub",
    url: "https://github.com/yourhandle",
    icon: FaGithub,
    color: "bg-gray-800",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourhandle",
    icon: FaLinkedin,
    color: "bg-blue-700",
  },
];

export const Social = () => {
  return (
    <div className="w-full max-w-md space-y-4">
      {socialLinks.map(({ name, url, icon: Icon, color }) => (
        <Link
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl text-white text-lg font-semibold shadow-md hover:scale-[1.03] transform transition-all duration-200 ${color}`}
        >
          <Icon className="text-2xl" />
          {name}
        </Link>
      ))}
    </div>
  );
};
