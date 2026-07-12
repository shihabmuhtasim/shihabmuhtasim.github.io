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
    <nav aria-label="Home page sections" className="mb-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap justify-center gap-2">
        {sections.map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => goToSection(id)}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm transition-all duration-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default HomeSectionNavigation;
