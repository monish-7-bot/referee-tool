import { NextResponse } from 'next/server';
import { generateComparison } from '@/lib/groq';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { domain, problem, constraints } = body;

    if (!domain || !problem) {
      return NextResponse.json({ error: 'Domain and problem are required' }, { status: 400 });
    }

    const comparison = await generateComparison(domain, problem, constraints);
    return NextResponse.json(comparison);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate comparison' }, { status: 500 });
  }
}
