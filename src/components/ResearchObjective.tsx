import React from 'react';
import { FlaskConical, Calendar, ExternalLink } from 'lucide-react';

type ResearchProject = {
  title: string;
  date: string;
  description: string;
  link?: string;
};

const ResearchProjects = () => {
  const projects: ResearchProject[] = [
    {
      title:
        'Review & Evaluation of State-of-the-Art 3D Reconstruction based on NeRFs',
      date: 'Jan 2026 – Current',
      description:
        'Tutored research development project on Neural Radiance Fields (NeRFs): surveying NeRF-based methods, implementing and experimenting on suitable datasets, and analyzing performance to support benchmarking and reproducible research (with potential extensions for improvements).',
    },
    {
      title:
        'Analyzing and Predicting Trends in Contemporary Social Discourse through Hashtag Campaigns',
      date: '2023 – 2024',
      description:
        'Studied social-media hashtag popularity by modeling information diffusion and user-interaction networks, then forecasting trend popularity using time-series methods (LSTM) alongside network science, graph theory, and NLP techniques.',
      link: 'https://bit.ly/shihab_ieeepaper',
    },
    {
      title:
        'Polyp Segmentation and Identification from Endoscopic Images Using Deep Learning',
      date: '2025',
      description:
        'Proposed a deep learning approach for automatic colorectal polyp segmentation in endoscopic images; evaluated convolutional and transformer-based models on the Kvasir-SEG dataset to improve detection accuracy. Co-supervised this research project.',
      link: 'https://bit.ly/4qtEV0T',
    },
  ];

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <FlaskConical className="w-6 h-6 mr-2 text-blue-600" />
        Research Projects
      </h2>

      <div className="space-y-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-5 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-300 hover:border-blue-200 hover:shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{p.description}</p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                <p className="flex items-center text-gray-700">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  {p.date}
                </p>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
                  >
                    View link
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchProjects;