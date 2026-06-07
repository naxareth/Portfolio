export type Project = {
  slug: string
  title: string
  tags: string[]
  featured: boolean
  brief: string
  repo: string
  depth: 'featured' | 'brief' | 'placeholder'
  caseStudy?: {
    problem?: string
    what?: string
    architecture?: string[]
    stack?: string[]
    outcome?: string
    reflection?: string
  }
}

export const projects: Project[] = [
  {
    slug: 'intellegode',
    title: 'Intellegode',
    tags: ['VS Code Extension', 'TypeScript', 'Ollama', 'Local LLM'],
    featured: false,
    brief: 'A VS Code extension that uses a locally-running LLM (Qwen via Ollama) to quiz developers on code they just wrote or generated.',
    repo: 'https://github.com/naxareth/intellegode',
    depth: 'featured',
    caseStudy: {
      problem: "Developers (including the author) were using AI tools to generate code they didn't fully understand. The code worked — but the developer didn't own it. This is \"concept debt\": code that runs but isn't comprehended.",
      what: "Intellegode is a VS Code extension that uses a locally-running LLM (Qwen via Ollama) to quiz developers on code they just wrote or generated. Highlight a block → press Ctrl+Alt+Q → receive a comprehension question in the sidebar → get feedback. Everything runs locally. No cloud, no subscriptions.",
      architecture: [
        "VS Code Extension API (TypeScript)",
        "Ollama as the local LLM runtime",
        "Qwen3.5 4B as the code comprehension model",
        "GitHub Actions for CI",
        "Docker Compose for development environment"
      ],
      stack: ["TypeScript", "Ollama", "Qwen3.5 4B", "Docker"],
      outcome: "Published to VS Code Marketplace (v0.0.1, April 2026). Roadmap includes concept debt tracking, project ownership mapping, and reconstruction challenges.",
      reflection: "This project came directly from identifying a personal failure mode — building things without truly understanding them. Intellegode is an attempt to build a tool that forces the habit of understanding. The irony of building it while learning to code independently was not lost."
    }
  },
  {
    slug: 'vector',
    title: 'VECTOR',
    tags: ['Blockchain', 'AI', 'Next.js', 'Capstone', 'PostgreSQL'],
    featured: true,
    brief: 'VECTOR is a blockchain-based micro-credentialing platform built as a capstone project at PHINMA University of Pangasinan. It issues ERC-1155 soulbound tokens for academic credentials on the Polygon Amoy Testnet, backed by an AI engine (Google Gemini 1.5 Flash) that extracts skills from resumes and predicts skill decay using linear regression. The system includes RBAC, AES-256 encryption, and Prisma ORM over Supabase PostgreSQL.',
    repo: 'https://github.com/naxareth/vector-system',
    depth: 'brief',
    caseStudy: {
      stack: ['Next.js 14 App Router', 'TypeScript', 'Supabase', 'Prisma', 'Hardhat', 'Solidity', 'Polygon Amoy', 'Gemini 1.5 Flash', 'TailwindCSS', 'RainbowKit']
    }
  },
  {
    slug: 'orbit',
    title: 'ORBIT',
    tags: ['IoT', 'AI', 'Django', 'Flutter', 'PostgreSQL'],
    featured: false,
    brief: 'ORBIT is a full-stack IoT + AI project built for Advanced Programming. It integrates hardware IoT scripts with a Django REST API backend, a Flutter mobile client, and a Next.js web frontend. The system bridges physical sensors with an AI processing layer and stores structured data in PostgreSQL.',
    repo: 'https://github.com/JustinEscano/ORBIT',
    depth: 'brief',
    caseStudy: {
      stack: ['Python (Django)', 'Dart (Flutter)', 'TypeScript (Next.js)', 'PostgreSQL', 'C++ (IoT scripts)']
    }
  },
  {
    slug: 'placeholder-project-4',
    title: '[Upcoming]',
    tags: ['In Progress'],
    featured: false,
    brief: 'Something in progress. Check back.',
    repo: '',
    depth: 'placeholder'
  }
]
