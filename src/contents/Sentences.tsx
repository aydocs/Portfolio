import { CodeIcon, HomeIcon, Phone } from "lucide-react";
import { Icons } from "~/components/Icons";

export const Contents = {

    // Yardım İçin -> https://github.com/aydocs
    Name: 'Aydocs',
    About: 'Hi, Im Aydocs, a 19 y/o developer from Turkey. Im passionate about web and Discord bot development, and I love turning ideas into real projects. Always learning, always building.',
    Version: 'v1',

    DiscordID: 'Your-Dıscord-ID', // Discord ID
    GithubName: 'aydocs', // Github Name
    Instagram: 'aydocs.js', // Instagram Name

    Spotfy: {
        ClientID: 'bbd4166ddeeb402bbb630debd1d33a1d', // Spotify ClientID || Client oluşturmak için -> https://developer.spotify.com 
        ClientSecret: 'cee988b4c7f74c09b0a469e7bf866222', // Spotify Client Secret || Client oluşturmak için -> https://developer.spotify.com 
        RefreshToken: '' // Client Refresh Token || Client oluşturmak için -> https://developer.spotify.com 
    },

    MetaData: {
        Name: 'Aydo',
        Url: 'https://aydocs.vercel.app',
        Description: 'Aydocs Official Website',
    },

    Skills: [
        'HTML',
        'CSS',
        'Javascript',
        'Typescript',
        'React',
        'Next JS',
        'Nuxt JS',
        'Bootstrap',
        'Tailwind',
        'Vue',
        'MongoDB',
        'MySQL',
    ],

    Navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/contact", icon: Phone, label: "Contact" },
    ],

    Contact: {
        social: {
            Instagram: {
                name: "Instagram",
                url: "https://www.instagram.com/aydocs.js/",
                icon: Icons.Instagram,

                navbar: true,
            },
            Github: {
                name: "Github",
                url: "https://github.com/aydocs",
                icon: Icons.Github,
                navbar: true,
            },
        },
    },

} as const