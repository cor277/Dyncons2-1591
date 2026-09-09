# SEO / GEO audit — 10 September 2026

Scope: cleanup of residual inaccuracies, and import of the LinkedIn editorial
series onto this domain. Everything below was verified against the repository
before being changed; items already correct were left alone and are listed
under **Already correct** rather than silently re-done.

---

# Fixed

## Accuracy of regulatory claims

**`/ai-on-premise-healthcare`** — the page argued its case with statements that
do not survive a careful reader.

| Was | Now |
| --- | --- |
| "The EU AI Act … classifies AI systems used in healthcare as high-risk", and "which entered its high-risk obligations phase in 2025" | Classification follows intended purpose, not sector: a safety component of a medical device or a system deciding access to care falls in the high-risk categories, a documentary assistant for staff generally does not. The staged application of the Regulation is described without inventing a date. |
| "On-premise AI eliminates these risks architecturally … data residency is guaranteed by physics … the difference between a compliant system and an audit finding" | A fully local deployment removes *that class* of risk — third-party control of the substrate — and does not remove the risks that come from your own operations, which are the ones an audit tends to find. |
| "a layered regulatory framework that … creates an almost irresistible case for on-premise deployment" | None of these instruments requires on-premise deployment; they require demonstrable control over the processing, and a local deployment is one way of demonstrating it. |
| "running in production for Federfarma Lombarda and CureSicure / Humania Care, **processing real clinical and pharmaceutical data daily**" | The Federfarma description now matches the case study: a regulatory-document assistant, indexing / retrieval / reconciliation / identity / audit local, personal data excluded at ingestion, only final generation on an external European inference endpoint, replaceable. No claim of clinical data processing. |
| "the break-even point typically falls between **12 and 18 months**" (body) and "50,000+ monthly inference requests typically reach cost parity within 12-18 months" (FAQ ×2) | Removed. The cost *shape* argument stays — front-loaded capex, opex that does not scale with volume — with an explicit statement that the break-even depends on volume, hardware, utilisation and staffing and should be computed on the reader's own numbers. |
| FAQ: "guarantees data residency by architecture, eliminates cross-border transfer risks, provides the verifiable control required by the EU AI Act for high-risk systems. It is the most direct path to demonstrable compliance." | Conditional on the deployment being fully local, and on the intended purpose of the system. |

The FAQ text exists twice on that page — once as visible copy, once inside the
`FAQPage` JSON-LD. Both copies were changed together; they still match.

**`/research/governing-ai-outputs`**

- "The AI Act classifies healthcare AI systems as high-risk. This means every
  output must be traceable … A well-prompted model that produces untraceable
  outputs is still non-compliant." → classification depends on intended purpose
  and on the conditions the Regulation sets out; where a system does fall in the
  high-risk categories the obligations follow, and where it does not,
  traceability remains the difference between a system you can explain and one
  you cannot. The technical argument is unchanged.
- "must be logged in an append-only store. **This is not optional.**" → what has
  to be retained, and for how long, follows from classification, applicable
  regime, internal governance and retention policy. The engineering point is
  kept and stated as such.
- "The AI Act makes this [a model card] a legal requirement" → the Act does not
  use the term; the technical documentation and instructions for use required of
  high-risk systems cover much of the same ground.

**Product Liability Directive wording — 21 occurrences across 17 files**

Was: *"From 9 December 2026 the European product liability directive treats
software as a product."* That compresses three different things into one clause.

Now: *"The revised European product liability directive includes software among
products, and applies to products placed on the market or put into service from
9 December 2026."* — with the Italian counterpart adapted rather than
translated. The transposition deadline and the application rule are no longer
conflated, and the directive is no longer described as switching on for all
existing software on a single date.

## Homepage vs privacy policy — the Digital Twin

The homepage strip read **"Hosted on EU infrastructure · No data leaves your
session"**. The privacy policy, section 2.3 and the processor table, says the
opposite in the owner's own words: conversation messages are *"sent to a
third-party AI model provider"*, the provider is listed under **Location: USA**,
and conversations are retained **90 days**.

The assistant is an `<iframe>` onto `https://public.dynamicsconsulting.it`.
Nothing in this repository can establish which provider serves it or where
inference runs — that lives in the Nexus deployment.

Confirmed by the owner on 10 September 2026: the Digital Twin runs **the same
architecture as the Federfarma deployment**, grounded in his own notes instead
of a document corpus — retrieval, identity and audit on Nexus, only final answer
generation on an external inference endpoint, **in the EU**, replaceable.

