'use client';

import { useState } from 'react';

interface ComparisonFormProps {
  onSubmit: (data: any) => void;
  loading: boolean;
}

const domains = [
  'Cloud Services (AWS vs GCP vs Azure)',
  'Frontend Frameworks (React vs Vue vs Angular)',
  'Databases (PostgreSQL vs MongoDB vs DynamoDB)',
  'Payment Gateways (Stripe vs Razorpay vs PayPal)',
  'Authentication (Auth0 vs Firebase vs Custom)',
  'CI/CD (GitHub Actions vs GitLab CI vs Jenkins)',
];

export default function ComparisonForm({ onSubmit, loading }: ComparisonFormProps) {
  const [formData, setFormData] = useState({
    domain: domains[0],
    problem: '',
    budget: '',
    scale: '',
    timeline: '',
    teamSize: '',
    priority: 'balanced',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What are you comparing?
        </label>
        <select
          value={formData.domain}
          onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          {domains.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Describe your specific problem or use case *
        </label>
        <textarea
          value={formData.problem}
          onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
          placeholder="E.g., Building an e-commerce platform for 10k+ daily users with real-time inventory tracking..."
          rows={4}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Budget
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Any</option>
            <option value="minimal">Minimal ($0-100/mo)</option>
            <option value="moderate">Moderate ($100-1000/mo)</option>
            <option value="flexible">Flexible ($1000+/mo)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expected Scale
          </label>
          <select
            value={formData.scale}
            onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Any</option>
            <option value="small">Small (&lt;1k users)</option>
            <option value="medium">Medium (1k-100k users)</option>
            <option value="large">Large (100k+ users)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Any</option>
            <option value="immediate">Immediate (&lt;1 week)</option>
            <option value="short">Short (1-4 weeks)</option>
            <option value="flexible">Flexible (1+ months)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Team Size
          </label>
          <select
            value={formData.teamSize}
            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Any</option>
            <option value="solo">Solo Developer</option>
            <option value="small">Small Team (2-5)</option>
            <option value="large">Large Team (5+)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Priority
        </label>
        <select
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="balanced">Balanced</option>
          <option value="cost">Minimize Cost</option>
          <option value="speed">Speed to Market</option>
          <option value="scalability">Scalability</option>
          <option value="simplicity">Ease of Use</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
      >
        {loading ? 'Analyzing Options...' : 'Compare Options'}
      </button>
    </form>
  );
}