import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";

const INDEXNOW_KEY = "ad2c663474ef46fd0c07958461afd08d";
const HOST = "www.dynamicsconsulting.it";
const BASE_URL = `https://${HOST}`;
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

/* Derived from the sitemap so the two can never drift apart again. */
const ALL_URLS = sitemap().map((entry) =>
  String(entry.url).replace(BASE_URL, "")
);

/**
 * POST /api/indexnow
 * Body (optional): { "urls": ["/page1", "/page2"] }
 * If no body or empty urls array, submits ALL site URLs.
 *
 * Requires Authorization header matching the IndexNow key
 * to prevent abuse.
 */
export async function POST(request: Request) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${INDEXNOW_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let urlPaths: string[];
  try {
    const body = await request.json().catch(() => null);
    urlPaths =
      body?.urls && Array.isArray(body.urls) && body.urls.length > 0
        ? body.urls
        : ALL_URLS;
  } catch {
    urlPaths = ALL_URLS;
  }

  const fullUrls = urlPaths.map((p: string) =>
    p.startsWith("http") ? p : `${BASE_URL}${p}`
  );

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: fullUrls,
  };

  const response = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const status = response.status;
  const text = await response.text();

  return NextResponse.json({
    submitted: fullUrls.length,
    indexNowStatus: status,
    indexNowResponse: text || "OK",
    urls: fullUrls,
  });
}

/**
 * GET /api/indexnow — health check / info
 */
export async function GET() {
  return NextResponse.json({
    service: "IndexNow",
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    totalUrls: ALL_URLS.length,
    usage: "POST /api/indexnow with Authorization: Bearer <key>",
  });
}
