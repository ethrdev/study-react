import DropdownSimple from "@/components/DropdownSimple";
import DropdownDynamic from "@/components/DropdownDynamic";

const products = await fetch("https://tryout-api.vercel.app/api/products").then((res) => res.json());

export default async function DropdownPage () {
    return (
    <>
    <div className="flex flex-row gap-4">
        <DropdownSimple />
        <DropdownDynamic products={products} />
    </div>
    </>
    );
}