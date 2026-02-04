import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  MapPin,
  Calendar,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const Education = () => {
  const [showBscThesisAbstract, setShowBscThesisAbstract] = useState(false);
  const [showMobility, setShowMobility] = useState(false);

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
        Education
      </h2>

      {/* MSc */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              M.Sc. in Artificial Intelligence for Image Processing and Computer Vision (IPCVAI)
            </h3>
            <p className="text-gray-700 mt-1">
              Erasmus Mundus Joint Master’s Programme
            </p>
            <div className="mt-2 space-y-1 text-gray-700">
              <p className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                Sep 2025 – Current
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                Budapest • Madrid • Bordeaux
              </p>
              <p className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                120 ECTS
              </p>
            </div>
          </div>

          <a
            href="https://ipcv.eu/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium mt-1 md:mt-0"
          >
            Program website
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="mt-5">
          <button
            onClick={() => setShowMobility(!showMobility)}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
          >
            {showMobility ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Hide mobility structure
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                View mobility structure
              </>
            )}
          </button>

          {showMobility && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md border-l-4 border-blue-600 animate-fadeIn">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Sep 2025 – Jan 2026: Pázmány Péter Catholic University (Budapest, Hungary)</li>
                <li>Feb 2026 – May 2026: Universidad Autónoma de Madrid (Madrid, Spain)</li>
                <li>Sep 2026 – Jan 2027: University of Bordeaux (Bordeaux, France)</li>
                <li>6 months: Internship in academia or industry</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* BSc */}
      <div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              B.Sc. in Computer Science and Engineering (CSE)
            </h3>
            <p className="text-gray-700 mt-1">BRAC University</p>
            <div className="mt-2 space-y-1 text-gray-700">
              <p className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                Jun 2021 – Nov 2024
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                Dhaka, Bangladesh
              </p>
              <p className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                CGPA: <span className="font-semibold ml-1">4.00 / 4.00</span> • 136 credits
              </p>
            </div>
            <p className="text-gray-700 mt-3">
              <span className="font-semibold">Thesis:</span> Analyzing and Predicting Trends in Contemporary Social Discourse through Hashtag Campaigns
            </p>
          </div>

          <a
            href="https://www.bracu.ac.bd/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium mt-1 md:mt-0"
          >
            University website
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="mt-5">
          <button
            onClick={() => setShowBscThesisAbstract(!showBscThesisAbstract)}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
          >
            {showBscThesisAbstract ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Hide thesis abstract
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                View thesis abstract
              </>
            )}
          </button>

          {showBscThesisAbstract && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md border-l-4 border-blue-600 animate-fadeIn">
              <p className="text-gray-700 leading-relaxed">
                In the current landscape of social media, hashtags play a significant observable role in
                boosting the movement of information across a diverse range of fields and people. This
                research aims to identify and then examine extremely popular hashtags on social media
                and uncover the characteristics that make these hashtags popular. It attempts to follow
                the hashtag along its journey over time in gaining and losing popularity and in doing so,
                extrapolates to analyze the boom of past trends over time and the impact that hashtags
                have in propagating information.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The research further tries to create a structure for a network showcasing the propagation
                of information and interaction between users as they engage using the hashtag in an attempt
                to understand why and how these hashtags reach such a diversified range of groups and people.
                It also attempts to be able to predict and forecast the trend and direction of the hashtag and
                the interaction it generates after the interaction period.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Using a mixture of modern techniques such as network science and graph theory concepts,
                unsupervised machine learning tools, greedy modularity maximization model, and many other
                natural language processing (NLP) tools such as LSTM, there is the potential to understand
                the influence of popularity through hashtags and be able to predict the popularity of hashtags.
              </p>
              <p className="text-gray-700 italic mt-4">
                Keywords: Hashtags, Information Propagation, Hashtag Characteristics, Network Science, Machine learning, Natural Language Processing (NLP), Trends Analysis, Predictive
                Modeling, Greedy Modularity Maximization, LSTM
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;