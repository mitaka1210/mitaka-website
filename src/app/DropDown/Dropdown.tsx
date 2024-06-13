import React, { useState } from 'react'
import Link from 'next/link';

import { MenuItem } from '../Lang/Lang';

interface Props {
  item: MenuItem;
}

export default function Dropdown(props: Props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children ? item.children : [];
  {/*<button type="button" onClick={() => changeLanguage("en")}>*/}
  {/*  en*/}
  {/*</button>*/}
  {/*<button type="button" onClick={() => changeLanguage("bg")}>*/}
  {/*  bg*/}
  {/*</button>*/}
  const toggle = () => {
    setIsOpen(old => !old);
  }
  const changeLang = () => {
    console.log('pesho')
  }
  const multiMethod = () => {
    toggle();
    changeLang();
  }
  const transClass = isOpen
    ?
    "flex"
    :
    "hidden";

  return (
    <>
      <div className="relative">
        <button
          className="hover:text-blue-400"
          onClick={multiMethod}
        >{item.title}</button>
        <div className={`absolute right-14 top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded-md ${transClass}`}>
          {
            menuItems.map(item =>
              <Link
                key={item.route}
                className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
                href={item?.route || ''}
                onClick={multiMethod}
              >{item.title}</Link>
            )
          }
        </div>
      </div>
      {
        isOpen
          ?
          <div
            className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
            onClick={toggle}
          ></div>
          :
          <></>
      }
    </>
  )
}
