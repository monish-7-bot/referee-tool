import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateComparison(
  domain: string,
  problem: string,
  constraints: {
    budget?: string;
    scale?: string;
    timeline?: string;
    teamSize?: string;
    priority?: string;
  }
) {
  const prompt = `You are a technology consultant helping developers make informed decisions.

Domain: ${domain}
Problem: ${problem}
Constraints:
- Budget: ${constraints.budget || 'Not specified'}
- Scale: ${constraints.scale || 'Not specified'}
- Timeline: ${constraints.timeline || 'Not specified'}
- Team Size: ${constraints.teamSize || 'Not specified'}
- Priority: ${constraints.priority || 'Not specified'}

Provide exactly 3 relevant options for this scenario. For each option, provide:
1. Name and brief description
2. 4-5 specific pros (based on the constraints)
3. 4-5 specific cons (based on the constraints)
4. Best use case
5. Cost estimate (if applicable)

Then provide:
- A comparison table highlighting key differences
- Trade-off analysis explaining what you gain/lose with each choice
- A nuanced recommendation

Format as valid JSON with this structure:
{
  "options": [
    {
      "name": "Option Name",
      "description": "Brief description",
      "pros": ["pro1", "pro2", ...],
      "cons": ["con1", "con2", ...],
      "bestFor": "Use case description",
      "costEstimate": "Cost range"
    }
  ],
  "comparison": {
    "criteria": ["Criterion 1", "Criterion 2", ...],
    "scores": {
      "Option Name": {"Criterion 1": "rating/description", ...}
    }
  },
  "tradeoffs": "Detailed trade-off analysis",
  "recommendation": "Nuanced recommendation"
}

Respond ONLY with valid JSON.`;

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama-3.3-70b-versatile", // Fast and free
    temperature: 0.7,
    max_tokens: 4096,
  });

  const content = chatCompletion.choices[0]?.message?.content || "{}";
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }
  
  return JSON.parse(content);
}