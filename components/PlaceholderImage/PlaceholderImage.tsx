import type { JSX } from "react";
import Image from "next/image";

type PlaceholderTone =
  | "default"
  | "champ"
  | "taupe"
  | "burgundy"
  | "black";

type PlaceholderImageProps = {
  label: string;
  className?: string;
  tone?: PlaceholderTone;
  src?: string;
  priority?: boolean;
  sizes?: string;
};

const TONE_CLASS: Record<PlaceholderTone, string> = {
  default: "",
  champ: "ph--champ",
  taupe: "ph--taupe",
  burgundy: "ph--burgundy",
  black: "ph--black",
};

export const PlaceholderImage = ({
  label,
  className = "",
  tone = "default",
  src,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
}: PlaceholderImageProps): JSX.Element => {
  const toneClass = TONE_CLASS[tone];
  const hasMedia = Boolean(src);

  return (
    <div
      className={`ph ${toneClass} ${hasMedia ? "ph--media" : ""} ${className}`.trim()}
      role={hasMedia ? undefined : "img"}
      aria-label={hasMedia ? undefined : label}
    >
      {hasMedia && src ? (
        <Image
          src={src}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
};
