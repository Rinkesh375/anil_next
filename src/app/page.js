"use client"
import  Link  from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/about">Go To About Page</Link>
        <Link href="/contact">Go To Contact Page</Link>
      </div>
      <Child />
      <button onClick={() => alert("Alert")}>Click</button>
    </main>
  );
}

function Child() {
  return <div>Child</div>;
}
