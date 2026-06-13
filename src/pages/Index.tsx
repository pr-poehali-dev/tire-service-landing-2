import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const WA_LINK = "https://wa.me/79047570012";
const PHONE = "+7 (904) 757-00-12";
const PHONE_HREF = "tel:+79047570012";
const ADDRESS = "Зеленодольская ул., 21, Волгоград";
const YANDEX_MAP_URL = "https://yandex.ru/maps/38/volgograd/?text=Зеленодольская+ул.+21+Волгоград";
const YANDEX_IFRAME_SRC = "https://yandex.ru/map-widget/v1/?text=Зеленодольская+ул.+21+Волгоград&z=16&l=map";

const BG_GARAGE = "https://cdn.poehali.dev/projects/43985343-8335-4a0c-a75b-f931959b000f/files/552f17bc-a570-48ee-bd9a-0af81d8f7a1b.jpg";
const BG_TIRE = "https://cdn.poehali.dev/projects/43985343-8335-4a0c-a75b-f931959b000f/files/51f64746-a6b8-4c8f-9e28-35bbece8b555.jpg";
const BG_CARS = "https://cdn.poehali.dev/projects/43985343-8335-4a0c-a75b-f931959b000f/files/077362ef-3cc2-465d-a175-3c85aa2c0036.jpg";

/* ── WhatsApp SVG ── */
const WAIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.771.463 3.432 1.27 4.878L2 22l5.234-1.246A9.953 9.953 0 0012.004 22C17.53 22 22 17.523 22 12c0-5.523-4.47-10-9.996-10zm0 18.188a8.177 8.177 0 01-4.188-1.148l-.3-.178-3.104.739.778-3.018-.196-.31A8.188 8.188 0 1112.004 20.188z" />
  </svg>
);

