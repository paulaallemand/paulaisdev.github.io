import { readFileSync } from "fs";
import { join } from "path";

export default function TrilhasPage() {
  const filePath = join(process.cwd(), "public", "training", "trilhas", "index.html");
  const htmlContent = readFileSync(filePath, "utf-8");

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />
  );
}
