import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="max-auto text-center">
      <p>
        Developed by{" "}
        <Link
          href="https://jhonatanoliveira.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-violet-500"
        >
          Jhonatan Oliveira
        </Link>
        .
      </p>
    </footer>
  );
};
