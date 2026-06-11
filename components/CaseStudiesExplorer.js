import { useCallback, useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { caseStudies } from '../data/caseStudies';
import CaseStudiesIndex from './CaseStudiesIndex';
import CaseStudiesPageIntro from './CaseStudiesPageIntro';
import CaseStudySnapshot from './CaseStudySnapshot';

function getStudyIndex(studyId) {
  return caseStudies.findIndex((study) => study.id === studyId);
}

function getStudyFromHash() {
  if (typeof window === 'undefined') return null;

  const hash = window.location.hash.replace('#', '');
  if (!hash) return null;

  return caseStudies.find((study) => study.id === hash)?.id ?? null;
}

const DEFAULT_STUDY_ID = caseStudies[0]?.id ?? null;

function applyStudySelection(studyId, setSelectedId, setActiveIndex) {
  if (!studyId) {
    setSelectedId(DEFAULT_STUDY_ID);
    setActiveIndex(0);
    return;
  }

  setSelectedId(studyId);
  const index = getStudyIndex(studyId);
  if (index >= 0) {
    setActiveIndex(index);
  }
}

export default function CaseStudiesExplorer() {
  const [selectedId, setSelectedId] = useState(DEFAULT_STUDY_ID);
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef(null);
  const shouldScrollRef = useRef(false);

  const selectStudy = useCallback((studyId, { toggle = false, scroll = false } = {}) => {
    shouldScrollRef.current = scroll;

    setSelectedId((current) => {
      let next = studyId;

      if (toggle && current === studyId) {
        next = null;
      } else if (!toggle && current === studyId) {
        return current;
      }

      if (next && typeof window !== 'undefined') {
        const url = `${window.location.pathname}${window.location.search}#${next}`;
        window.history.replaceState(null, '', url);
      } else if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }

      return next;
    });
  }, []);

  useEffect(() => {
    applyStudySelection(getStudyFromHash() ?? DEFAULT_STUDY_ID, setSelectedId, setActiveIndex);

    const onHashChange = () => {
      applyStudySelection(getStudyFromHash(), setSelectedId, setActiveIndex);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (!selectedId) return;

    const index = getStudyIndex(selectedId);
    if (index >= 0) {
      setActiveIndex(index);
    }
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId || !panelRef.current || !shouldScrollRef.current) return undefined;

    shouldScrollRef.current = false;

    const frame = requestAnimationFrame(() => {
      panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => cancelAnimationFrame(frame);
  }, [selectedId]);

  const selectedStudy = caseStudies.find((study) => study.id === selectedId);
  const selectedIndex = selectedStudy ? getStudyIndex(selectedStudy.id) : 0;

  return (
    <div className="finxt-cs-explorer">
      <ScrollReveal className="finxt-cs-stage">
        <div className="finxt-cs-stage-copy">
          <CaseStudiesPageIntro />
        </div>

        <div
          className="finxt-scroll-reveal finxt-cs-stage-gallery"
          style={{ '--reveal-delay': '120ms' }}
        >
          <CaseStudiesIndex
            selectedId={selectedId}
            onSelect={selectStudy}
            activeIndex={activeIndex}
            onActiveIndexChange={setActiveIndex}
          />
        </div>
      </ScrollReveal>

      {selectedStudy && (
        <div
          key={selectedStudy.id}
          ref={panelRef}
          className="finxt-cs-snapshot-panel finxt-cs-ed-list"
        >
          <CaseStudySnapshot study={selectedStudy} index={selectedIndex} />
        </div>
      )}
    </div>
  );
}
