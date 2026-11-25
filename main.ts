import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Door opened 23 times. Food taken: none. Conclusion: you came for the light.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