Both documents were corrected to say that, and to agree with each other:

- The homepage strip now reads *"Retrieval and audit run locally; final answer
  generation calls a replaceable endpoint in the EU · what happens to your
  messages"*, linked to the policy.
- Privacy policy §2.3 no longer says messages are "sent to a third-party AI
  model provider" full stop; it describes what stays on our infrastructure and
  what is sent where, and states that the endpoint is in the European Union.
- The processor table row changed from **"AI model provider — USA"** to
  **"AI inference endpoint — European Union"**.
- Section 7 now names which sub-processors the US-transfer safeguards actually
  cover — email delivery and hosting — and says explicitly that AI generation is
  not among them.

Still open: the 90-day retention figure, which the owner is verifying.


## Navigation — both languages

The menu was English on every page, including the Italian ones, so from an
Italian page every menu item led back out of Italian. And the dropdown panels
were mounted on React state, which meant **the entire primary navigation was
absent from the served HTML** — invisible to a crawler and to anyone whose
JavaScript had not run. The footer was carrying the whole link graph by itself.

- `NavBar` now selects between an English and an Italian tree on
  `isItalianPath(pathname)`. The Italian tree has Italian labels and Italian
  destinations: Piattaforma, Servizi, Settori, Casi studio, Ricerca, Chi siamo,
  Tutto in italiano. Where an Italian reader's next step exists only in English
  — the platform pages, the answers — the item is listed and marked *in
  inglese*, rather than hidden.
- The dropdown panel is always in the document and hidden with CSS. Every menu
  link is now in the served HTML.
- `LanguageSwitch` no longer disappears on pages without a counterpart: with a
  true pair it links the translation, without one it links the other language's
  index, and the accessible label says which of the two it is.
- Footer: added the exposure assessment, on-premise AI for healthcare, the
  overlap catalogue and the editorial series on the English side; added
  Fractional CTO Milano, AI sovrana pharma, modernizzazione legacy, the PLD
  series and the CRA deadline page to the Italian block.

Reachability, measured on the built HTML from both an English and an Italian
page: every URL in the sitemap is either linked from the header or footer, or is
a leaf under an index that is (individual articles, answers and case studies).
Nothing is more than one click from a menu item, in either language.

## Content custody

The six-part PLD 2024 editorial series moved from LinkedIn onto this domain, in
full — see the section below.

---

# Already correct

Checked and deliberately left alone:

- **robots.txt** — `Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`,
  `PerplexityBot`, `Perplexity-User`, `Claude-SearchBot`, `Claude-User`,
  `DuckDuckBot`, `Applebot` each have an explicit `Allow: /` group, and each
  repeats the Content-Signal and the `/api/` exclusion because a named group
  ignores `*`. Training-oriented agents fall through to `*`, where
  `ai-train=no`. No private or admin path is exposed.
- **Title template** — the layout applies `%s | Dynamics Consulting` and no page
  title carries the brand itself. The occurrences of the brand inside page
  metadata are all in `openGraph` / `twitter` blocks, which the template does
  not touch. No `| Dynamics Consulting | Dynamics Consulting` in any rendered
  title. Any such snippet still visible in a search result is index lag.
- **Canonical** — present on every indexable page; verified across all 70 built
  pages.
- **hreflang** — declared only between pages that are genuinely equivalent
  (`/assessment` ↔ `/it/assessment`, `/ai-on-premise-healthcare` ↔
  `/it/ai-sanitaria-on-premise`, `/case-studies/federfarma` ↔ its Italian
  version, governance advisory ↔ its Italian counterpart, home ↔ `/it`), with
  `x-default` on the English side. `/services/fractional-cto` and
  `/fractional-cto-milano` are deliberately *not* declared as alternates: they
  are different arguments for different markets, not translations.
- **Entity graph** — `Organization`, `Person`, `WebSite`, `SoftwareApplication`
  (Nexus MDS Core), `CreativeWork` (CEPF) are declared once in
  `app/schema-org.ts` and referenced by `@id` everywhere else. `founder`,
  `worksFor`, `knowsAbout`, `creator`, `author`, `publisher` all resolve inside
  one graph. `sameAs` carries only two verified URLs.
- **NAP** — one address in the repository, `Via Torino 2, 20123 Milano`, in the
  privacy policy and in the Organization schema. No second or conflicting
  address anywhere. Nothing to reconcile in code.
