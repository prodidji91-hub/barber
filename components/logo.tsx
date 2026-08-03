export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/vista-logo.jpg"
      alt="Vista Barber Lounge"
      className={`w-auto rounded-md object-contain ${className ?? ""}`}
    />
  )
}
