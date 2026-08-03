import Link from "next/link";
import { clsx } from "clsx";

/**
 * Secondary navigation inside content. Deliberately not a button:
 * only the single primary CTA on a page carries button weight.
 */
export function TextLink({
  href,
  label,
  external = false,
  className,
}: {
  href: string;
  label: string;
  external?: boolean;
  className?: string;
}) {
  const cls = clsx(
    "inline-flex items-center gap-1 text-[#00B4D8] hover:text-[#E6EDF3] text-sm font-medium",
    "underline underline-offset-4 decoration-[#00B4D8]/40 hover:decoration-[#E6EDF3]",
    "transition-colors duration-200",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}
