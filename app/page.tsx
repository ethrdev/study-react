import Link from "next/link";


export default async function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Link  href="/filters">Filters</Link>
      <Link href="/dropdowns">Dropdowns</Link>
      <Link href="/hooks">Hooks</Link>
    </div>
  );
}
