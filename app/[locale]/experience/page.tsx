import { readFileSync } from "fs";
import { join } from "path";

export default function ExperiencePage() {
  const filePath = join(process.cwd(), "public", "experience.html");
  const htmlContent = readFileSync(filePath, "utf-8");

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />
  );
}
