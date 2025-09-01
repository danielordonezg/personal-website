const newsData = [
  {
    id: 1,
    title: "Designing a Multi-Tenant Platform for Universities at Scale",
    subtitle:
      "From single-tenant pilots to a resilient, themed, data-isolated platform serving multiple institutions.",
    img: "/img/news/coally-architecture.jpg",
    poster: "DANIEL GÓMEZ",
    date: "01 SEP 2025",
    location: "Bogotá, Colombia",
    badge: "Architecture",
    readTime: "7 min read",
    tags: ["Architecture", "AWS", "Multi-Tenant", "Performance", "Security"],
    excerpt:
      "How we structured tenancy, theming, and data isolation to ship fast without sacrificing reliability. This is the playbook we used to go from custom deployments to a standardized, institution-ready core.",
    sources: [
      { label: "Coally (overview)", url: "#" },
      { label: "Public status page", url: "#" },
    ],
    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          We transitioned from single-brand deployments to a modular multi-tenant
          core. Each institution keeps its own theme, auth, and workflows while
          sharing resilient services for users, content, search, and analytics.
        </p>

        <h4>Problem</h4>
        <p>
          Custom rollouts were slow and hard to maintain. The lack of clear
          tenant boundaries created risk for data leakage and slowed feature
          velocity as the number of partners grew.
        </p>

        <h4>Approach</h4>
        <ul>
          <li>
            <strong>Hard isolation at data layer:</strong> tenantId throughout
            models, queries, and caches; scoped S3 prefixes; per-tenant KMS keys
            for sensitive blobs.
          </li>
          <li>
            <strong>Theming & config at edge:</strong> institution domain maps
            to tenant config (colors, logos, modules, feature flags).
          </li>
          <li>
            <strong>Service contracts:</strong> consistent DTOs for Users,
            Opportunities, Events, and Content; versioned APIs.
          </li>
          <li>
            <strong>Async & idempotent jobs:</strong> ingestion, scoring, and
            exports via queues with dedupe keys and DLQs.
          </li>
          <li>
            <strong>Observability by tenant:</strong> logs, metrics, traces with
            tenant labels; SLOs and error budgets per institution.
          </li>
        </ul>

        <h4>Reference Stack</h4>
        <ul>
          <li>React/Next.js, Node.js/NestJS, GraphQL + REST</li>
          <li>AWS: ALB, ECS/Fargate, SQS, Lambda, API Gateway, S3, CloudFront</li>
          <li>Datastores: MongoDB/DynamoDB, Redis, OpenSearch</li>
          <li>CI/CD: GitHub Actions with canary + feature flags</li>
        </ul>

        <div className="quotebox">
          <div className="icon">
            <img width={56} height={50} className="svg" src="/img/svg/quote.svg" alt="quote" />
          </div>
          <p>
            Boundaries first, features second. Clear contracts let teams move
            fast without stepping on each other.
          </p>
        </div>

        <h4>Key Results</h4>
        <ul>
          <li>Tenant onboarding time reduced from weeks to days.</li>
          <li>99.9% uptime maintained across peak seasons.</li>
          <li>0 cross-tenant incidents after isolation hardening.</li>
        </ul>
      </div>
    ),
  },

  {
    id: 2,
    title: "LLM-Powered Skills Extraction in Spanish & English",
    subtitle:
      "A bilingual pipeline to normalize soft/hard skills and improve opportunity matching with explainability.",
    img: "/img/news/ai-employability.jpg",
    poster: "DANIEL GÓMEZ",
    date: "20 AUG 2025",
    location: "Remote, LatAm",
    badge: "AI/ML",
    readTime: "6 min read",
    tags: ["AI/ML", "NLP", "Skills Graph", "Retrieval"],
    excerpt:
      "We blended deterministic parsing with LLM validation and a skills graph. The result: better recall, higher precision, and human-readable rationales in Spanish and English.",
    sources: [
      { label: "Scoring JSON schema", url: "#" },
      { label: "Evaluator prompts", url: "#" },
    ],
    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          Job posts vary widely in quality and language. Our goal was to extract
          and standardize skills (soft & hard) and tie them to a graph that
          supports bilingual search, ranking, and explanations.
        </p>

        <h4>Pipeline</h4>
        <ol>
          <li>
            <strong>Pre-parse:</strong> HTML to clean text, locale detection
            (es/en), section splitting (requirements, responsibilities, benefits).
          </li>
          <li>
            <strong>Deterministic pass:</strong> regex/entity lists for known
            certifications, tools, frameworks, and soft-skills phrases.
          </li>
          <li>
            <strong>LLM validation:</strong> consolidate, de-duplicate,
            normalize synonyms to canonical nodes in the skills graph.
          </li>
          <li>
            <strong>Explainable scoring:</strong> compute fit with weighted
            factors (skills overlap, seniority, language, location, modality),
            returning a rationale in the job’s language.
          </li>
          <li>
            <strong>Telemetry loop:</strong> human feedback on rationales feeds
            back into prompts and weights.
          </li>
        </ol>

        <h4>Metrics</h4>
        <ul>
          <li>Precision@10 +14% vs. rules-only baseline.</li>
          <li>Latency p95 &lt; 1.2s with caching and prompt compression.</li>
          <li>Bilingual coverage improved recall on Spanish posts by 18%.</li>
        </ul>

        <div className="quotebox">
          <div className="icon">
            <img width={56} height={50} className="svg" src="/img/svg/quote.svg" alt="quote" />
          </div>
          <p>
            Explanations matter. Recruiters trust the score if they can see the
            why in their language.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 3,
    title: "SRE Practices That Keep Weekly Shipping at 99.9% Uptime",
    subtitle:
      "Guardrails, golden signals, and postmortems that change code—not just docs.",
    img: "/img/news/sre-uptime.jpg",
    poster: "DANIEL GÓMEZ",
    date: "05 AUG 2025",
    location: "Global",
    badge: "Reliability",
    readTime: "5 min read",
    tags: ["SRE", "CI/CD", "Observability", "Incident Response"],
    excerpt:
      "From CI/CD guardrails to runtime budgets—what actually helped us stay reliable while shipping weekly.",
    sources: [{ label: "Runbook template", url: "#" }],
    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          Reliability is a product feature. We aligned teams around budgets,
          deploy safety, and alerts that point to actions—not noise.
        </p>

        <h4>Playbook</h4>
        <ul>
          <li>
            <strong>Small PRs + canaries:</strong> dark-launch and progressive
            delivery by tenant and region.
          </li>
          <li>
            <strong>Golden signals:</strong> latency, traffic, errors,
            saturation with tenant labels.
          </li>
          <li>
            <strong>Error budgets:</strong> slow down feature work when SLOs are
            at risk; prioritize reliability items in the next sprint.
          </li>
          <li>
            <strong>Actionable alerts:</strong> one alert → one hypothesis →
            one runbook section.
          </li>
        </ul>

        <h4>Impact</h4>
        <ul>
          <li>MTTR reduced by 37% quarter-over-quarter.</li>
          <li>Change failure rate under 10% while increasing deploy frequency.</li>
          <li>Consistent 99.9% uptime across peak enrollment weeks.</li>
        </ul>
      </div>
    ),
  },

  {
    id: 4,
    title: "Fast University Integrations: The Practical Playbook",
    subtitle:
      "SSO, SFTP, and data contracts that cut onboarding time and support overhead.",
    img: "/img/news/university-integrations.jpg",
    poster: "DANIEL GÓMEZ",
    date: "22 JUL 2025",
    location: "LatAm",
    badge: "Integrations",
    readTime: "6 min read",
    tags: ["Integrations", "SSO", "SFTP", "Data Contracts"],
    excerpt:
      "Standardize what matters: auth, data exchange, and branding. Everything else becomes configuration.",
    sources: [
      { label: "SSO checklist", url: "#" },
      { label: "CSV contract (opportunities)", url: "#" },
    ],
    descriptions: (
      <div className="descriptions">
        <p className="bigger">
          We standardized onboarding with clear checklists and validation tools.
          Partners get predictable timelines; our team gets fewer surprises in
          production.
        </p>

        <h4>What We Standardized</h4>
        <ul>
          <li>SSO: SAML/OIDC with metadata templates and IdP-initiated flows.</li>
          <li>
            SFTP: nightly exports with file naming conventions and schema
            validators.
          </li>
          <li>
            Branding: per-tenant theme packs (colors, logos, typography) with
            automatic contrast checks.
          </li>
          <li>
            Data contracts: versioned CSV/JSON with schema registries and
            backward-compatible changes.
          </li>
        </ul>

        <h4>Checklist (Excerpt)</h4>
        <pre>
          <code>{`[ ] Domain & DNS ready
[ ] SSO metadata exchanged and tested
[ ] SFTP credentials delivered (rotate every 90 days)
[ ] Data contract signed (v2.1)
[ ] Theming approved (contrast AA)
[ ] UAT complete with sample data`}</code>
        </pre>

        <h4>Results</h4>
        <ul>
          <li>Onboarding time reduced by ~60% on average.</li>
          <li>Support tickets per rollout down by ~45%.</li>
          <li>Brand consistency improved with automated checks.</li>
        </ul>
      </div>
    ),
  },
];

export default newsData;
