'use client'

import dynamic from 'next/dynamic'

/**
 * The demo is client-only (heavy interactive state, no server data).
 * The loading placeholder is inline — never a fixed overlay — so the
 * server-rendered description above it stays visible and indexable.
 */
const ComplianceUI = dynamic(() => import('./ComplianceUI'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 420,
        background: '#f5f5f3',
        borderRadius: 12,
        gap: 12,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontSize: 14,
        color: '#6b6b67',
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '3px solid #e0ded8',
          borderTopColor: '#185FA5',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      <span>Loading CEPF Compliance Tool…</span>
    </div>
  ),
})

export function CepfTool() {
  return <ComplianceUI />
}
