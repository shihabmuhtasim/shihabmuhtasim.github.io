import React, { useState } from 'react';
import { GraduationCap, Book, ChevronDown, ChevronUp } from 'lucide-react';

const Education = () => {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
        Latest Education
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li className="text-lg">
          Bachelor's in Computer Science and Engineering (CSE) at BRAC University
        </li>
        <li className="text-lg font-semibold">
          CGPA: 4.00
        </li>
        <li className="text-lg">
          Thesis: Analyzing and Predicting Trends in Contemporary Social Discourse through Hashtag Campaigns
        </li>
      </ul>

      <div className="mt-6">
        <button 
          onClick={() => setShowAbstract(!showAbstract)}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          {showAbstract ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Hide Abstract
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              View Abstract
            </>
          )}
        </button>

        {showAbstract && (
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
              The research further tries to create a structure for a
              network showcasing the propagation of information and interaction between users as they
              engage using the hashtag in an attempt to understand why and how these hashtags reach
              such a diversified range of groups and people. It also attempts to be able to predict and
              forecast the trend and direction of the hashtag and the interaction it generates after the
              interaction period.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Using a mixture of modern techniques such as network science and graph
              theory concepts, unsupervised machine learning tools, greedy modularity maximization
              model, and many other natural language processing (NLP) tools such as LSTM, there is
              the potential to understand the influence of popularity through hashtags and be able to
              predict the popularity of hashtags.
            </p>
            <p className="text-gray-700 italic mt-4">
              Keywords: Hashtags, Information Propagation, Hashtag Characteristics, Network Science, Machine learning, Natural Language Processing(NLP), Trends Analysis, Predictive
              Modeling, Greedy Modularity Maximization, LSTM
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;