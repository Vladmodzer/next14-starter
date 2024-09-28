"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function NavigationTestpage() {
  // CLIENT SIDE NAVIGATION
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const q = searchParams.get("q");
//   console.log(q);
  const handleClick = () => {
    console.log("cliced: NavigationTestpage");
    router.push("/");
  };
  return (
    <div>
      <Link href="/" prefetch={false}>
        click here
      </Link>
      <button onClick={handleClick}>rederect</button>
    </div>
  );
}

export default NavigationTestpage;
