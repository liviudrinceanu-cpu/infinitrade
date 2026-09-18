export default function Nav({ brand, category }) {
  return (
    <nav>
      <a href="/">Acasa</a>
      <a href="/pompe-industriale">Pompe industriale</a>
      <a href="/brand/grundfos">Grundfos</a>
      <a href="/blog">Blog</a>
      <a href="/blog/ghid-selectare-pompa-industriala">Ghid pompe</a>
      <a href="/contact">Contact</a>
      <a href={`/brand/${brand.simpleSlug}`}>{brand.name}</a>
      <a href={`/${category.slug}`}>{category.name}</a>
      <a href="#specificatii">Specificatii</a>
      <a href="https://www.linkedin.com/company/infinitrade-romania">LinkedIn</a>
    </nav>
  );
}
