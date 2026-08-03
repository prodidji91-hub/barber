import { Star } from "lucide-react"

export function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-gold text-gold`} aria-hidden="true" />
      ))}
    </span>
  )
}