- **AI Act wording** — no "AI Act compliant", "fully compliant", "certified" or
  "guaranteed compliance" claims. The footer says "AI Act Ready" and "ISO 27001
  Ready", which is the formulation to keep.
- **`/tech-sovereignty`** — no longer a placeholder: it was rewritten on
  9 September into a full analysis of COM(2026) 502 final, read from the
  Commission's own PDFs. The homepage "Read our analysis →" CTA therefore points
  at something real, and was left in place.
- **`/services/fractional-cto`** — no "coming soon" content remains.
- **Orphan pages** — none. Every one of the 67 sitemap URLs has at least one
  inbound internal link.
- **Broken internal links** — none across the 70 built pages.
- **"No data leaves the server"** on the healthcare page refers to the
  self-hosted vLLM inference engine specifically, where it is accurate. Left.

---

# LinkedIn articles imported

All six articles of the PLD 2024 series were publicly readable over plain HTTP —
no login, no CAPTCHA, no anti-bot measure was involved or circumvented. Each was
imported **in full and verbatim**: nothing was summarised, rewritten, shortened
or added.

| Slug | Article | Words | Published |
| --- | --- | --- | --- |
| `pld-2024-sette-cambi-strutturali` | I — i sette cambi strutturali | 3,130 | 28 Apr 2026 |
| `pld-2024-cinque-piu-uno-scenari` | II — i 5+1 scenari di sviluppo software | 5,973 | 5 May 2026 |
| `pld-2024-decennio-responsabilita` | III — il decennio che cambia tutto | 3,044 | 12 May 2026 |
| `pld-2024-vulnerability-management-cve` | IV — vulnerability management e gestione CVE | 3,004 | 22 May 2026 |
| `pld-2024-fuga-giurisdizionale` | V — la fuga giurisdizionale, e perché non esiste | 2,891 | 27 May 2026 |
| `pld-2024-contratti-e-polizza` | VI — contratti e polizza, venti clausole | 6,551 | 3 Jun 2026 |

**24,593 words** now hosted at `/research/<slug>`.

Each page carries: `H1`, author linked to `/about`, the original publication
date in a `<time>` element, an explicit "originally published on LinkedIn" note
linking the original, the body as written, an author box, previous/next in the
series, contextual internal links, `Article` JSON-LD, `BreadcrumbList`, title,
description taken from the author's own standfirst, and a **canonical pointing
at dynamicsconsulting.it** — this domain is the archive of record; LinkedIn is
credited as where the piece first appeared.

Content is stored as JSON in `content/research/` and rendered by
`app/(en)/research/[slug]/page.tsx`, which statically generates only the slugs
that exist (`dynamicParams = false`). The articles are in Italian; the `<article>`
element carries `lang="it"` while the surrounding site chrome stays English.

**Importer**: `scripts/import-linkedin-articles.mjs`

```
node scripts/import-linkedin-articles.mjs --url <url> --slug <slug> \
     [--series "Article I · …"] [--lang it] [--force]
node scripts/import-linkedin-articles.mjs --file saved.html --slug <slug>
```

It refuses to overwrite an existing article without `--force`, fails loudly with
a readable message rather than writing a partial file, and accepts a saved
`.html`, `.md` or `.json` when a page is not reachable over HTTP. Two quirks of
LinkedIn's markup are handled explicitly and documented in the source: body
blockquotes carry a class (so "has a class" cannot mean "is chrome"), and a
paragraph before a list is not always closed, which would otherwise swallow the
list items.

**Index pages updated**: `/research/editorial-series` now links to the local
articles and no longer says the canonical version lives on LinkedIn;
`/research` merges the imported pieces into the single chronological archive.
Both are in the sitemap and in `/llms.txt`.

---

# LinkedIn articles not automatically retrievable

None. All six were retrieved. Images were deliberately **not** imported: the
site's Content-Security-Policy restricts `img-src` to `'self' data: blob:`, so a
`media.licdn.com` cover would be blocked in the browser. If the covers are
wanted, the files have to be downloaded and served from `/public`.

---

# Manual actions required

