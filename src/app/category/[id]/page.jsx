import { notFound } from "next/navigation";
import { api } from "@/lib/api";
import CategoryProducts from "@/components/CategoryProducts";

export default async function CategoryPage({ params }) {
    const { id } = await params;

    const [category, products] = await Promise.all([
        api.getCategory(id),
        api.getProducts({ category: id }),
    ]);

    if (!category) notFound();

    return (
        <CategoryProducts
            category={category}
            products={products ?? []}
            failed={products === null}
        />
    );
}