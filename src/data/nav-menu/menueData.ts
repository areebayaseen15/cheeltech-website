import { MenuItem } from "@/types/menu-d-t";

const headerMenuData:MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: true,
    title: "Home",
    pluseIncon: true,
    link: "/",
   
  },
  {
    id: 2,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: true,
    title: "About",
    pluseIncon: true,
    link: "/About",
   
  },
  {
    id: 3,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: true,
    title: "Services",
    pluseIncon: true,
    link: "/Services",
   
  },
  {
    id: 4,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: true,
    title: "Projects",
    pluseIncon: true,
    link: "/Projects",
   
  },
  {
    id: 5,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: true,
    title: "Blog",
    pluseIncon: true,
    link: "/Blog",
    
  },
  {
    id: 6,
    hasDropdown: true,
    active: true,
    megaMenu: false,
    children: true,
    title: "Contact",
    pluseIncon: true,
    link: "/Contact",
    
  }
];
export default headerMenuData;

