'use client';

import { useState, useEffect } from 'react';

// ── Data ──────────────────────────────────────────────────────────────────────

type NodeData = { label: string; sub: string; tag: string; cluster: string; color: string; desc: string };
type EdgeStyle = 'solid' | 'dashed' | 'thick';
type EdgeType  = 'rest' | 'sql' | 'queue' | 'ai' | 'etl' | 'admin';
type Edge = [string, string, EdgeType, string, EdgeStyle];

const NODES: Record<string, NodeData> = {
  USER:      { label: 'Internal user',    sub: 'SSO · internal',      tag: '👤',     cluster: 'Edge',     color: '#60A5FA', desc: 'End user accessing the workspace via browser with Keycloak SSO.' },
  BROWSER:   { label: 'Browser',          sub: 'Keycloak SSO',        tag: 'HTTPS',  cluster: 'Edge',     color: '#60A5FA', desc: 'Web client, HTTPS entrypoint to the gateway.' },
  APISIX:    { label: 'APISIX',           sub: 'TLS · routing',       tag: ':443',   cluster: 'Gateway',  color: '#60A5FA', desc: 'API gateway: TLS termination and per-subdomain routing. OIDC (PKCE) in front of n8n and MinIO, JWT on n8n webhooks, basic auth or IP restriction on the remaining consoles.' },
  KEYCLOAK:  { label: 'Keycloak',         sub: 'SSO / OIDC',          tag: ':8080',  cluster: 'Gateway',  color: '#60A5FA', desc: 'Identity provider: two realms (internal staff, external users), RBAC, an OIDC client per service. Backed by Postgres.' },
  AIGW:      { label: 'APISIX AI routes', sub: 'ai/local · ai/external', tag: 'ai/*', cluster: 'Gateway', color: '#A78BFA', desc: 'The same APISIX gateway, AI side: every model call, local or external, goes through these routes and is logged to the audit service.' },
  OPENWEBUI: { label: 'Nexus UI',         sub: 'Open WebUI · chat',   tag: ':8080',  cluster: 'Apps',     color: '#2DD4BF', desc: 'Custom Open WebUI build: chat interface. Model calls go through the APISIX AI routes; pgvector on Postgres.' },
  N8N:       { label: 'n8n',              sub: 'workflows',           tag: ':5678',  cluster: 'Apps',     color: '#2DD4BF', desc: 'Workflow orchestrator in queue mode with Redis: ingestion pipelines, agents, human approval steps.' },
  N8NW:      { label: 'n8n worker',       sub: 'queue mode',          tag: 'worker', cluster: 'Apps',     color: '#2DD4BF', desc: 'n8n worker for async job execution: extraction, indexing, model calls.' },
  DIRECTUS:  { label: 'Directus',         sub: 'headless CMS',        tag: ':8055',  cluster: 'Apps',     color: '#2DD4BF', desc: 'Headless CMS. Asset storage on MinIO (S3).' },
  BUDIBASE:  { label: 'Budibase',         sub: 'low-code',            tag: ':80',    cluster: 'Apps',     color: '#2DD4BF', desc: 'Low-code app builder (custom fork) for business teams, served as a PWA.' },
  REACT:     { label: 'React app',        sub: 'nginx · SPA',         tag: 'app',    cluster: 'Apps',     color: '#2DD4BF', desc: 'Single-page applications served by nginx behind the gateway.' },
  LLM:       { label: 'llama.cpp',        sub: 'local LLM · Qwen',    tag: ':8000',  cluster: 'AI',       color: '#A78BFA', desc: 'Local model server (GGUF, Qwen 3.5 4B by default). GPU auto-detected; on a larger GPU a larger model runs here and the whole chain stays local.' },
  EMBED:     { label: 'Embeddings',       sub: 'bge-m3',              tag: ':8080',  cluster: 'AI',       color: '#A78BFA', desc: 'Local embeddings service (BAAI/bge-m3). Vectors are computed inside the perimeter.' },
  WEAVIATE:  { label: 'Weaviate',         sub: 'vector DB',           tag: ':8080',  cluster: 'AI',       color: '#A78BFA', desc: 'Vector database for retrieval. Its embedding calls are routed through the gateway, so they are logged too.' },
  TIKA:      { label: 'Apache Tika',      sub: 'extract · OCR ×2',    tag: ':9998',  cluster: 'AI',       color: '#A78BFA', desc: 'Document text extraction. Two instances: automatic OCR, and OCR-only for PDFs whose text layer is unreadable.' },
  PRIVACY:   { label: 'Privacy filter',   sub: 'PII redaction',       tag: ':8889',  cluster: 'AI',       color: '#A78BFA', desc: 'On-device detection and redaction of personal data (open-weight model), before text reaches a model.' },
  AUDIT:     { label: 'Audit service',    sub: 'hash-chained log',    tag: ':8888',  cluster: 'AI',       color: '#A78BFA', desc: 'Receives every AI call from the gateway logger. Encrypted, hash-chained records; chain integrity verifiable on demand.' },
  NEBIUS:    { label: 'Nebius AI',        sub: 'EU endpoint',         tag: 'cloud',  cluster: 'External', color: '#A78BFA', desc: 'External generation endpoint in an EU datacentre, used to keep hardware costs down. Replaceable: on a GPU server the same step runs on the local model.' },
  EXTLLM:    { label: 'Other providers',  sub: 'OpenAI · Anthropic · Gemini', tag: 'opt', cluster: 'External', color: '#5A6470', desc: 'Optional routes, logged like the others. Direct calls from the apps are blocked at DNS level, so traffic can only pass through the gateway.' },
  HYPERLOG:  { label: 'HyperLog',         sub: 'external logging',    tag: 'log',    cluster: 'External', color: '#5A6470', desc: 'External operational logging, proxied through the gateway.' },
  PG:        { label: 'PostgreSQL 15',    sub: 'pgvector · 6 DBs',    tag: ':5432',  cluster: 'Storage',  color: '#2DD4BF', desc: 'Shared database: n8n, keycloak, directus, budibase, openwebui (pgvector), ai_audit.' },
  PGBK:      { label: 'pg-backup',        sub: 'cron · 7d/4w/6m',     tag: 'cron',   cluster: 'Storage',  color: '#5A6470', desc: 'Scheduled Postgres dumps with 7 daily / 4 weekly / 6 monthly retention.' },
  REDIS:     { label: 'Redis',            sub: 'queue',               tag: ':6379',  cluster: 'Storage',  color: '#F5A524', desc: 'Bull broker for n8n queue mode.' },
  MINIO:     { label: 'MinIO',            sub: 'S3 object storage',   tag: ':9000',  cluster: 'Storage',  color: '#2DD4BF', desc: 'S3-compatible object storage: CMS assets, n8n binaries, public and OIDC-protected frontends.' },
  MSSQL:     { label: 'SQL Server',       sub: 'data integration',    tag: ':1433',  cluster: 'Storage',  color: '#2DD4BF', desc: 'SQL Server 2025 for data integration with ERP and legacy sources.' },
  RABBIT:    { label: 'RabbitMQ',         sub: 'AMQP event bus',      tag: ':5672',  cluster: 'Storage',  color: '#F5A524', desc: 'Event bus for audit events and async pipelines.' },
  DREMIO:    { label: 'Dremio',           sub: 'lakehouse',           tag: ':9047',  cluster: 'Storage',  color: '#F472B6', desc: 'Lakehouse query engine: federated queries, BI connectors.' },
  HOP:       { label: 'Apache Hop',       sub: 'ETL batch',           tag: ':8080',  cluster: 'Storage',  color: '#F472B6', desc: 'Batch ETL pipelines to Postgres, MinIO, Dremio.' },
};