1. **LinkedIn company profile — align to `Via Comensoli 5, Comazzo (LO)`.**
   Owner instruction, 10 September 2026. Nothing in this repository can read or
   change the profile. Note that this address does **not** appear anywhere in
   the repository: the site and the `Organization` schema carry
   `Via Torino 2, 20123 Milano`, described in the privacy policy as the
   registered office. **Decided by the owner, 10 September 2026: the site keeps
   Via Torino 2 for now.** So the divergence between the site and the LinkedIn
   profile is deliberate and known, not an oversight. It does cost something —
   two addresses across two sources is a weaker entity signal than one — and it
   is worth revisiting if local search for Milan or Lodi ever matters
   commercially. Nothing in the site or the `Organization` schema was changed.
2. **Consider adding a note on the LinkedIn originals** pointing at the version
   on this site, now that the full text is hosted here. That is an editorial
   decision and a platform action, not a code change.
3. **Article cover images** — see above.
4. **Analytics** — still none in the repository. Deferred by the owner on
   10 September 2026. Until something is installed, AI referral traffic
   (`chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com`,
   `gemini.google.com`) cannot be measured at all.

---

# Legal / privacy claims requiring human verification

1. ~~**Digital Twin — which provider, and in which region.**~~ *Answered
   10 September 2026: same architecture as Federfarma, inference endpoint in the
   EU.* The homepage and the privacy policy were corrected to match. One thing
   still worth checking with whoever holds the contract: whether the endpoint's
   **operator** is an entity established outside the EU. Processing in an EU
   region by a non-EU controller still engages Section 7, and the policy
   currently implies it does not.

2. **Conversation retention.** The 90-day figure appears twice in the privacy
   policy. The owner is verifying it against the Nexus deployment; a retention
   claim the system does not honour is worse than no claim.
3. **CureSicure / HumanIA Care — on stand-by** by owner decision, 10 September
   2026. The claim that real clinical data is processed has been removed from
   the healthcare page and nothing was added in its place; the existing case
   study page is untouched. Revisit when the engagement is picked up again.
4. **PLD wording.** The new formulation is deliberately narrow. A lawyer should
   confirm it reads correctly in Italian for the Italian pages.
5. **One truncated title — Article III.** LinkedIn caps titles at 150
   characters in *every* place it exposes them (`h1`, `<title>` and JSON-LD
   alike), so the full title of *"PLD 2024: il decennio che cambia tutto …
   il run-off cover diventa elemento struttura"* does not exist on the public
   page. The last word is almost certainly incomplete. It has been left exactly
   as LinkedIn serves it rather than guessed at; the importer now takes a
   `--title` override, so supplying the real one is a one-line re-import:

   ```
   node scripts/import-linkedin-articles.mjs --force      --url <linkedin url> --slug pld-2024-decennio-responsabilita      --title "the full title" --series "Article III · …" --lang it
   ```

---

# Technical SEO status

| Check | Status |
| --- | --- |
| Build | 70 pages, all statically generated, no errors |
| Typecheck | clean |
| Lint | clean (`npm run lint`) |
| JSON-LD | parses on all 70 pages; no invented properties |
| Canonical | on every indexable page |
| hreflang | only between genuinely equivalent pages, `x-default` on the English side |
| Sitemap | 67 URLs, per-route `lastmod`, no redirects / 404s / placeholders |
| robots.txt | search and answer engines explicitly allowed; `/api/` excluded |
| Internal links | no broken internal link |
| Orphans | none |
| Title duplication | none in rendered titles |

Schema types emitted across the site: `Organization`/`ProfessionalService`,
`Person`, `WebSite`, `SoftwareApplication`, `CreativeWork`, `BreadcrumbList`
(55), `TechArticle` (16), `Article` (8), `WebPage` (13), `FAQPage` (12),
`Service` (4), `CollectionPage` (2), `AboutPage`, `ProfilePage`, `Dataset`.

---

# Remaining recommendations

- **Redirects for the LinkedIn slugs are not possible** (different domain), so
  the two copies will coexist. The canonical on this site points here; LinkedIn
  will keep its own. Over time, the internal links and the sitemap are what make
  this domain the primary source.
- **The `/research` archive is now bilingual in practice** — English pieces
  written for the site, Italian pieces imported from LinkedIn. Worth deciding
  whether the Italian ones eventually get English counterparts, or whether the
  index should be explicitly split. Today it is labelled per item.
- **Do not add more landing pages.** The gap left is depth on what exists, not
  URL count.
- **Analytics decision** (see Manual actions) is the one thing blocking any
  measurement of whether this work paid off.
- **`/it` coverage**: the Italian section has no counterpart for `/answers`. If
  Italian answer pages are wanted, they should be written for Italian readers
  rather than translated, as the governance advisory pair already is.
