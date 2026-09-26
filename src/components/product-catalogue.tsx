import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import productCollection from "@/assets/product-collection.jpg";
import { productCategories, products, type Product } from "@/data/products";
import { Button } from "./ui/button";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const emailSubject = encodeURIComponent(`Product enquiry: ${product.name}`);
  return <article className="product-card reveal" style={{ animationDelay: `${index * 70}ms` }}><div className="product-image"><img src={productCollection} alt={`${product.name} catalogue placeholder`} width={1600} height={1008} loading="lazy" style={{ objectPosition: product.imagePosition }} /></div><div className="p-6"><p className="product-category">{product.category}</p><h3>{product.name}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{product.description}</p><div className="mt-6 flex flex-wrap gap-2"><Button asChild variant="outline"><Link to="/products/$slug" params={{ slug: product.slug }}>View Details <ArrowRight /></Link></Button><Button asChild variant="soft"><a href={`mailto:info@easternmedsupplies.com?subject=${emailSubject}`}><Mail /> Enquire Now</a></Button></div></div></article>;
}

export function ProductGrid({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<(typeof productCategories)[number]>("All Products");
  const filtered = products.filter((product) => category === "All Products" || product.category === category);
  const visible = preview ? filtered.slice(0, 3) : filtered;
  return <><div className="filter-row" role="group" aria-label="Filter products by category">{productCategories.map((item) => <Button key={item} variant={category === item ? "filterActive" : "filter"} size="sm" onClick={() => setCategory(item)}>{item}</Button>)}</div><div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{visible.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>{preview && <div className="mt-10 text-center"><Button asChild variant="premium" size="lg"><Link to="/products">View full catalogue <ArrowRight /></Link></Button></div>}</>;
}
