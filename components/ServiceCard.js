import { useState } from 'react';

export default function ServiceCard({ service, cardId, isOpen, onToggle }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="finxt-service-card group relative flex flex-col">
      <div className="finxt-service-card-media">
        {!imageError ? (
          <img
            src={service.image}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center finxt-card-body">
            Service image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050912]/85 via-[#050912]/20 to-transparent transition group-hover:from-[#050912]/75" />
      </div>

      <div className="finxt-service-card-body flex flex-1 flex-col">
        <h3 className="finxt-card-title leading-snug">{service.title}</h3>

        <p className="finxt-card-body mt-3 flex-1">{service.points[0]}</p>

        {isOpen && service.points.length > 1 && (
          <p className="finxt-body-muted mt-4">{service.points[1]}</p>
        )}

        {service.points.length > 1 && (
          <button
            type="button"
            onClick={() => onToggle(cardId)}
            className="mt-5 inline-flex self-start text-sm font-semibold text-finxt-gold transition hover:text-finxt-gold-light"
          >
            {isOpen ? 'Show less' : 'Read more'} →
          </button>
        )}
      </div>
    </article>
  );
}