/* ── Scroll-reveal hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Reveal wrapper ── */
function Reveal({
  children,
  delay = 0,
  className = "",
  from = "bottom",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right";
}) {
  const { ref, visible } = useReveal();
  const translate = from === "left" ? "translateX(-40px)" : from === "right" ? "translateX(40px)" : "translateY(40px)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : translate,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Counter animation ── */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, visible } = useReveal();
  useEffect(() => {
    if (!visible) return;
    const duration = 1400;
    const steps = 60;
    const step = target / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{val.toLocaleString("ru-RU")}{suffix}</span>;
}

/* ── Photo BG section ── */
function PhotoSection({
  src,
  children,
  className = "",
  overlay = "rgba(10,10,10,0.72)",
}: {
  src: string;
  children: React.ReactNode;
  className?: string;
  overlay?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0" style={{ backdropFilter: "blur(3px)", backgroundColor: overlay }} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/* ════════════════════════════════════ */
export default function Index() {
  /* Hero intro state */
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  const heroItem = (delay: number) => ({
    opacity: heroReady ? 1 : 0,
    transform: heroReady ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-white)" }}>

      {/* ═══════════════ 1. HERO ═══════════════ */}
      <section
        className="relative flex flex-col justify-center items-center text-center px-4 overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Background photo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${BG_GARAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.06)",
            filter: "blur(2px)",
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.78) 60%, #0f0f0f 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(226,75,74,0.12) 0%, transparent 65%)" }} />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, transparent, var(--color-red), transparent)" }} />

        <div className="relative z-10 flex flex-col items-center max-w-5xl w-full">
          {/* Brand badge */}
          <div style={heroItem(0)} className="mb-8 flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--color-red)", boxShadow: "0 0 24px rgba(226,75,74,0.5)" }}>
              <Icon name="Wrench" size={20} className="text-white" />
            </div>
            <span className="font-display text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.55)" }}>
              Волгоград · Зеленодольская, 21
            </span>
          </div>

          {/* H1 */}
          <h1 style={heroItem(150)} className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.92] max-w-4xl">
            Шиномонтаж<br />
            <span style={{ color: "var(--color-red)", textShadow: "0 0 60px rgba(226,75,74,0.4)" }}>на Зеленодольской</span>
          </h1>

          {/* Sub headline */}
          <p style={heroItem(300)} className="font-display text-xl sm:text-2xl md:text-3xl font-medium uppercase mt-4 tracking-wide" style2={{ color: "rgba(255,255,255,0.7)" }}>
            <span style={{ color: "rgba(255,255,255,0.65)" }}>— запись онлайн,&nbsp;</span>
            <span className="text-white">без очереди</span>
          </p>

          {/* Work hours pill */}
          <div style={heroItem(450)} className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full" style2={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#4ade80" }} />
            <span className="font-body text-sm text-white/70">
              Пн–Сб 8:00–20:00 &nbsp;·&nbsp; Вс 9:00–17:00 &nbsp;·&nbsp; Принимаем без записи
            </span>
          </div>

          {/* CTA block */}
          <div style={heroItem(600)} className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green flex items-center gap-3 px-8 py-5 text-lg shadow-2xl"
              style={{ boxShadow: "0 8px 40px rgba(37,211,102,0.35)" }}
            >
              <WAIcon size={24} />
              Записаться в WhatsApp
            </a>
            <a href={PHONE_HREF} className="font-display text-2xl sm:text-3xl font-bold" style={{ color: "#fff", textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>
              {PHONE}
            </a>
          </div>

          {/* 3 arguments */}
          <div style={heroItem(750)} className="mt-14 grid grid-cols-3 gap-3 sm:gap-8 max-w-xl w-full">
            {[
              { icon: "Award", label: "Опыт 10 лет" },
              { icon: "ShieldCheck", label: "Гарантия 30 дней" },
              { icon: "Car", label: "Бесплатная парковка" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 group">
                <div
                  className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(226,75,74,0.15)", border: "1px solid rgba(226,75,74,0.3)", boxShadow: "0 0 20px rgba(226,75,74,0.1)" }}
                >
                  <Icon name={item.icon} fallback="Star" size={22} style={{ color: "var(--color-red)" }} />
                </div>
                <span className="font-body text-xs sm:text-sm text-center" style={{ color: "rgba(255,255,255,0.55)" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={heroItem(1000)} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="font-display text-[10px] uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.3)" }}>Листайте</span>
          <Icon name="ChevronDown" size={22} className="animate-bounce" style={{ color: "rgba(255,255,255,0.3)" }} />
        </div>
      </section>

      {/* ═══════════════ 2. ДОВЕРИЕ ═══════════════ */}
      <PhotoSection src={BG_TIRE} overlay="rgba(8,8,8,0.82)" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] mb-2" style={{ color: "var(--color-red)" }}>Почему нам доверяют</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase mb-4">Цифры говорят<br />сами за себя</h2>
            <div className="w-16 h-[3px] mb-14" style={{ background: "var(--color-red)" }} />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { raw: 2014, suffix: "", label: "Работаем с", sub: "12 лет в автосервисе Волгограда", icon: "Calendar" },
              { raw: 3200, suffix: "+", label: "Машин за сезон", sub: "Справляемся в любой загруженности", icon: "Car" },
              { raw: 30, suffix: " дней", label: "Гарантия на работу", sub: "Вернём деньги или исправим бесплатно", icon: "ShieldCheck" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 120}>
                <div
                  className="rounded-2xl p-8 h-full group transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(226,75,74,0.15)", border: "1px solid rgba(226,75,74,0.25)" }}>
                    <Icon name={item.icon} fallback="Star" size={22} style={{ color: "var(--color-red)" }} />
                  </div>
                  <div className="font-display text-5xl sm:text-6xl font-bold mb-1" style={{ color: "var(--color-red)" }}>
                    <CountUp target={item.raw} suffix={item.suffix} />
                  </div>
                  <div className="w-10 h-[2px] my-4" style={{ background: "rgba(226,75,74,0.4)" }} />
                  <div className="font-display text-lg font-semibold uppercase tracking-wide mb-2">{item.label}</div>
                  <div className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Extra row of mini facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { val: "20 мин", label: "Среднее время работы" },
              { val: "4.9 ★", label: "Средняя оценка" },
              { val: "0 ₽", label: "Парковка" },
              { val: "5 мин", label: "Ответ в WhatsApp" },
            ].map((f, i) => (
              <Reveal key={f.val} delay={i * 80}>
                <div className="rounded-xl px-5 py-4 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="font-display text-2xl font-bold text-white mb-1">{f.val}</div>
                  <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{f.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </PhotoSection>

      {/* ═══════════════ 3. УСЛУГИ И ЦЕНЫ ═══════════════ */}
      <section className="py-24 px-4" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] mb-2" style={{ color: "var(--color-red)" }}>Прайс-лист</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase mb-4">Услуги и цены</h2>
            <div className="w-16 h-[3px] mb-14" style={{ background: "var(--color-red)" }} />
          </Reveal>

          <div className="flex flex-col gap-3">
            {[
              { name: "Шиномонтаж R13–R15", price: "от 150 ₽", unit: "/колесо", time: "20 мин", hit: true, popular: true },
              { name: "Шиномонтаж R16–R18", price: "от 200 ₽", unit: "/колесо", time: "25 мин", hit: false, popular: false },
              { name: "Шиномонтаж R19–R21", price: "от 300 ₽", unit: "/колесо", time: "30 мин", hit: false, popular: false },
              { name: "Балансировка колеса", price: "от 100 ₽", unit: "/колесо", time: null, hit: false, popular: false },
              { name: "Хранение шин", price: "от 1 500 ₽", unit: "/сезон", time: null, hit: false, popular: false },
            ].map((row, idx) => (
              <Reveal key={row.name} delay={idx * 80}>
                <div
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                  style={{
                    background: row.popular ? "rgba(226,75,74,0.08)" : "rgba(255,255,255,0.03)",
                    border: row.popular ? "1px solid rgba(226,75,74,0.3)" : "1px solid rgba(255,255,255,0.07)",
                    boxShadow: row.popular ? "0 4px 32px rgba(226,75,74,0.12)" : "none",
                  }}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-1.5 h-10 rounded-full flex-shrink-0" style={{ background: row.popular ? "var(--color-red)" : "rgba(255,255,255,0.1)" }} />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-body font-semibold text-base sm:text-lg text-white">{row.name}</span>
                        {row.hit && <span className="badge-hit">Хит</span>}
                      </div>
                      {row.time && (
                        <span className="font-body text-xs flex items-center gap-1 mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          <Icon name="Clock" size={11} />
                          {row.time}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-5 ml-[22px] sm:ml-0">
                    <div className="text-right">
                      <span className="font-display text-2xl sm:text-3xl font-bold" style={{ color: "var(--color-red)" }}>{row.price}</span>
                      <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{row.unit}</span>
                    </div>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex btn-green items-center gap-2 px-5 py-2.5 text-sm whitespace-nowrap"
                    >
                      <WAIcon size={16} />
                      Записаться
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-8 flex items-start gap-3 px-5 py-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Icon name="Info" size={16} style={{ color: "var(--color-red)", flexShrink: 0, marginTop: 2 }} />
              <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                Не знаете свой размер? Посмотрите на боковину шины — там написано, например:{" "}
                <strong style={{ color: "rgba(255,255,255,0.75)" }}>205/55 R16</strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 4. КАК ЗАПИСАТЬСЯ ═══════════════ */}
      <PhotoSection src={BG_CARS} overlay="rgba(8,8,8,0.85)" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] mb-2" style={{ color: "var(--color-red)" }}>Три простых шага</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase mb-4">Как записаться</h2>
            <div className="w-16 h-[3px] mb-14" style={{ background: "var(--color-red)" }} />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: "01", emoji: "💬", title: "Напишите или позвоните", desc: "WhatsApp или звонок — как вам удобно. Ответим за 5 минут." },
              { step: "02", emoji: "📅", title: "Выберем время", desc: "Подберём ближайший свободный слот — без очереди и ожидания." },
              { step: "03", emoji: "🚗", title: "Приезжайте", desc: "Сделаем за 20–30 минут и отпустим с письменной гарантией." },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 150} from={i === 0 ? "left" : i === 2 ? "right" : "bottom"}>
                <div
                  className="relative rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-2 group"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Step number */}
                  <div className="absolute top-6 right-6 font-display text-5xl font-bold" style={{ color: "rgba(226,75,74,0.12)", lineHeight: 1 }}>
                    {item.step}
                  </div>
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(226,75,74,0.12)", border: "1px solid rgba(226,75,74,0.2)" }}
                  >
                    {item.emoji}
                  </div>
                  <div className="font-display text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--color-red)" }}>Шаг {item.step}</div>
                  <div className="font-display text-xl font-bold uppercase mb-3">{item.title}</div>
                  <div className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-14 text-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green inline-flex items-center gap-3 px-12 py-5 text-xl"
                style={{ boxShadow: "0 8px 40px rgba(37,211,102,0.3)" }}
              >
                <WAIcon size={24} />
                Написать в WhatsApp сейчас
              </a>
              <p className="font-body text-sm mt-4" style={{ color: "rgba(255,255,255,0.35)" }}>
                Среднее время ответа — 5 минут в рабочее время
              </p>
            </div>
          </Reveal>
        </div>
      </PhotoSection>

      {/* ═══════════════ 5. ОТЗЫВЫ ═══════════════ */}
      <section className="py-24 px-4" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] mb-2" style={{ color: "var(--color-red)" }}>Отзывы клиентов</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase mb-4">Что говорят<br />наши клиенты</h2>
            <div className="w-16 h-[3px] mb-14" style={{ background: "var(--color-red)" }} />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Алексей К.",
                date: "Октябрь 2024",
                text: "Быстро и без нервов — приехал утром, через 25 минут уже уехал с новой резиной. Ребята работают слаженно, цена честная. Буду возвращаться каждый сезон.",
                car: "Toyota Camry",
              },
              {
                name: "Наталья В.",
                date: "Ноябрь 2024",
                text: "Записалась через WhatsApp — ответили за 3 минуты, назначили точное время. Никакой очереди, всё как и обещали. Отдельный плюс за бесплатную парковку рядом.",
                car: "Kia Rio",
              },
              {
                name: "Сергей М.",
                date: "Апрель 2025",
                text: "Хранил шины у них всю зиму — забрал в идеальном состоянии. Переобулись на сезон за 20 минут. Рекомендую всем знакомым в Краснооктябрьском районе.",
                car: "Lada Vesta",
              },
            ].map((review, i) => (
              <Reveal key={review.name} delay={i * 120}>
                <div
                  className="rounded-2xl p-7 flex flex-col gap-5 h-full transition-all duration-300 hover:-translate-y-2 group"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex gap-0.5 text-xl" style={{ color: "#FFB800" }}>★★★★★</div>
                  <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                    «{review.text}»
                  </p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold"
                      style={{ background: "rgba(226,75,74,0.18)", color: "var(--color-red)", fontSize: 16 }}
                    >
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-body font-semibold text-sm text-white">{review.name}</div>
                      <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {review.car} · {review.date}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="text-center mt-10">
              <a
                href="https://yandex.ru/maps/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Смотреть все отзывы на Яндекс.Картах
                <Icon name="ExternalLink" size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 6. КАК НАС НАЙТИ ═══════════════ */}
      <section className="py-24 px-4" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] mb-2" style={{ color: "var(--color-red)" }}>Навигация</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase mb-4">Как нас найти</h2>
            <div className="w-16 h-[3px] mb-14" style={{ background: "var(--color-red)" }} />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal from="left">
              <div className="flex flex-col gap-7">
                {[
                  { icon: "MapPin", label: "Адрес", main: ADDRESS, sub: "Ориентир: рядом с магазином Магнит" },
                  { icon: "Clock", label: "Режим работы", main: "Пн–Сб: 8:00–20:00", sub: "Вс: 9:00–17:00" },
                  { icon: "Car", label: "Парковка", main: "Бесплатная парковка на территории", sub: "" },
                  { icon: "Phone", label: "Телефон", main: PHONE, sub: "", link: PHONE_HREF },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div
                      className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: "rgba(226,75,74,0.12)", border: "1px solid rgba(226,75,74,0.22)" }}
                    >
                      <Icon name={item.icon} fallback="MapPin" size={18} style={{ color: "var(--color-red)" }} />
                    </div>
                    <div>
                      <div className="font-display text-xs uppercase tracking-[0.15em] mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>{item.label}</div>
                      {item.link
                        ? <a href={item.link} className="font-body font-semibold text-white hover:text-red-400 transition-colors">{item.main}</a>
                        : <div className="font-body font-semibold text-white">{item.main}</div>
                      }
                      {item.sub && <div className="font-body text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{item.sub}</div>}
                    </div>
                  </div>
                ))}

                <a
                  href={YANDEX_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red inline-flex items-center gap-2 px-7 py-3.5 text-sm self-start mt-2"
                >
                  <Icon name="Navigation" size={16} className="text-white" />
                  Построить маршрут
                </a>
              </div>
            </Reveal>

            <Reveal from="right">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 48px rgba(0,0,0,0.5)" }}
              >
                <iframe
                  src={YANDEX_IFRAME_SRC}
                  width="100%"
                  height="420"
                  frameBorder="0"
                  allowFullScreen
                  title="Шиномонтаж на Зеленодольской на карте"
                  style={{ display: "block" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ 7. ФИНАЛЬНЫЙ CTA ═══════════════ */}
      <PhotoSection
        src={BG_GARAGE}
        overlay="rgba(6,16,8,0.88)"
        className="py-28 px-4"
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(37,211,102,0.08) 0%, transparent 65%)" }} />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display uppercase tracking-[0.2em] mb-8"
              style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.22)", color: "#4ade80" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse inline-block" style={{ background: "#4ade80" }} />
              Принимаем прямо сейчас
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase mb-5 text-white leading-tight">
              Запишитесь<br />прямо сейчас
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-body text-lg mb-12" style={{ color: "rgba(255,255,255,0.5)" }}>
              Отвечаем в течение 5 минут в рабочее время.<br />
              Без очередей, без нервов.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green flex items-center gap-3 px-10 py-5 text-xl w-full sm:w-auto justify-center"
                style={{ boxShadow: "0 8px 48px rgba(37,211,102,0.3)" }}
              >
                <WAIcon size={26} />
                Узнать свободное время
              </a>
              <a href={PHONE_HREF} className="font-display text-2xl font-bold text-white hover:text-red-400 transition-colors">
                {PHONE}
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex justify-center gap-6 font-body text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
              <span>Пн–Сб: 8:00–20:00</span>
              <span>·</span>
              <span>Вс: 9:00–17:00</span>
            </div>
          </Reveal>
        </div>
      </PhotoSection>

      {/* ── Footer ── */}
      <footer className="py-8 px-4 text-center" style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
          © 2025 Шиномонтаж на Зеленодольской · {ADDRESS}
        </div>
      </footer>

      {/* ── Floating WhatsApp (mobile) ── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-full sm:hidden"
        style={{
          background: "#25D366",
          color: "#fff",
          boxShadow: "0 6px 32px rgba(37,211,102,0.45)",
        }}
      >
        <WAIcon size={22} />
        <span className="font-display text-sm font-semibold uppercase tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
}
