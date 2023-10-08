import Link from "next/link";
import React from "react";

const NavItem = ({ mobile }: { mobile?: boolean }) => {
  return (
    <ul className={`text-md justify-center flex gap-4 w-full items-center ${mobile && "flex-col h-full"}`}>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/admin">Admin</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/admin">User</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/admin">
          <button>SignOut</button>
        </Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/admin">
          <button>SignIn</button>
        </Link>
      </li>
    </ul>
  );
};

export default NavItem;
