// app/api/export-pdf/route.ts
import { NextRequest } from "next/server";
import puppeteer from "puppeteer-core";
import { findChromePath } from "@/lib/chrome-path";

export async function GET(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url);
  const slug = searchParams.get("chapter") ?? "chapter-1";
  const label = searchParams.get("label") ?? slug;

  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: findChromePath(),
      headless: true,
    });

    const page = await browser.newPage();

    // Map unified report slug to the correct base /report route
    let targetUrl = `${origin}/report/${slug}`;
    if (slug === "portfolio-full-report") {
      targetUrl = `${origin}/report`;
    }

    // Use 'load' and a 60s timeout to prevent large multi-chapter timeouts
    await page.goto(targetUrl, {
      waitUntil: "load",
      timeout: 60000,
    });

    const headerTemplate = `
      <div style="width:100%; font-size:8px; color:#8BA4C4; padding:6px 22mm 0 22mm;
                  display:flex; justify-content:space-between; font-family:Helvetica;">
        <span>THE DIGITAL INFRASTRUCTURE AUDIT</span>
        <span>${label.toUpperCase()}</span>
      </div>`;

    const footerTemplate = `
      <div style="width:100%; font-size:7.5px; color:#8A8A8A; padding:0 22mm 6px 22mm;
                  display:flex; justify-content:space-between; font-family:Helvetica;">
        <span>${label}</span>
        <span class="pageNumber"></span>
        <span>Strictly Confidential</span>
      </div>`;

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate,
      footerTemplate,
      margin: { top: "25mm", bottom: "25mm", left: "22mm", right: "22mm" },
    });

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${slug}.pdf"`,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(`PDF export failed: ${message}`, { status: 500 });
  } finally {
    await browser?.close();
  }
}