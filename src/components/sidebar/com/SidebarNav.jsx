import React from "react";

import { NavLink, useLocation } from "react-router-dom";
import { cn } from "cn";



function SidebarNavItem({ item }) {

  const { pathname } = useLocation();

  console.log(pathname);

  const { badge, icon: Icon, label, to, activePath = [item.to] } = item;

  const isActive = activePath.includes(pathname);


  return <li>
    <NavLink to={to} className={cn({
      "flex w-full h-11 px-3 items-center gap-3 rounded-lg  text-left text-sm font-medium": true,
      "text-muted-foreground hover:bg-muted hover:text-foreground": true,
      "bg-[#fdf1ed] text-[#a63d1d]": isActive
    })}>
      <Icon className="size-4 shrink-0" />
      <span>{label}</span>
      {badge && (<span className="ml-auto bg-[#d85e38] px-1.5 py-0 rounded-full text-white text-[11px] font-semibold">
        {badge}
      </span>
      )}
    </NavLink>
  </li>;
}

function SidebarNav({ items }) {
  return (
    <div>
      <ul className="space-y-1">
        {items.map((item) => (
          <SidebarNavItem item={item} />
        ))}
      </ul>
    </div>
  );
}

export default SidebarNav;
