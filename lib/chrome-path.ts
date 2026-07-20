// lib/chrome-path.ts
import fs from "fs";

/**
 * Finds an already-installed Chromium-based browser instead of relying on
 * Puppeteer's own browser download, which is the step that failed on
 * Windows ("Could not find Chrome"). Checks Chrome and Edge, since every
 * Windows machine ships with Edge even when Chrome isn't installed.
 *
 * Override by setting CHROME_PATH in a .env.local file if your browser is
 * installed somewhere not listed here.
 */
export function findChromePath(): string {
  const candidates = [
    process.env.CHROME_PATH,
    // Windows
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    // macOS
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    // Linux
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/microsoft-edge",
  ].filter((p): p is string => Boolean(p));

  for (const candidatePath of candidates) {
    if (fs.existsSync(candidatePath)) {
      return candidatePath;
    }
  }

  throw new Error(
    "No Chrome or Edge installation found in the usual locations. " +
      "Create a .env.local file in your project root with a line like:\n" +
      'CHROME_PATH="C:\\\\Path\\\\To\\\\chrome.exe"\n' +
      "pointing at your actual browser executable."
  );
}
