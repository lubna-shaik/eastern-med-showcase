export const productCategories = [
  "All Products",
  "Medical Equipment",
  "Medical Consumables",
  "Surgical Products",
  "Diagnostic Products",
  "Hospital Supplies",
  "Other Medical Products",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type Product = {
  slug: string;
  name: string;
  category: Exclude<ProductCategory, "All Products">;
  description: string;
  features: string[];
  specifications: string[];
  applications: string[];
  imagePosition: string;
};

export const products: Product[] = [
  { slug: "patient-monitoring-system", name: "Patient Monitoring System", category: "Medical Equipment", description: "A configurable monitoring solution for clinical environments. Product details are illustrative and can be replaced.", features: ["Clear clinical display", "Configurable monitoring parameters", "Portable format"], specifications: ["Model: To be confirmed", "Power: To be confirmed", "Warranty: To be confirmed"], applications: ["Hospital wards", "Critical care settings", "Clinical observation"], imagePosition: "12% center" },
  { slug: "sterile-procedure-pack", name: "Sterile Procedure Pack", category: "Medical Consumables", description: "A convenient selection of single-use procedural essentials, presented as editable catalogue content.", features: ["Single-use format", "Procedure-ready packaging", "Custom pack options"], specifications: ["Contents: To be confirmed", "Pack size: To be confirmed", "Sterility: To be confirmed"], applications: ["General procedures", "Outpatient care", "Clinical preparation"], imagePosition: "52% 78%" },
  { slug: "surgical-instrument-set", name: "Surgical Instrument Set", category: "Surgical Products", description: "A professional instrument set for institutional procurement. Final configurations are available on enquiry.", features: ["Organised instrument tray", "Multiple configuration options", "Reusable format"], specifications: ["Material: To be confirmed", "Set count: To be confirmed", "Packaging: To be confirmed"], applications: ["Operating theatres", "Procedure rooms", "Surgical training"], imagePosition: "48% 70%" },
  { slug: "digital-vital-signs-kit", name: "Digital Vital Signs Kit", category: "Diagnostic Products", description: "A practical diagnostic kit designed to support routine clinical assessment workflows.", features: ["Compact design", "Clear digital readout", "Easy clinical handling"], specifications: ["Measurement range: To be confirmed", "Battery: To be confirmed", "Accessories: To be confirmed"], applications: ["Clinics", "Screening programmes", "Primary care"], imagePosition: "89% 55%" },
  { slug: "clinical-linen-range", name: "Clinical Linen Range", category: "Hospital Supplies", description: "A versatile range of clinical linen options for hospitals and care institutions.", features: ["Institutional supply options", "Multiple sizes available", "Bulk enquiry support"], specifications: ["Material: To be confirmed", "Sizes: To be confirmed", "Colours: To be confirmed"], applications: ["Patient rooms", "Treatment areas", "Clinical facilities"], imagePosition: "46% 20%" },
  { slug: "portable-suction-unit", name: "Portable Suction Unit", category: "Other Medical Products", description: "A compact suction solution shown as a placeholder for additional specialist medical products.", features: ["Portable housing", "Simple controls", "Clinical-use format"], specifications: ["Flow rate: To be confirmed", "Capacity: To be confirmed", "Power: To be confirmed"], applications: ["Emergency care", "Patient transfer", "Clinical support"], imagePosition: "88% 20%" },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
