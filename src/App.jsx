export default function EliranFitnessLandingPage() {
  const stats = [
    { label: 'Small Groups', value: 'Personal Attention' },
    { label: 'Session Length', value: '45–60 min' },
    { label: 'Location', value: 'Kiryat Haim' },
  ];

  const offers = [
    {
      title: 'Personal Training',
      description:
        'Focused one-on-one coaching built around fat loss, body shaping, strength, and long-term fitness progress.',
    },
    {
      title: 'Small Group Training',
      description:
        'Train in a motivating small-group setting with close guidance, clean programming, and real accountability.',
    },
    {
      title: 'Nutrition Guidance',
      description:
        'A personalized nutrition structure that supports the training plan and helps clients stay consistent outside the studio.',
    },
  ];

  const pricing = [
    { name: 'Single Personal Session', price: '₪150' },
    { name: '8 Personal Sessions', price: '₪1,050' },
    { name: '12 Personal Sessions', price: '₪1,500' },
    { name: 'Single Partner Session', price: '₪200' },
    { name: '8 Partner Sessions', price: '₪1,400' },
    { name: '12 Partner Sessions', price: '₪2,000' },
  ];

  const memberships = [
    { name: '2 times per week', price: '₪350 / month' },
    { name: '3 times per week', price: '₪450 / month' },
    { name: '4 times per week', price: '₪550 / month' },
  ];

  const transformations = [
    {
      title: 'Real Body Transformation',
      image:
        'https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627220404003-1920w-1920w.jpg',
    },
    {
      title: 'Women’s Fitness Results',
      image:
        'https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627984321849-1920w.jpg',
    },
    {
      title: 'Strength & Shape Progress',
      image:
        'https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/000-a13b518c-1920w.jpg',
    },
    {
      title: 'Consistent Studio Results',
      image:
        'https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/KPBH%2BTJRH%2B-1920w.jpg',
    },
    {
      title: 'Lifestyle Change',
      image:
        'https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627984315763-1920w.jpg',
    },
    {
      title: 'Lean & Toned Progress',
      image:
        'https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627984325610-1920w.jpg',
    },
  ];

  const reviewPlaceholders = [
    {
      title: 'Personal Attention',
      text: 'Clients come for the close guidance, the structure, and the feeling that someone is actually following their progress.',
    },
    {
      title: 'Small Group Energy',
      text: 'The studio combines a motivating atmosphere with coaching that still feels personal and focused on each member.',
    },
    {
      title: 'Training + Nutrition',
      text: 'The full process is built around workouts, accountability, and a nutrition plan that supports visible results.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(0,119,255,0.28),transparent_28%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%),linear-gradient(180deg,#07101d_0%,#05070b_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1380ff]/40 bg-[#0c1626] text-sm font-bold text-[#4da3ff]">
                EN
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.24em] text-white/70">ELIRAN NISANOV</p>
                <p className="text-xs text-white/50">Personal Training Studio</p>
              </div>
            </div>
            <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#results" className="hover:text-white">Results</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>

          <div className="grid items-center gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-[#1380ff]/30 bg-[#0d1a2e] px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-[#76b8ff]">
                Kiryat Haim • Body shaping • Fat loss • Strength
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                A sharper, cleaner website for a coach who already gets real results.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                Personal training, small-group sessions, and nutrition guidance in a premium studio experience designed to help people transform their body, energy, and confidence.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/972525177007"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#1380ff] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_40px_rgba(19,128,255,0.28)] transition hover:scale-[1.01]"
                >
                  Book a Trial Session
                </a>
                <a
                  href="#results"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/14 bg-white/5 px-6 py-4 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                >
                  See Real Transformations
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-2xl font-black text-[#7fbeff]">{item.value}</p>
                    <p className="mt-2 text-sm text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-[#1380ff]/20 blur-3xl" />
              <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl">
                <img
                  src="https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/KPBH%2BTJRH%2B-1920w.jpg"
                  alt="Transformation result"
                  className="h-[580px] w-full rounded-[24px] object-cover"
                />
                <div className="absolute inset-x-8 bottom-8 rounded-[28px] border border-white/10 bg-[#08101d]/88 p-5 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#8bc6ff]">Studio highlights</p>
                  <p className="mt-2 text-xl font-bold">Small-group training with personal attention</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Training plans built around body shaping, fat loss, strength improvement, and long-term consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-white/10 bg-[#0a0f18] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#71b5ff]">Why this version works better</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Built to look premium and convert.</h2>
            <p className="mt-4 text-white/70 leading-7">
              This concept keeps Eliran’s blue, black, and white brand direction, but turns the experience into something more premium, structured, and trustworthy. Instead of template clutter, it focuses on clear offers, real transformation proof, and stronger call-to-actions.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {offers.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-4 h-10 w-10 rounded-2xl bg-[#1380ff]/18" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="border-y border-white/10 bg-[#070b12]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#71b5ff]">Success stories</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">Real transformations from the studio</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/65">
              The current website already shows strong before-and-after proof. Here it’s presented in a cleaner gallery that feels more premium and more believable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {transformations.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">Visible progress. Real clients. Real consistency.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#71b5ff]">Testimonials section</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">A cleaner way to present what people like about the studio</h2>
          <p className="mt-4 max-w-3xl text-white/66 leading-7">
            I couldn’t reliably extract the exact written review text from the current site because the success section is mostly image-based, so this section is designed as premium placeholder copy for now. The moment you send the actual review text, these cards can be swapped in directly.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {reviewPlaceholders.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-7">
              <div className="text-2xl text-[#71b5ff]">★★★★★</div>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="border-y border-white/10 bg-[#07101a]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#71b5ff]">Pricing</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Clear offers, cleaner structure</h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-bold">Personal & Partner Training</h3>
              <div className="mt-5 space-y-3">
                {pricing.map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/8 bg-[#0b1421] px-4 py-4">
                    <span className="text-white/80">{item.name}</span>
                    <span className="font-bold text-[#87c4ff]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[#1380ff]/20 bg-gradient-to-b from-[#0e1c30] to-[#09111d] p-6">
              <h3 className="text-xl font-bold">Small Group Monthly Memberships</h3>
              <div className="mt-5 space-y-3">
                {memberships.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">{item.name}</span>
                      <span className="font-bold text-[#87c4ff]">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-white/62">
                Sessions are scheduled during studio operating hours and adapted to the client’s level and workout type.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#71b5ff]">Contact</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Ready to start?</h2>
            <div className="mt-6 space-y-4 text-white/72">
              <p><span className="font-semibold text-white">Phone:</span> 052-5177007</p>
              <p><span className="font-semibold text-white">Email:</span> Eliran525@gmail.com</p>
              <p><span className="font-semibold text-white">Address:</span> Ben Zvi 60, Kiryat Haim (Haifa)</p>
            </div>
            <a
              href="https://wa.me/972525177007"
              className="mt-8 inline-flex rounded-2xl bg-[#1380ff] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_40px_rgba(19,128,255,0.28)]"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#08101c] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#71b5ff]">Lead form</p>
            <h3 className="mt-4 text-2xl font-black">Book a trial session</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <input placeholder="Full name" className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none placeholder:text-white/30" />
              <input placeholder="Phone number" className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none placeholder:text-white/30" />
              <input placeholder="Email address" className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none placeholder:text-white/30 sm:col-span-2" />
              <textarea placeholder="What is your goal?" rows={5} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 outline-none placeholder:text-white/30 sm:col-span-2" />
              <button className="rounded-2xl bg-white px-5 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#08101c] sm:col-span-2">
                Send Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
