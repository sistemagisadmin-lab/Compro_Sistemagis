<script lang="ts">
  let name = $state('');
  let company = $state('');
  let email = $state('');
  let whatsapp = $state('');
  let serviceType = $state('Custom System');
  let budgetRange = $state('Rp 15 - 35 Juta');
  let message = $state('');
  let isSubmitting = $state(false);
  let submitted = $state(false);

  const serviceOptions = [
    'Company Website',
    'Custom System',
    'SaaS Development',
    'Automation',
    'AI Solution',
    'Digital Product',
    'Other'
  ];

  const budgetOptions = [
    '< Rp 15 Juta',
    'Rp 15 - 35 Juta',
    'Rp 35 - 75 Juta',
    '> Rp 75 Juta',
    'Belum Ditentukan / Fleksibel'
  ];

  function handleSubmit(e: Event) {
    e.preventDefault();
    isSubmitting = true;

    // Simulate sending / preparing WhatsApp link
    setTimeout(() => {
      isSubmitting = false;
      submitted = true;

      // Construct WhatsApp message template as per PRD
      const waText = encodeURIComponent(
        `Halo Sistemagis, saya ${name}${company ? ' dari ' + company : ''}.\nEmail: ${email}\nWhatsApp: ${whatsapp}\nKebutuhan: ${serviceType}\nEstimasi Budget: ${budgetRange}\n\nPesan: ${message}`
      );
      window.open(`https://wa.me/6281234567890?text=${waText}`, '_blank');
    }, 500);
  }

  function resetForm() {
    name = '';
    company = '';
    email = '';
    whatsapp = '';
    message = '';
    submitted = false;
  }
</script>

<div class="w-full bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
  {#if submitted}
    <div class="text-center py-12">
      <div class="w-16 h-16 rounded-2xl bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/30 flex items-center justify-center mx-auto mb-5">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h3 class="text-2xl font-black text-[#0f172a] tracking-tight">Pesan Anda Berhasil Disiapkan!</h3>
      <p class="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
        WhatsApp Anda telah diarahkan ke tim teknis Sistemagis. Kami akan merespons dalam waktu 1x24 jam kerja.
      </p>
      <button
        type="button"
        onclick={resetForm}
        class="mt-6 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0f172a] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
      >
        Kirim Pertanyaan Lain
      </button>
    </div>
  {:else}
    <form onsubmit={handleSubmit} class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Full Name -->
        <div>
          <label for="contact-name" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Nama Lengkap <span class="text-rose-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            bind:value={name}
            placeholder="John Doe"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300/80 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#5194ea] focus:ring-2 focus:ring-[#5194ea]/20 transition-all"
          />
        </div>

        <!-- Company -->
        <div>
          <label for="contact-company" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Nama Perusahaan / Bisnis
          </label>
          <input
            id="contact-company"
            type="text"
            bind:value={company}
            placeholder="PT Maju Bersama / Startup"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300/80 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#5194ea] focus:ring-2 focus:ring-[#5194ea]/20 transition-all"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Email -->
        <div>
          <label for="contact-email" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Alamat Email <span class="text-rose-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            bind:value={email}
            placeholder="name@company.com"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300/80 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#5194ea] focus:ring-2 focus:ring-[#5194ea]/20 transition-all"
          />
        </div>

        <!-- WhatsApp -->
        <div>
          <label for="contact-wa" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Nomor WhatsApp <span class="text-rose-500">*</span>
          </label>
          <input
            id="contact-wa"
            type="tel"
            required
            bind:value={whatsapp}
            placeholder="081234567890"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300/80 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#5194ea] focus:ring-2 focus:ring-[#5194ea]/20 transition-all"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- What do you need? -->
        <div>
          <label for="contact-service" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Apa yang Ingin Anda Bangun? <span class="text-rose-500">*</span>
          </label>
          <select
            id="contact-service"
            bind:value={serviceType}
            class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300/80 text-slate-900 text-sm focus:outline-none focus:border-[#5194ea] focus:ring-2 focus:ring-[#5194ea]/20 transition-all"
          >
            {#each serviceOptions as opt}
              <option value={opt}>{opt}</option>
            {/each}
          </select>
        </div>

        <!-- Budget Range -->
        <div>
          <label for="contact-budget" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Estimasi Budget Range
          </label>
          <select
            id="contact-budget"
            bind:value={budgetRange}
            class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300/80 text-slate-900 text-sm focus:outline-none focus:border-[#5194ea] focus:ring-2 focus:ring-[#5194ea]/20 transition-all"
          >
            {#each budgetOptions as b}
              <option value={b}>{b}</option>
            {/each}
          </select>
        </div>
      </div>

      <!-- Message -->
      <div>
        <label for="contact-message" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Ceritakan Masalah atau Kebutuhan Anda <span class="text-rose-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows="3"
          required
          bind:value={message}
          placeholder="Ceritakan proses bisnis yang ingin dirapikan, fitur yang dibutuhkan, atau timeline yang diharapkan..."
          class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300/80 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#5194ea] focus:ring-2 focus:ring-[#5194ea]/20 transition-all resize-none"
        ></textarea>
      </div>

      <!-- Submit button -->
      <button
        type="submit"
        disabled={isSubmitting}
        class="w-full py-3.5 px-6 rounded-xl bg-[#5194ea] hover:bg-[#3f7cd0] text-white font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-[#5194ea]/20 cursor-pointer disabled:opacity-50"
      >
        {#if isSubmitting}
          <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Menghubungkan...</span>
        {:else}
          <span>Tell Us What You Need →</span>
        {/if}
      </button>
    </form>
  {/if}
</div>
