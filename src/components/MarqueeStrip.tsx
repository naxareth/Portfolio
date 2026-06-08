export default function MarqueeStrip({ 
  items = "Python +++ TypeScript +++ SQL +++ Next.js +++ Django +++ Ollama +++ Docker +++ FastAPI +++ Solidity +++ PostgreSQL +++ Prisma +++ Git +++ " 
}: { items?: string }) {
  const repeatedItems = items.repeat(20);

  return (
    <div className="border-y border-border py-6 bg-surface [text-shadow:none]">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_150px,black_calc(100%-150px),transparent)]">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-3xl font-serif text-muted tracking-wide mx-4">
            {repeatedItems}
          </span>
          <span className="text-3xl font-serif text-muted tracking-wide mx-4">
            {repeatedItems}
          </span>
        </div>
      </div>
    </div>
  )
}
