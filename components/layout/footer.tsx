import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 text-center text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
      <p>
        &copy; {new Date().getFullYear()} Junho Noh. a fork of{" "}
        <Link
          href="https://github.com/ahmadrafidev/scho"
          className="underline hover:text-black dark:hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="scho"
        >
          scho
        </Link>
      </p>
    </footer>
  );
}