const EDGES: Edge[] = [
  ['USER','BROWSER','rest','','solid'],
  ['BROWSER','APISIX','rest','HTTPS','thick'],
  ['APISIX','KEYCLOAK','rest','OIDC','dashed'],
  ['APISIX','OPENWEBUI','rest','','thick'],
  ['APISIX','N8N','rest','OIDC · JWT','thick'],
  ['APISIX','DIRECTUS','rest','','thick'],
  ['APISIX','BUDIBASE','rest','','thick'],
  ['APISIX','REACT','rest','','thick'],
  ['APISIX','MINIO','rest','frontends','solid'],
  ['APISIX','HYPERLOG','admin','log proxy','dashed'],
  ['OPENWEBUI','AIGW','ai','chat','solid'],
  ['N8N','AIGW','ai','LLM','solid'],
  ['N8NW','AIGW','ai','LLM · PII','solid'],
  ['BUDIBASE','AIGW','ai','','solid'],
  ['WEAVIATE','AIGW','ai','embeddings','solid'],
  ['AIGW','LLM','ai','ai/local/llm','thick'],
  ['AIGW','EMBED','ai','embeddings','solid'],
  ['AIGW','PRIVACY','ai','redaction','solid'],
  ['AIGW','NEBIUS','ai','EU · generation','thick'],
  ['AIGW','EXTLLM','ai','optional','dashed'],
  ['AIGW','AUDIT','ai','http-logger','solid'],
  ['AUDIT','RABBIT','queue','events','dashed'],
  ['AUDIT','PG','sql','ai_audit','solid'],
  ['N8NW','TIKA','rest','extract','solid'],
  ['N8NW','WEAVIATE','rest','index · search','solid'],
  ['OPENWEBUI','PG','sql','SQL · pgvector','solid'],
  ['N8N','PG','sql','SQL','solid'],
  ['DIRECTUS','PG','sql','SQL','solid'],
  ['BUDIBASE','PG','sql','SQL','solid'],
  ['KEYCLOAK','PG','sql','SQL','solid'],
  ['N8N','REDIS','queue','Bull queue','dashed'],
  ['N8N','N8NW','queue','','dashed'],
  ['N8NW','REDIS','queue','','dashed'],
  ['DIRECTUS','MINIO','sql','S3','solid'],
  ['N8N','MINIO','sql','binary','solid'],
  ['PG','PGBK','admin','dump','dashed'],
  ['PG','DREMIO','etl','read','dashed'],
  ['MSSQL','DREMIO','etl','','dashed'],
  ['HOP','PG','etl','ETL','dashed'],
  ['HOP','MINIO','etl','ETL','dashed'],
  ['HOP','DREMIO','etl','ETL','dashed'],
];

