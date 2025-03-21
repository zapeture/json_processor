import { JsonProcessor } from "@/components/json-processor";

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">JSON Processor</h1>
      <p className="text-center text-muted-foreground mb-8">
        Format and validate your JSON with ease. Paste your JSON in the editor
        below.
      </p>
      <JsonProcessor />
    </div>
  );
}
