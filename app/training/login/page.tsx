import { readFileSync } from "fs";
import { join } from "path";

export default function LoginPage() {
  const filePath = join(process.cwd(), "public", "training", "login", "index.html");
  const htmlContent = readFileSync(filePath, "utf-8");

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />
  );
}
