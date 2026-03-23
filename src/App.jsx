import { Dumbbell, Flame, MapPin, Phone, Star, ArrowLeft, CheckCircle2, MessageCircle, Instagram } from "lucide-react";

export default function EliranFitnessLandingPage() {
  const services = [
    {
      title: "אימון אישי",
      text: "אימוני אחד על אחד עם תכנית שמותאמת למטרה שלך: חיטוב, ירידה במשקל, עלייה במסת שריר ושיפור הכושר הגופני.",
      icon: Dumbbell,
    },
    {
      title: "אימונים בקבוצות קטנות",
      text: "אווירה חזקה, יחס אישי אמיתי, מעקב צמוד ותשומת לב לכל מתאמן ומתאמנת לאורך כל הדרך.",
      icon: Flame,
    },
    {
      title: "ליווי תזונתי",
      text: "תפריט תזונה מותאם אישית שמשלים את האימונים ועוזר לייצר תוצאות אמיתיות שנשארות לאורך זמן.",
      icon: CheckCircle2,
    },
  ];

  const studioBenefits = [
    {
      title: "יחס אישי שמביא תוצאות",
      text: "הסטודיו משלב בין מקצועיות גבוהה לליווי אישי, מעקב אחרי כל שלב ותמיכה מלאה בדרך לשינוי.",
    },
    {
      title: "שיטה שממוקדת במטרה שלך",
      text: "התהליך נבנה לפי מה שאת או אתה צריכים באמת, בלי בלגן ובלי תכנית גנרית שלא מתאימה לכולם.",
    },
    {
      title: "אווירה של סטודיו, לא של חדר כושר עמוס",
      text: "מקום נקי, ממוקד ואישי יותר, שנותן לך להתאמן בצורה רצינית עם תחושה הרבה יותר טובה ובטוחה.",
    },
  ];

  const results = [
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627220404003-1920w-1920w.jpg",
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627984321849-1920w.jpg",
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/000-a13b518c-1920w.jpg",
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/KPBH%2BTJRH%2B-1920w.jpg",
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627984315763-1920w.jpg",
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627984325610-1920w.jpg",
  ];

  const highlights = [
    ["חיטוב ועיצוב הגוף", "01"],
    ["ירידה במשקל", "02"],
    ["שיפור כושר וביטחון", "03"],
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#06101d] text-white selection:bg-cyan-300 selection:text-black">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_28%),linear-gradient(180deg,#071425_0%,#050a14_56%,#04070d_100%)]" />
        <div className="absolute -top-24 right-1/2 h-[30rem] w-[30rem] translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-10 lg:pb-24">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <a
              href="https://wa.me/972525177007"
              className="rounded-full border border-cyan-300/30 bg-cyan-300/12 px-5 py-2 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/20"
            >
              וואטסאפ
            </a>

            <div className="hidden items-center gap-7 text-sm text-white/80 md:flex">
              <a href="#services" className="transition hover:text-cyan-200">שירותים</a>
              <a href="#results" className="transition hover:text-cyan-200">סיפורי הצלחה</a>
              <a href="#why" className="transition hover:text-cyan-200">למה דווקא אצלנו</a>
              <a href="#contact" className="transition hover:text-cyan-200">צור קשר</a>
            </div>

            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/85">ELIRAN NISANOV</p>
              <p className="mt-1 text-sm text-white/70">סטודיו לעיצוב וחיטוב הגוף</p>
            </div>
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:pt-8">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -right-6 top-10 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute -bottom-6 left-0 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10">
                  <img
                    src="https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/KPBH%2BTJRH%2B-1920w.jpg"
                    alt="סיפורי הצלחה"
                    className="h-[28rem] w-full rounded-[1.4rem] object-cover"
                  />
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-[#0a1628]/95 p-5 backdrop-blur-xl">
                  <p className="text-sm tracking-[0.25em] text-cyan-100/85">הגישה בסטודיו</p>
                  <p className="mt-4 text-2xl font-bold leading-tight text-white">יחס אישי, עבודה אמיתית ותוצאות שרואים.</p>
                </div>

                <div className="rounded-[1.75rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/18 to-blue-500/10 p-5 backdrop-blur-xl">
                  <p className="text-sm tracking-[0.25em] text-white/85">פרטים</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-white"><Phone className="h-4 w-4" /> 052-5177007</p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-white"><MapPin className="h-4 w-4" /> בן צבי 60, קרית חיים</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 text-right">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-xs tracking-[0.2em] text-white/85 backdrop-blur-xl">
                <Star className="h-3.5 w-3.5 fill-cyan-300 text-cyan-300" /> אימוני כושר בקרית חיים
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                הגיע הזמן להשקיע בעצמך
                <br />
                ולהתחיל לראות
                <br />
                תוצאות אמיתיות
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                ברוכים הבאים למתחם הכושר בקריות. הסטודיו של אלירן משלב בין מקצועיות בלתי מתפשרת, יחס אישי,
                אימונים בקבוצות קטנות ותהליך שמותאם בדיוק למטרה שלך.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-start">
                <a
                  href="https://wa.me/972525177007"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold tracking-[0.08em] text-[#071122] transition hover:scale-[1.02]"
                >
                  קבעו אימון ניסיון
                  <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                </a>
                <a
                  href="#results"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
                >
                  לצפייה בסיפורי הצלחה
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                {highlights.map(([label, n]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-[#0a1423]/95 p-5 backdrop-blur-xl">
                    <p className="text-sm font-bold text-cyan-200">{n}</p>
                    <p className="mt-4 text-lg font-semibold leading-7 text-white">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 text-right">
          <p className="text-xs tracking-[0.35em] text-cyan-200/80">שירותים</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">תהליך שבנוי סביב התוצאות שלך</h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">
            לא עוד אתר עמוס ולא ברור. כאן כל חלק מסביר ישר מה הסטודיו נותן, למי זה מתאים ואיך מתחילים.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-white/10 bg-[#0b1628]/95 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#0d1b31]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/14 text-cyan-100">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-8 text-white/75">{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="results" className="border-y border-white/10 bg-[#08111f]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="text-right">
            <p className="text-xs tracking-[0.35em] text-cyan-200/80">סיפורי הצלחה</p>
            <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-lg text-sm leading-8 text-white/72 lg:order-1">
                במקום פריסה ישנה ומבולגנת, הגלריה מציגה את התוצאות בצורה נקייה, חזקה ואמינה יותר.
              </p>
              <h2 className="max-w-2xl text-3xl font-black text-white sm:text-5xl lg:order-2">הוכחה אמיתית לתהליך אמיתי</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {results.map((img, i) => (
              <div key={img} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1728]/95 p-3">
                <img
                  src={img}
                  alt={`תוצאה ${i + 1}`}
                  className="h-[24rem] w-full rounded-[1.4rem] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(34,211,238,0.12),rgba(255,255,255,0.03))] p-8 text-right">
            <p className="text-xs tracking-[0.35em] text-cyan-100/90">למה דווקא אצלנו</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">מה באמת מקבלים בסטודיו</h2>
            <div className="mt-8 space-y-4">
              {studioBenefits.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#08101d]/80 p-5 backdrop-blur-xl">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-white/78">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 text-right">
            <p className="text-xs tracking-[0.35em] text-cyan-200/80">למי זה מתאים</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">אם אתם מחפשים שינוי אמיתי, זה בשבילכם</h2>
            <div className="mt-8 space-y-4">
              {[
                "למי שרוצה לרדת במשקל ולעצב את הגוף בצורה נכונה.",
                "למי שמחפש מסגרת עם יחס אישי ולא עוד חדר כושר עמוס ולא ממוקד.",
                "למי שרוצה ליווי מקצועי שמשלב אימון, תזונה, מעקב ותמיכה.",
                "למי שמחפש מקום להתחיל בו ברצינות ולהישאר עקבי לאורך זמן.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0a1322] px-5 py-4 text-white/85">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
                  <p className="leading-8">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_28%),linear-gradient(135deg,#0b1424,#07101d)] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="text-right">
              <p className="text-xs tracking-[0.35em] text-cyan-200/80">צור קשר</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">בואו לעצב את הגוף שלכם</h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/80">
                מחפשים תוצאות אמיתיות? זה הזמן להשאיר פרטים או לפנות ישירות לוואטסאפ ולהתחיל תהליך עם ליווי מקצועי, אישי ומדויק יותר.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-end gap-4 text-white/90">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Phone className="h-4 w-4 text-cyan-200" /> 052-5177007
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <MapPin className="h-4 w-4 text-cyan-200" /> קרית חיים, בן צבי 60
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="https://wa.me/972525177007"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold tracking-[0.08em] text-[#071122] transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                לשיחת ייעוץ בוואטסאפ
              </a>
              <a
                href="https://www.instagram.com/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
                לאינסטגרם
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
