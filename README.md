# The Referee

The Referee is a decision support tool that helps users compare multiple options and understand trade-offs instead of receiving a single generic answer.

It is designed primarily for technical and product decisions such as comparing cloud providers, frameworks, databases, or architectures based on real constraints like budget, scale, timeline, team size, and priorities.

Project Overview

Developers often ask questions like "Which cloud provider should I use?" or "Which framework is better?" but most tools return a single answer without explaining trade-offs.

The Referee solves this by generating structured comparisons that include:
- Multiple options
- Pros and cons for each option
- A comparison table across criteria
- A trade-off analysis explaining what is gained and lost
- A nuanced recommendation based on context

The goal is to help users choose wisely rather than simply consume answers.

Features

- Preset and custom comparisons
- Constraint-based analysis (budget, scale, timeline, team size, priority)
- Structured JSON-driven output
- Clean, responsive UI
- Designed for explainability over correctness



Architecture

- Frontend:Next.js (App Router) + TypeScript + TailwindCSS
- Backend:API route in Next.js
- AI Model:Groq-hosted LLM
- Prompting:Structured JSON output for consistent rendering

Setup and Run

1. Clone the repository
git clone https://github.com/monish-7-bot/referee-tool.git

2. Install dependencies
npm install

3. Create a `.env.local` file and add your Groq 
GROQ_API_KEY=your_groq_api_key_here

4.Run the development server
npm run dev

5. Open http://localhost:3000 in your browser

Role of Kiro

Kiro was used as a development accelerator to assist with:
- Prompt design
- Debugging integration issues
- Iterating on UI and API logic
- Refining structured reasoning output

All architectural decisions, product design, and validation were done manually to ensure alignment with the challenge goals.



Notes

This project was built for the Kiro Week 6 Challenge: "The Referee".
The application runs locally for development and demonstration purposes.
Deployment is not required for submission.

License

MIT License


