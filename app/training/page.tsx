import { readFileSync } from "fs";
import { join } from "path";

export default function TrainingPage() {
  const filePath = join(process.cwd(), "public", "training", "index.html");
  const htmlContent = readFileSync(filePath, "utf-8");

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />
  );
}
