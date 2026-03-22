import { cn } from "@/lib/utils"

/**
 * MagicUI-style Marquee — pure CSS implementation, no extra dependencies.
 * Duplicates children `repeat` times so the loop is seamless.
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--marquee-gap:1rem] [gap:var(--marquee-gap)]",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
      {...props}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--marquee-gap)]",
            vertical
              ? "flex-col [animation:marquee-vertical_var(--duration,40s)_linear_infinite]"
              : cn(
                  "flex-row",
                  reverse ? "animate-marquee-reverse" : "animate-marquee",
                ),
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