const TYPE_COLOR: Record<EdgeType, string> = { rest:'#60A5FA', sql:'#2DD4BF', queue:'#F5A524', ai:'#A78BFA', etl:'#F472B6', admin:'#5A6470' };
const TYPE_MARKER: Record<EdgeType, string> = { rest:'ng-blue', sql:'ng-green', queue:'ng-amber', ai:'ng-purple', etl:'ng-pink', admin:'ng-grey' };
const TYPE_LABEL: Record<EdgeType, string>  = { rest:'HTTP', sql:'SQL/S3', queue:'Queue', ai:'AI', etl:'ETL', admin:'Admin' };
const MARKER_COLORS: [string, string][] = [['ng-blue','#60A5FA'],['ng-green','#2DD4BF'],['ng-amber','#F5A524'],['ng-purple','#A78BFA'],['ng-pink','#F472B6'],['ng-grey','#5A6470']];
const LEGEND: [string, string][] = [['#2DD4BF','SQL/Storage'],['#60A5FA','HTTP/REST'],['#F5A524','Queue/Bus'],['#A78BFA','AI inference'],['#F472B6','ETL/Analytics'],['#5A6470','Admin']];

const CX = 600, CY = 450;

function computeLayout(center: string) {
  const positions: Record<string, { x: number; y: number }> = {};
  const incoming = EDGES.filter(e => e[1] === center).map(e => e[0]);
  const outgoing = EDGES.filter(e => e[0] === center).map(e => e[1]);
  const neighbors = [...new Set([...incoming, ...outgoing])];
  const others = Object.keys(NODES).filter(k => k !== center && !neighbors.includes(k));

  positions[center] = { x: CX, y: CY };
  neighbors.forEach((id, i) => {
    const a = -Math.PI / 2 + (i / neighbors.length) * Math.PI * 2;
    positions[id] = { x: CX + Math.cos(a) * 280, y: CY + Math.sin(a) * 280 };
  });
  others.forEach((id, i) => {
    const a = -Math.PI / 2 + (i / others.length) * Math.PI * 2;
    positions[id] = { x: CX + Math.cos(a) * 410, y: CY + Math.sin(a) * 410 };
  });

  return { positions, neighbors, incoming, outgoing };
}

// ── Component ─────────────────────────────────────────────────────────────────

