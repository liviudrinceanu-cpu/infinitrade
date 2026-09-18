export default function Nav({ brand, category }) {
  return (
    <nav>
      <a href="/">Acasa</a>
      <a href="/pompe-industriale">Pompe industriale</a>
      <a href="/brand/grundfos">Grundfos</a>
      <a href="/blog">Blog</a>
      <a href="/blog/ghid-selectare-pompa-industriala">Ghid pompe</a>
      <a href="/contact">Contact</a>
      {/* the one thing this fixture exists to catch: a dead internal link */}
      <a href="/categoria-desfiintata-2024">Categorie veche</a>
      <a href="#specificatii">Specificatii</a>
    </nav>
  );
}
