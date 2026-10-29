#!/usr/bin/env node
// Lesson 1 check: confirms notes.md exists and isn't empty.
// It doesn't judge the content — a reviewer does that.

import fs from "node:fs";
import path from "node:path";

const file = path.join(process.cwd(), "notes.md");

if (!fs.existsSync(file)) {
  console.error("FAIL  notes.md is missing. Add it with your prediction and Claude's summary, then push again.");
  process.exit(1);
}

if (fs.readFileSync(file, "utf8").trim().length === 0) {
  console.error("FAIL  notes.md is empty. Add your prediction and Claude's summary, then push again.");
  process.exit(1);
}

console.log("PASS  notes.md is present and has content.");
