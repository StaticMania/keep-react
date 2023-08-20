"use client";
import Link from "next/link";
import Image from "next/image";
import { CaretDown, MagnifyingGlass } from "phosphor-react";
import { Button } from "@/src/components/Button";
import { DefaultTable } from "../(docs)/table/variant/DefaultTable";
const page = () => {
  return (
    <DefaultTable />
    // <header className="py-5 border-b border-b-slate-50">
    //   <nav className="container mx-auto flex items-center justify-between gap-5">
    //     <div className="flex items-center">
    //       <div>
    //         <Link href="/">
    //           <Image
    //             width="113"
    //             height="40"
    //             src="/images/keepLogo.svg"
    //             alt="keep Design System"
    //           />
    //         </Link>
    //       </div>
    //       <div className="h-4 w-px bg-slate-100 p-px mx-6"></div>
    //       <ul className="flex items-center gap-5">
    //         <li>
    //           <Link href="/" className="flex items-center gap-1">
    //             Product
    //             <CaretDown size={20} />
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/" className="flex items-center gap-1">
    //             Works <CaretDown size={20} />
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/" className="flex items-center gap-1">
    //             Projects <CaretDown size={20} />
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/" className="flex items-center gap-1">
    //             Download <CaretDown size={20} />
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/" className="flex items-center gap-1">
    //             Resource <CaretDown size={20} />
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="flex items-center gap-5">
    //       <Button type="text" size="md">
    //         <span className="pr-2">
    //           <MagnifyingGlass size={24} />
    //         </span>
    //         Search
    //       </Button>

    //       <Button type="outlinePrimary" size="md">
    //         Contact
    //       </Button>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default page;
