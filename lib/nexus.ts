/**
 * Facts about Nexus MDS Core that more than one page states.
 *
 * Counted, not remembered: the service count comes from the Nexus
 * DockerSystem compose template (26 services) plus `audit-service`, which the
 * template ships commented out and setup.sh enables with AI_AUDIT_ENABLED=yes
 * — on in every deployment we run. Recount there before changing it, and move
 * the snapshot date with it. A number without a date is not verifiable.
 */
export const NEXUS_SERVICE_COUNT = 27;
export const NEXUS_SNAPSHOT_EN = "October 2026";
export const NEXUS_SNAPSHOT_IT = "ottobre 2026";

/**
 * Where inference runs, said the same way everywhere. Nebius (EU) is the
 * default generation endpoint for cost reasons; on a GPU server the local
 * model takes that step and the whole chain runs inside the perimeter.
 */
export const NEXUS_INFERENCE_EN =
  "Indexing, retrieval, identity and audit run inside your perimeter. Generation runs on a local model or on a replaceable EU endpoint — your choice per workload.";
export const NEXUS_INFERENCE_IT =
  "Indicizzazione, retrieval, identità e audit restano nel tuo perimetro. La generazione gira su un modello locale o su un endpoint UE sostituibile: lo scegli per ogni carico di lavoro.";
