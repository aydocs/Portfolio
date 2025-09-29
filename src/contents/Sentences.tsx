import { CodeIcon, HomeIcon, Phone, Store, FolderGit2 , Link } from 'lucide-react';
import { Icons } from "~/components/Icons";

export const Contents = {
  Name: 'Aydocs',
  About: "I'm a 19 y/o developer from Turkey, passionate about coding and problem-solving...",
  Version: 'v1',

  DiscordID: 'Your-Discord-ID',
  GithubName: 'aydocs',
  Instagram: 'aydocs.js',
  Twitter: 'aydocs.js',

  Spotfy: { 
    ClientID: 'Your-ClientID',
    ClientSecret: 'Your-Client-SecretID',
    RefreshToken: 'Your-Refresh-Token',
  },

  MetaData: {
    Name: 'Aydocs',
    Url: 'https://aydocs.vercel.app',
    Description: 'Aydocs Official Website',
  },

  Skills: [
    'HTML', 'CSS', 'Scss', 'BootStrap', 'TailWind', 'JavaScript', 'TypeScript', 'Php',
    'Python', 'React', 'NextJS', 'VueJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'MySQL',
    'SQLite', 'Docker', 'Linux', 'AWS', 'Azure', 'Nginx', 'TerraForm', 'Github', 'Git', 'GitLab',
  ],

  Navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/store", icon: Store, label: "Store" },
    { href: "/repositories", icon: FolderGit2, label: "Repositories" },
    { href: "/contact", icon: Phone, label: "Contact" },
  ],

  StoreItems: [
{
    title: "Promotional Site",
    description: "A modern and eye-catching website template specially designed to promote a product, service, or campaign. Captures audience attention and delivers your message effectively.",
    price: 7500,
    image: "/images/nah.jpeg",
    url: "/store/promotional-web-site",
  },
  {
    title: "İnşaat ve Yapı Web Sitesi",
    description: "Modern ve profesyonel bir inşaat firması için tasarlanmış web sitesi şablonu. Projelerinizi şık bir şekilde sergileyebilir, müşteri güvenini artırabilir ve potansiyel müşterilerinize güçlü bir ilk izlenim bırakabilirsiniz. Responsive tasarımı sayesinde tüm cihazlarda kusursuz görünüm sunar.",
    price: 10000,
    image: "/images/construction.jpeg",
    url: "/store/insaat-web-sitesi",
  },
  {
    title: "Restaurant Website",
    description: "Restoranlar için şık ve fonksiyonel web sitesi şablonu.",
    price: 12500,
    image: "/images/nah.jpeg",
    url: "/store/restaurant-web-site",
  },
  ]
} as const;
