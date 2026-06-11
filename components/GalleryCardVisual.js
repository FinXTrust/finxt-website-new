import { getCaseStudyCardLabel } from '../data/caseStudies';

export default function GalleryCardVisual({ study }) {
  return (
    <div className="finxt-cs-gallery-card-visual finxt-cs-gallery-card-visual--photo" aria-hidden="true">
      <img
        src={study.galleryImage}
        alt=""
        loading="lazy"
        decoding="async"
        className="finxt-cs-gallery-card-photo"
        style={study.galleryImagePosition ? { objectPosition: study.galleryImagePosition } : undefined}
      />
      <div className="finxt-cs-gallery-card-photo-scrim" aria-hidden="true" />
      <div className="finxt-cs-gallery-card-photo-vignette" aria-hidden="true" />
      <span className="finxt-cs-gallery-card-badge">{getCaseStudyCardLabel(study)}</span>
    </div>
  );
}
