import React from 'react';

const sections = [
  ['education', 'Education'],
  ['experience', 'Experience'],
  ['awards', 'Awards'],
  ['research', 'Research'],
  ['activities', 'Activities'],
  ['skills', 'Skills'],
  ['scores', 'Test Scores'],
  ['certifications', 'Certifications'],
  ['history', 'Education History'],
  ['cv', 'CV'],
] as const;

const HomeSectionNavigation = () => {
  const goToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav aria-label="Home page sections" className="section-jump-nav">
      <div className="section-jump-track">
        {sections.map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => goToSection(id)}
            className="section-jump-button"
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default HomeSectionNavigation;
