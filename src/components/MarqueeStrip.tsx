export default function MarqueeStrip({ 
  items = "Python +++ TypeScript +++ SQL +++ Next.js +++ Django +++ Ollama +++ Docker +++ FastAPI +++ Solidity +++ PostgreSQL +++ Prisma +++ Git +++ " 
}: { items?: string }) {
  const repeatedItems = items.repeat(4);

  return (
    <div className="overflow-hidden border-y border-border py-6 bg-surface">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-3xl font-serif text-muted tracking-wide mx-4">
          {repeatedItems}
        </span>
        <span className="text-3xl font-serif text-muted tracking-wide mx-4">
          {repeatedItems}
        </span>
      </div>
    </div>
  )
}
