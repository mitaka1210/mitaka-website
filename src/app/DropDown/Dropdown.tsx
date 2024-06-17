'use client'

import React, {useState} from 'react'
import Link from 'next/link';

import {MenuItem} from '../Lang/Lang';
import './dropdown.scss';
import {translateWebsite} from "@/app/DropDown/test";

interface Props {
  item: MenuItem,
}

interface Page {
  page: string
}

export default function Dropdown(props: Props, pathname: Props) {
  //?need to import library

  const [isOpen, setIsOpen] = useState<boolean>(false);
  //? my variables
  const {item} = props;
  const menuItems = item?.children ? item.children : [];
  const toggle = () => {
    setIsOpen(old => !old);
  }
  const multiMethod = (data: MenuItem) => {
    toggle();
  }
  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div className="relative">
        <button
          className="add-hover-color"
          onClick={() => multiMethod(item)}
        >{item.title}</button>
        <div
          className={`absolute right-14 top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded-md ${transClass}`}>
          {
            menuItems.map((item, number) =>
              <Link
                key={number}
                className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
                href={item?.route || ''}
                onClick={() => {
                  multiMethod(item);
                  translateWebsite(item)
                }}
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
