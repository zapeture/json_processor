"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Editor from "@monaco-editor/react";
import { toast } from "sonner";

const parseAndValidateJson = (input: string) => {
  try {
    return JSON.parse(input);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`JSON Syntax Error: ${error.message}`);
    }
    throw new Error("Invalid JSON format");
  }
};

export function JsonProcessor() {
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState<"format" | "validate">("format");

  const formatJson = () => {
    if (!input.trim()) {
      toast.error("Please enter some JSON to format");
      return;
    }

    try {
      const parsedJson = parseAndValidateJson(input);
      const formattedJson = JSON.stringify(parsedJson, null, 2);
      setInput(formattedJson);
      toast.success("JSON formatted successfully!");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Invalid JSON format",
      );
    }
  };

  const validateJson = () => {
    if (!input.trim()) {
      toast.error("Please enter some JSON to validate");
      return;
    }

    try {
      const parsedJson = parseAndValidateJson(input);
      const formattedJson = JSON.stringify(parsedJson, null, 2);
      setInput(formattedJson);
      toast.success("JSON is valid!");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Invalid JSON format",
      );
    }
  };

  const handleProcess = () => {
    if (activeTab === "format") {
      formatJson();
    } else {
      validateJson();
    }
  };

  return (
    <Card className="p-6">
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "format" | "validate")}
      >
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="format">Format JSON</TabsTrigger>
          <TabsTrigger value="validate">Validate JSON</TabsTrigger>
        </TabsList>

        <div className="grid gap-6">
          <div className="min-h-[500px] border rounded-lg overflow-hidden">
            <Editor
              height="500px"
              defaultLanguage="json"
              value={input}
              onChange={(value: string | undefined) => setInput(value || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                formatOnPaste: true,
                formatOnType: true,
              }}
            />
          </div>

          <Button onClick={handleProcess} className="w-full">
            {activeTab === "format" ? "Format JSON" : "Validate JSON"}
          </Button>
        </div>
      </Tabs>
    </Card>
  );
}
