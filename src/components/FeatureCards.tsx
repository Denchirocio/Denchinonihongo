import featureCards from '../assets/images/feature-cards.webp';

export default function FeatureCards() {
  return (
    <section className="bg-[#f4f7fe] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <img
          src={featureCards}
          alt="Repasa japonés de forma simple: tarjetas de hiragana, kanji y vocabulario con lecciones cortas y prácticas para aprender a tu ritmo"
          className="w-full"
        />
      </div>
    </section>
  );
}
