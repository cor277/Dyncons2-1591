import { NextResponse } from "next/server";

const INDEXNOW_KEY = "ad2c663474ef46fd0c07958461afd08d";
const HOST = "www.dynamicsconsulting.it";
const BASE_URL = `https://${HOST}`;
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

/* All site URLs — mirrors app/sitemap.ts */
const ALL_URLS = [
  "/",
  "/platform",
  "/services/applied-ai",
  "/services/data-platforms",
  "/services/cloud-kubernetes",
  "/services/enterprise-integration",
  "/services/microsoft-dynamics",
  "/services/automation",
  "/services/blockchain",
  "/case-studies",
  "/case-studies/humania-care",
  "/case-studies/federfarma",
  "/case-studies/dynamics-data",
  "/case-studies/sorgenia",
  "/case-studies/nespresso",
  "/case-studies/dynamics-crm",
  "/case-studies/iatp",
  "/case-studies/logitrack",
  "/about",
  "/research",
  "/contact",
  "/privacy",
  "/it/ai-sanitaria-on-premise",
  "/it/consulenza-ai-farmaceutico",
  "/it/sovereign-ai-italia",
  "/ai-on-premise-healthcare",
  "/sovereign-ai-pharma-italia",
  "/fractional-cto-milano",
  "/modernizzazione-sistemi-legacy-ai",
  "/research/on-premise-ai",
  "/research/rag-vs-fine-tuning",
  "/research/governing-ai-outputs",
  "/research/lakehouse-not-enough",
  "/research/ai-reverse-engineering",
  "/research/legge-132-2025",
  "/research/event-sourcing",
];

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
