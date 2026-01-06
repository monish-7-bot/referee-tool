'use client';

interface Option {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  costEstimate: string;
}

interface ComparisonData {
  options: Option[];
  comparison: {
    criteria: string[];
    scores: Record<string, Record<string, string>>;
  };
  tradeoffs: string;
  recommendation: string;
}

interface ComparisonResultsProps {
  data: ComparisonData;
}

export default function ComparisonResults({ data }: ComparisonResultsProps) {
  return (
    <div className="space-y-8">
      {/* Options Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.options.map((option, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{option.description}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-green-700 mb-2">✓ Pros:</h4>
              <ul className="text-sm space-y-1">
                {option.pros.map((pro, i) => (
                  <li key={i} className="text-gray-700">• {pro}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-red-700 mb-2">✗ Cons:</h4>
              <ul className="text-sm space-y-1">
                {option.cons.map((con, i) => (
                  <li key={i} className="text-gray-700">• {con}</li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 border-t">
              <p className="text-sm"><strong>Best For:</strong> {option.bestFor}</p>
              {option.costEstimate && (
                <p className="text-sm mt-2"><strong>Cost:</strong> {option.costEstimate}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold mb-4">Detailed Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2">
                <th className="text-left py-3 px-4 font-semibold">Criteria</th>
                {data.options.map((option, idx) => (
                  <th key={idx} className="text-left py-3 px-4 font-semibold">{option.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.comparison.criteria.map((criterion, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-3 px-4 font-medium">{criterion}</td>
                  {data.options.map((option, optIdx) => (
                    <td key={optIdx} className="py-3 px-4">
                      {data.comparison.scores[option.name]?.[criterion] || 'N/A'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trade-offs Analysis */}
      <div className="bg-amber-50 rounded-lg shadow-md p-6 border-l-4 border-amber-500">
        <h3 className="text-2xl font-bold mb-4">⚖️ Trade-offs Analysis</h3>
        <p className="text-gray-800 whitespace-pre-line">{data.tradeoffs}</p>
      </div>

      {/* Recommendation */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold mb-4">💡 Recommendation</h3>
        <p className="text-gray-800 whitespace-pre-line">{data.recommendation}</p>
      </div>
    </div>
  );
}