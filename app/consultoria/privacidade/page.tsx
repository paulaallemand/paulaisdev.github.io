import { readFileSync } from "fs";
import { join } from "path";

export default function PrivacidadePage() {
  const filePath = join(process.cwd(), "public", "consultoria", "privacidade.html");
  const htmlContent = readFileSync(filePath, "utf-8");

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />
  );
}
