import { Link } from "@tanstack/react-router";
import logoAsset from "../assets/Logo_Tagline.png.asset.json";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      to="/"
      className={`official-brand ${inverse ? "official-brand-footer" : ""}`}
      aria-label="Eastern Med Supplies home"
    >
      <img src={logoAsset.url} alt="Eastern Med Supplies — Better Supplies. Healthier Tomorrow." />
    </Link>
  );
}
