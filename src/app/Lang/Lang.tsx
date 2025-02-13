import React, {useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Dropdown from "../DropDown/Dropdown";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

export interface Page {
  page: string
}

const menuItemsEN: MenuItem[] = [
  {
    title: "Language",
    children: [
      {
        title: "English",
      },
      {
        title: "Bulgarian",
      },
    ],
  },
];
const menuItemsBG: MenuItem[] = [
  {
    title: "Език",
    children: [
      {
        title: "Английски",
      },
      {
        title: "Български",
      },
    ],
  },
];

export default function ChangeLang() {
  let lang = localStorage.getItem("i18nextLng");
  const pathname = usePathname();
  useEffect(() => {

  }, [lang]);
  return (
      <div className="flex gap-8 items-center text-white">
        {lang === 'bg' ? menuItemsBG.map((item, number) => {
          return item.hasOwnProperty("children") ? (
              <Dropdown item={item}  key={number}/>
          ) : (
              <Link key={number} className="hover:text-crimson-500" href="#">
                {item.title}
              </Link>
          );
        }) : menuItemsEN.map((item, number) => {
          return item.hasOwnProperty("children") ? (
              <Dropdown item={item}  key={number}/>
          ) : (
              <Link key={number} className="hover:text-crimson-500" href="#">
                {item.title}
              </Link>
          );
        })
        }
      </div>
  );
}