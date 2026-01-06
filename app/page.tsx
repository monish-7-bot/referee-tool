'use client';

import { useState } from 'react';
import ComparisonForm from '@/app/components/ComparisonForm';
import ComparisonResults from '@/app/components/ComparisonResults';

export default function Home() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (formData: any) => {
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await fetch('/api/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: formData.domain,
          problem: formData.problem,
          constraints: {
            budget: formData.budget,
            scale: formData.scale,
            timeline: formData.timeline,
            teamSize: formData.teamSize,
            priority: formData.priority,
          },
        }),
      });

      if (!response.ok) throw new Error('Failed to generate comparison');

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError('Failed to generate comparison. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🏁 The Referee
          </h1>
          <p className="text-xl text-gray-600">
            Get unbiased comparisons and trade-off analysis for your tech decisions
          </p>
        </div>

        <ComparisonForm onSubmit={handleSubmit} loading={loading} />

        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {results && (
          <div className="mt-12">
            <ComparisonResults data={results} />
          </div>
        )}
      </div>
    </main>
  );
}