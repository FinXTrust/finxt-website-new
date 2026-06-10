/** Homepage “Why FinXT” collage only — kept separate from services page images */
const collageImages = [
  '/images/Smart Payment.jpg',
  '/images/AI DataAnalytics.jpg',
  '/images/AI Strategy.jpg',
];

export default function WhatWeDeliverVisual() {
  return (
    <aside className="finxt-deliver-visual" aria-hidden="true">
      <div className="finxt-deliver-collage">
        <div className="finxt-deliver-collage-blob" />

        <svg className="finxt-deliver-collage-orbit" viewBox="0 0 320 320" role="presentation">
          <circle
            cx="160"
            cy="160"
            r="138"
            fill="none"
            stroke="rgba(201, 168, 76, 0.32)"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            className="finxt-deliver-collage-orbit-ring"
          />
          <circle cx="58" cy="92" r="3" className="finxt-deliver-collage-orbit-dot" />
          <circle cx="268" cy="118" r="3" className="finxt-deliver-collage-orbit-dot finxt-deliver-collage-orbit-dot--delay" />
          <circle cx="242" cy="262" r="3" className="finxt-deliver-collage-orbit-dot finxt-deliver-collage-orbit-dot--delay-2" />
        </svg>

        <div className="finxt-deliver-collage-ring" />

        <div className="finxt-deliver-collage-main">
          <img src={collageImages[0]} alt="" loading="lazy" decoding="async" />
        </div>

        <div className="finxt-deliver-collage-satellite finxt-deliver-collage-satellite--top">
          <img src={collageImages[1]} alt="" loading="lazy" decoding="async" />
        </div>

        <div className="finxt-deliver-collage-satellite finxt-deliver-collage-satellite--bottom">
          <img src={collageImages[2]} alt="" loading="lazy" decoding="async" />
        </div>

        <span className="finxt-deliver-collage-wedge" />
        <span className="finxt-deliver-collage-arc" />
        <span className="finxt-deliver-collage-diamond" />
      </div>
    </aside>
  );
}
