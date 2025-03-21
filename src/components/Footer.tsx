"use client";
export default function Footer() {
  return (
    <footer className="py-4 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()}{" "}
      <a
        href="https://fortunezviregei.com"
        target="_blank"
        className="hover:underline"
      >
        Fortune Zviregei
      </a>
    </footer>
  );
}
