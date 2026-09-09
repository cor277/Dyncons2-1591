/**
 * Server component that emits one JSON-LD block.
 *
 * Pages used to inline the <script> tag themselves; the ones written from here
 * on use this instead, so the serialisation (and the escaping of `<` inside
 * strings, which would otherwise close the script element) is in one place.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
