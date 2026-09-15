<script lang="ts">
  interface ServiceItem {
    id: string;
    badge: string;
    title: string;
    description: string;
    icon: string;
    tech: string[];
    features: string[];
    useCases: string;
  }

  const services: ServiceItem[] = [
    {
      id: 'iot',
      badge: 'Hardware & Connectivity',
      title: 'Smart IoT & Edge Telemetry',
      description:
        'Sistem komunikasi dua arah ultra-cepat antara perangkat keras (IoT) dan server cloud dengan protokol MQTT, automasi sensor, dan kontrol perangkat fisik secara realtime.',
      icon: 'iot',
      tech: ['MQTT.js', 'ESP32 / Embedded C', 'WebSockets', 'Mosquitto Broker', 'Node.js'],
      features: [
        'Kontrol akses pintu & smart lock otomatis',
        'Streaming telemetri sensor detik demi detik',
        'Fail-safe offline mode & buffer sync',
        'Over-The-Air (OTA) firmware upgrade pipeline'
      ],
      useCases: 'Sistem kos pintar, manajemen smart building, warehouse monitoring, akses kontrol industri.'
    },
    {
      id: 'cloud',
      badge: 'High Throughput',
      title: 'Cloud Systems & Microservices',
      description:
        'Rekayasa backend berkinerja tinggi dengan arsitektur modular layered yang kuat, strongly-typed, dan dioptimasi untuk throughput jutaan request per hari.',
      icon: 'cloud',
      tech: ['Fastify', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Docker', 'Redis'],
      features: [
        'Response time sub-millisecond dengan Fastify',
        'Otentikasi aman (Better Auth, JWT, RBAC)',
        'Payment gateway integration & webhook handling',
        'Dokumentasi OpenAPI / Swagger otomatis'
      ],
      useCases: 'Platform SaaS, core banking/fintech middleware, sistem enterprise, API gateway.'
    },
    {
      id: 'ai',
      badge: 'Machine Intelligence',
      title: 'AI Integration & Multimodal RAG',
      description:
        'Integrasi kapabilitas kecerdasan buatan mutakhir ke dalam aplikasi bisnis Anda. Mulai dari asisten cerdas kontekstual hingga ekstraksi dokumen otomatis.',
      icon: 'ai',
      tech: ['Python', 'LangChain', 'FastAPI', 'Vector DB (pgvector)', 'OpenAI / Gemini API'],
      features: [
        'Retrieval-Augmented Generation (RAG) atas data privat',
        'Multimodal vision & audio transcription',
        'Autonomous AI agents untuk alur kerja otomatis',
        'Semantic search & intelligent clustering'
      ],
      useCases: 'Customer service agent 24/7, analisa kontrak otomatis, search engine internal perusahaan.'
    },
    {
      id: 'web',
      badge: 'Modern Frontend',
      title: 'High-Performance Web Platforms',
      description:
        'Antarmuka web interaktif, cepat, dan teroptimasi SEO dengan arsitektur modern (Astro, Svelte, Tailwind) yang memberikan pengalaman pengguna luar biasa di seluruh perangkat.',
      icon: 'web',
      tech: ['Svelte 5', 'Astro', 'Tailwind CSS v4', 'Lenis', 'Motion'],
      features: [
        'Score Google Lighthouse 95+ (Performance & SEO)',
        'Zero-bundle-lag hydration via Island Architecture',
        'Desain interaktif dengan animasi halus',
        'PWA & integrasi native web API'
      ],
      useCases: 'Company profile interaktif, dashboard analitik realtime, e-commerce, portal pelanggan.'
    }
  ];

  let activeIndex = $state(0);
  let activeService = $derived(services[activeIndex]);
</script>

<div class="w-full">
  <!-- Interactive Selector Tabs -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 mb-8">
    {#each services as service, idx}
      <button
        type="button"
        onclick={() => (activeIndex = idx)}
        class="flex flex-col items-start text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 cursor-pointer select-none {activeIndex === idx ? 'bg-[#5194ea] text-white shadow-md shadow-[#5194ea]/25' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'}"
      >
        <span class="text-[10px] sm:text-xs font-bold uppercase tracking-wider {activeIndex === idx ? 'text-white/80' : 'text-slate-400'}">
          {service.badge}
        </span>
        <span class="font-bold text-sm sm:text-base mt-1 line-clamp-1">
          {service.title}
        </span>
      </button>
    {/each}
  </div>

  <!-- Active Service Feature Card (Detailed Solid View) -->
  <div class="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-lg relative overflow-hidden transition-all duration-300">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left Column: Description & Features -->
      <div class="lg:col-span-7">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5194ea]/10 text-[#5194ea] border border-[#5194ea]/30 text-xs font-bold uppercase tracking-wider mb-4">
          <span>{activeService.badge}</span>
        </div>

        <h3 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {activeService.title}
        </h3>

        <p class="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
          {activeService.description}
        </p>

        <!-- Feature List -->
        <div class="mt-8">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Kapabilitas Kunci:</h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {#each activeService.features as feature}
              <li class="flex items-start gap-2.5 text-slate-700 text-sm font-medium">
                <div class="w-5 h-5 rounded-full bg-[#5194ea]/10 text-[#5194ea] flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-3.5 h-3.5 text-[#5194ea]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span>{feature}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Use Case -->
        <div class="mt-8 pt-6 border-t border-slate-100 flex items-start gap-3">
          <span class="text-xs font-bold uppercase tracking-wider text-[#5194ea] shrink-0 mt-0.5">Use Cases:</span>
          <span class="text-xs sm:text-sm text-slate-600 italic">
            {activeService.useCases}
          </span>
        </div>
      </div>

      <!-- Right Column: Tech Stack & Architecture Highlights -->
      <div class="lg:col-span-5 bg-[#0f172a] rounded-2xl p-6 sm:p-8 text-white relative shadow-inner overflow-hidden border border-slate-800">
        <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
          </div>
          <span class="text-xs font-mono text-[#5194ea] font-semibold">tech.spec // 0{activeIndex + 1}</span>
        </div>

        <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
          Core Technologies:
        </h4>

        <div class="flex flex-wrap gap-2 mb-8">
          {#each activeService.tech as t}
            <span class="px-3 py-1.5 rounded-lg bg-slate-800 border border-[#5194ea]/30 text-[#8bb4ea] text-xs font-mono font-medium shadow-sm">
              {t}
            </span>
          {/each}
        </div>

        <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
          <div class="text-xs font-semibold text-slate-300 uppercase tracking-wider">Garansi Rekayasa:</div>
          <p class="text-xs text-slate-300 mt-1 leading-relaxed">
            Semua solusi diuji secara menyeluruh dengan automated testing, clean architectural patterns, dan standar keamanan data terkini.
          </p>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5194ea] hover:bg-[#3f7cd0] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Konsultasikan Kebutuhan Ini</span>
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