export function NexusGraphExplorer() {
  const [centerId, setCenterId] = useState('APISIX');
  const [edgeKey, setEdgeKey] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('nexus_center');
    if (saved && NODES[saved]) setCenterId(saved);
  }, []);

  const handleCenter = (id: string) => {
    if (id === centerId) return;
    setCenterId(id);
    setEdgeKey(k => k + 1);
    localStorage.setItem('nexus_center', id);
  };

  const { positions, neighbors, incoming, outgoing } = computeLayout(centerId);
  const focus = new Set([centerId, ...neighbors]);
  const inEdges  = EDGES.filter(e => e[1] === centerId);
  const outEdges = EDGES.filter(e => e[0] === centerId);
  const node = NODES[centerId];

  const byCluster: Record<string, string[]> = {};
  Object.keys(NODES).forEach(id => {
    const c = NODES[id].cluster;
    (byCluster[c] = byCluster[c] || []).push(id);
  });

  const mono = "'JetBrains Mono', ui-monospace, monospace";

  return (
    <>
      <style>{`
        @keyframes ng-halo  { 0%{opacity:.5;transform:scale(.9)} 70%,100%{opacity:0;transform:scale(1.6)} }
        @keyframes ng-draw  { to{stroke-dashoffset:0} }
        @keyframes ng-fade  { from{opacity:0} to{opacity:1} }
        .ng-node { cursor:pointer; }
        .ng-halo { transform-origin:center; transform-box:fill-box; animation:ng-halo 2.4s ease-out infinite; }
        .ng-draw { stroke-dasharray:1000; stroke-dashoffset:1000; animation:ng-draw .7s cubic-bezier(.3,.9,.4,1) forwards; }
        .ng-lbl  { animation:ng-fade .5s .3s both; paint-order:stroke; }
        .ng-rel:hover { border-color:#2DD4BF !important; color:#2DD4BF !important; }
        .ng-nbtn:hover { background:#0E1620; border-color:#1E2530 !important; }
      `}</style>

      {/* Mobile fallback */}
      <div className="block md:hidden px-4 py-8 text-center text-[#8B96A3] text-sm font-mono">
        Architecture Graph Explorer — best viewed on desktop.
      </div>

      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: '260px 1fr 300px',
          height: 720,
          background: '#0B0F14',
          color: '#E6EDF3',
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid #1E2530',
        }}
      >
        {/* ── Sidebar ── */}
        <aside style={{ background:'#11161D', borderRight:'1px solid #1E2530', padding:'22px 18px', overflowY:'auto' }}>
          <div style={{ fontFamily:mono, fontSize:16, fontWeight:700, marginBottom:4 }}>
            NEXUS <span style={{ color:'#2DD4BF' }}>{"//"}</span>
          </div>
          <div style={{ fontFamily:mono, fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'#8B96A3', marginBottom:20 }}>
            graph explorer
          </div>

          {Object.entries(byCluster).map(([cluster, ids], ci) => (
            <div key={cluster}>
              <div style={{
                fontFamily:mono, fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase',
                color:'#8B96A3', margin:'18px 0 8px', paddingTop: ci === 0 ? 0 : 14,
                borderTop: ci === 0 ? 'none' : '1px solid #1E2530',
              }}>
                {cluster}
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
                {ids.map(id => (
                  <button
                    key={id}
                    onClick={() => handleCenter(id)}
                    className="ng-nbtn"
                    style={{
                      textAlign:'left', background: id === centerId ? '#0E1620' : 'transparent',
                      border:`1px solid ${id === centerId ? '#2DD4BF' : 'transparent'}`,
                      color: id === centerId ? '#2DD4BF' : '#E6EDF3',
                      padding:'7px 10px', borderRadius:6, fontFamily:mono, fontSize:11.5,
                      cursor:'pointer', display:'flex', alignItems:'center', gap:8, transition:'all .15s',
                    }}
                  >
                    <span style={{ width:8, height:8, borderRadius:'50%', background:NODES[id].color, flexShrink:0, display:'inline-block' }} />
                    {NODES[id].label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* ── Canvas ── */}
        <main style={{ position:'relative', overflow:'hidden',
          background:'radial-gradient(1000px 700px at 50% 50%,rgba(96,165,250,.04),transparent 60%),linear-gradient(180deg,#0B0F14,#080C11)' }}>

          {/* grid overlay */}
          <div style={{ position:'absolute', inset:0, pointerEvents:'none',
            backgroundImage:'linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)',
            backgroundSize:'40px 40px' }} />

          {/* topbar */}
          <div style={{ position:'absolute', top:16, left:16, right:16, display:'flex', justifyContent:'space-between', alignItems:'center', zIndex:5, pointerEvents:'none' }}>
            <div style={{ fontFamily:mono, fontSize:11, color:'#8B96A3', background:'rgba(17,22,29,.9)', border:'1px solid #1E2530', padding:'8px 14px', borderRadius:8, backdropFilter:'blur(8px)' }}>
              center: <b style={{ color:'#E6EDF3', fontWeight:500 }}>{node.label}</b>
              {' · '}
              <span style={{ color:'#2DD4BF' }}>{incoming.length + outgoing.length} relations</span>
            </div>
            <div style={{ fontFamily:mono, fontSize:10.5, color:'#8B96A3', background:'rgba(17,22,29,.9)', border:'1px solid #1E2530', padding:'8px 12px', borderRadius:8 }}>
              click a node to center it
            </div>
          </div>

          {/* SVG */}
          <svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid meet"
            style={{ width:'100%', height:'100%', display:'block', position:'relative', zIndex:1 }}>
            <defs>
              {MARKER_COLORS.map(([id, fill]) => (
                <marker key={id} id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill={fill} />
                </marker>
              ))}
            </defs>

            {/* Edges */}
            <g>
              {EDGES.map(([from, to, type, lbl, style], idx) => {
                const p1 = positions[from], p2 = positions[to];
                const isFocus = from === centerId || to === centerId;
                const color = TYPE_COLOR[type];
                const dx = p2.x - p1.x, dy = p2.y - p1.y;
                const len = Math.hypot(dx, dy) || 1;
                const off = 55;
                const x1 = p1.x + (dx/len)*off, y1 = p1.y + (dy/len)*off;
                const x2 = p2.x - (dx/len)*off, y2 = p2.y - (dy/len)*off;
                const mx = (x1+x2)/2, my = (y1+y2)/2;
                const cx = mx + (-dy/len)*40, cy = my + (dx/len)*40;
                const d = `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`;

                return (
                  <g key={`${edgeKey}-${idx}`}>
                    <path
                      d={d} fill="none" stroke={color}
                      strokeWidth={style === 'thick' ? 2.2 : 1.4}
                      opacity={isFocus ? 1 : 0.22}
                      strokeDasharray={style === 'dashed' ? '5 4' : undefined}
                      markerEnd={`url(#${TYPE_MARKER[type]})`}
                      className={isFocus ? 'ng-draw' : undefined}
                    />
                    {lbl && isFocus && (
                      <text x={cx} y={cy} textAnchor="middle" className="ng-lbl"
                        style={{ fontFamily:mono, fontSize:9.5, fill:'#8B96A3', stroke:'#0B0F14', strokeWidth:3 }}>
                        {lbl}
                      </text>
                    )}
                    {isFocus && from === centerId && (
                      <circle r={3} fill={color} opacity={0.9}>
                        <animateMotion dur="1.6s" repeatCount="indefinite" path={d} begin={`${(idx%5)*0.15}s`} />
                      </circle>
                    )}
                  </g>
                );
              })}
            </g>

            {/* Nodes */}
            <g>
              {Object.keys(NODES).map(id => {
                const n = NODES[id];
                const p = positions[id];
                const isCenter = id === centerId;
                const isFocus  = focus.has(id);
                const w = isCenter ? 210 : 160;
                const h = isCenter ? 76  : 58;

                return (
                  <g key={id} className="ng-node"
                    style={{
                      transform: `translate(${p.x - w/2}px, ${p.y - h/2}px)`,
                      opacity: isFocus ? 1 : 0.22,
                      color: n.color,
                      transition: 'transform .7s cubic-bezier(.25,.9,.25,1), opacity .5s ease',
                    }}
                    onClick={() => handleCenter(id)}
                  >
                    {isCenter && (
                      <rect className="ng-halo" width={w} height={h} rx={10} fill="none" stroke={n.color} strokeWidth={2} />
                    )}
                    <rect width={w} height={h} rx={10} fill="#11161D" stroke={n.color}
                      strokeWidth={isCenter ? 2.5 : 1.4}
                      style={isCenter ? { filter:`drop-shadow(0 0 18px ${n.color})` } : undefined}
                    />
                    <text x={12} y={22} style={{ fontFamily:mono, fontSize:isCenter?13:12, fontWeight:600, fill:'#E6EDF3', pointerEvents:'none' }}>
                      {n.label}
                    </text>
                    <text x={12} y={38} style={{ fontFamily:mono, fontSize:10, fill:'#8B96A3', pointerEvents:'none' }}>
                      {n.sub}
                    </text>
                    <text x={w-12} y={22} textAnchor="end" style={{ fontFamily:mono, fontSize:9, fill:'#8B96A3', pointerEvents:'none' }}>
                      {n.tag}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Legend */}
          <div style={{ position:'absolute', bottom:16, left:16, zIndex:5, background:'rgba(17,22,29,.9)',
            border:'1px solid #1E2530', padding:'10px 14px', borderRadius:8, fontFamily:mono,
            fontSize:10, color:'#8B96A3', display:'flex', gap:14, flexWrap:'wrap', maxWidth:480, backdropFilter:'blur(8px)' }}>
            {LEGEND.map(([c, label]) => (
              <div key={label} style={{ display:'flex', alignItems:'center', gap:6 }}>
                <span style={{ width:18, height:2.5, background:c, borderRadius:2, display:'inline-block' }} />
                {label}
              </div>
            ))}
          </div>
        </main>

        {/* ── Details ── */}
        <div style={{ background:'#11161D', borderLeft:'1px solid #1E2530', padding:'22px 20px', overflowY:'auto' }}>
          <div style={{ fontFamily:mono, fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'#8B96A3', marginBottom:6 }}>
            {node.cluster}
          </div>
          <h2 style={{ margin:'0 0 6px', fontFamily:mono, fontSize:18, fontWeight:700, color:node.color }}>
            {node.label}
          </h2>
          <p style={{ fontSize:13, color:'#8B96A3', lineHeight:1.5, marginBottom:18 }}>
            {node.desc}
          </p>
          {([['tag', node.tag], ['layer', node.cluster], ['in', String(inEdges.length)], ['out', String(outEdges.length)]] as [string,string][]).map(([k, v]) => (
            <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'7px 0', borderBottom:'1px solid #1E2530', fontFamily:mono, fontSize:11 }}>
              <span style={{ color:'#8B96A3' }}>{k}</span>
              <span>{v}</span>
            </div>
          ))}

          <div style={{ marginTop:18 }}>
            <div style={{ fontFamily:mono, fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'#8B96A3', marginBottom:8, fontWeight:500 }}>
              → out ({outEdges.length})
            </div>
            {outEdges.length === 0 && <div style={{ fontSize:11, color:'#8B96A3' }}>—</div>}
            {outEdges.map(([, to, type, lbl]) => (
              <div key={to} className="ng-rel" onClick={() => handleCenter(to)}
                style={{ display:'flex', alignItems:'center', gap:10, padding:'9px 10px', border:'1px solid #1E2530',
                  borderRadius:6, marginBottom:5, cursor:'pointer', fontFamily:mono, fontSize:11, background:'#0E1620', transition:'all .15s' }}>
                <span style={{ color:'#F5A524' }}>→</span>
                <span>{NODES[to].label}</span>
                <span style={{ fontSize:9, color:TYPE_COLOR[type], marginLeft:'auto', textTransform:'uppercase', letterSpacing:'0.1em' }}>
                  {lbl || TYPE_LABEL[type]}
                </span>
              </div>
            ))}

            <div style={{ fontFamily:mono, fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'#8B96A3', margin:'16px 0 8px', fontWeight:500 }}>
              ← in ({inEdges.length})
            </div>
            {inEdges.length === 0 && <div style={{ fontSize:11, color:'#8B96A3' }}>—</div>}
            {inEdges.map(([from, , type, lbl]) => (
              <div key={from} className="ng-rel" onClick={() => handleCenter(from)}
                style={{ display:'flex', alignItems:'center', gap:10, padding:'9px 10px', border:'1px solid #1E2530',
                  borderRadius:6, marginBottom:5, cursor:'pointer', fontFamily:mono, fontSize:11, background:'#0E1620', transition:'all .15s' }}>
                <span style={{ color:'#60A5FA' }}>←</span>
                <span>{NODES[from].label}</span>
                <span style={{ fontSize:9, color:TYPE_COLOR[type], marginLeft:'auto', textTransform:'uppercase', letterSpacing:'0.1em' }}>
                  {lbl || TYPE_LABEL[type]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
