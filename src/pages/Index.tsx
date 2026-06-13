import Icon from "@/components/ui/icon";

const WA_LINK = "https://wa.me/79047570012";
const PHONE = "+7 (904) 757-00-12";
const PHONE_HREF = "tel:+79047570012";
const ADDRESS = "Зеленодольская ул., 21, Волгоград";
const YANDEX_MAP_URL =
  "https://yandex.ru/maps/38/volgograd/?text=Зеленодольская+ул.+21+Волгоград";
const YANDEX_IFRAME_SRC =
  "https://yandex.ru/map-widget/v1/?text=Зеленодольская+ул.+21+Волгоград&z=16&l=map";

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.771.463 3.432 1.27 4.878L2 22l5.234-1.246A9.953 9.953 0 0012.004 22C17.53 22 22 17.523 22 12c0-5.523-4.47-10-9.996-10zm0 18.188a8.177 8.177 0 01-4.188-1.148l-.3-.178-3.104.739.778-3.018-.196-.31A8.188 8.188 0 1112.004 20.188z" />
  </svg>
);

export default function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-white)" }}>

      {/* ── 1. HERO ── */}
      <section
        className="hero-bg relative flex flex-col justify-center items-center text-center px-4"
        style={{ minHeight: "100vh" }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: "var(--color-red)" }} />

        <div className="animate-fade-up mb-8 flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "var(--color-red)" }}
          >
            <Icon name="Wrench" size={20} className="text-white" />
          </div>
          <span className="font-display text-sm uppercase tracking-[0.2em]" style={{ color: "var(--color-muted)" }}>
            Шиномонтаж на Зеленодольской
          </span>
        </div>

        <h1
          className="font-display animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight max-w-4xl"
          style={{ letterSpacing: "-0.01em" }}
        >
          Шиномонтаж на{" "}
          <span style={{ color: "var(--color-red)" }}>Зеленодольской</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl font-medium">
            — запись онлайн, без очереди
          </span>
        </h1>

        <p
          className="animate-fade-up-delay-2 mt-6 text-lg sm:text-xl font-body"
          style={{ color: "var(--color-muted)" }}
        >
          Пн–Сб 8:00–20:00 &nbsp;·&nbsp; Вс 9:00–17:00
          <br />
          <span style={{ color: "var(--color-white)" }}>Принимаем без предварительной записи</span>
        </p>

        <div className="animate-fade-up-delay-3 mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green flex items-center gap-3 px-8 py-4 text-lg"
          >
            <WhatsAppIcon />
            Записаться в WhatsApp
          </a>
          <a
            href={PHONE_HREF}
            className="font-display text-2xl sm:text-3xl font-bold tracking-wide"
            style={{ color: "var(--color-white)" }}
          >
            {PHONE}
          </a>
        </div>

        <div className="animate-fade-up-delay-3 mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl w-full">
          {[
            { icon: "Award", label: "Опыт 10 лет" },
            { icon: "ShieldCheck", label: "Гарантия 30 дней" },
            { icon: "Car", label: "Бесплатная парковка" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(226,75,74,0.12)", border: "1px solid rgba(226,75,74,0.25)" }}
              >
                <Icon name={item.icon} fallback="Star" size={22} style={{ color: "var(--color-red)" }} />
              </div>
              <span className="font-body text-xs sm:text-sm text-center" style={{ color: "var(--color-muted)" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>

      {/* ── 2. ДОВЕРИЕ ── */}
      <section className="section-alt py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.25em] mb-2" style={{ color: "var(--color-red)" }}>
            Почему нам доверяют
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-12">
            Цифры говорят сами за себя
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: "2014", unit: "", label: "Работаем с", sub: "12 лет в автосервисе Волгограда" },
              { num: "3 200+", unit: "", label: "Машин за сезон", sub: "Справляемся в любой загруженности" },
              { num: "30", unit: "дней", label: "Гарантия на работу", sub: "Вернём деньги или исправим бесплатно" },
            ].map((item) => (
              <div
                key={item.label}
                className="card-hover rounded-2xl p-8"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <div className="font-display text-5xl sm:text-6xl font-bold" style={{ color: "var(--color-red)" }}>
                  {item.num}
                  {item.unit && <span className="text-3xl ml-1">{item.unit}</span>}
                </div>
                <div className="divider-red mt-4 mb-3" />
                <div className="font-display text-lg font-semibold uppercase tracking-wide mb-1">{item.label}</div>
                <div className="font-body text-sm" style={{ color: "var(--color-muted)" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. УСЛУГИ И ЦЕНЫ ── */}
      <section className="section-dark py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.25em] mb-2" style={{ color: "var(--color-red)" }}>
            Прайс-лист
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-12">
            Услуги и цены
          </h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
            {[
              { name: "Шиномонтаж R13–R15", price: "от 150 ₽/колесо", time: "20 мин", hit: true },
              { name: "Шиномонтаж R16–R18", price: "от 200 ₽/колесо", time: "25 мин", hit: false },
              { name: "Шиномонтаж R19–R21", price: "от 300 ₽/колесо", time: "30 мин", hit: false },
              { name: "Балансировка", price: "от 100 ₽/колесо", time: "—", hit: false },
              { name: "Хранение шин", price: "от 1 500 ₽/сезон", time: "—", hit: false },
            ].map((row, idx) => (
              <div
                key={row.name}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5 transition-colors duration-200"
                style={{
                  backgroundColor: idx % 2 === 0 ? "var(--color-bg)" : "var(--color-bg-alt)",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-body font-medium text-base sm:text-lg">{row.name}</span>
                  {row.hit && <span className="badge-hit">Хит</span>}
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  {row.time !== "—" && (
                    <span className="font-body text-sm flex items-center gap-1" style={{ color: "var(--color-muted)" }}>
                      <Icon name="Clock" size={14} />
                      {row.time}
                    </span>
                  )}
                  <span className="font-display text-xl font-bold" style={{ color: "var(--color-red)" }}>
                    {row.price}
                  </span>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex btn-green items-center gap-2 px-4 py-2 text-sm"
                  >
                    Записаться
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-sm mt-6 text-center" style={{ color: "var(--color-muted)" }}>
            Не знаете свой размер? Посмотрите на боковину шины — там написано, например:{" "}
            <strong style={{ color: "var(--color-white)" }}>205/55 R16</strong>
          </p>
        </div>
      </section>

      {/* ── 4. КАК ЗАПИСАТЬСЯ ── */}
      <section className="section-alt py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.25em] mb-2" style={{ color: "var(--color-red)" }}>
            Три простых шага
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-12">
            Как записаться
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            <div
              className="hidden sm:block absolute top-[52px] left-[16.66%] right-[16.66%] h-[1px]"
              style={{ backgroundColor: "var(--color-border)" }}
            />
            {[
              { step: "01", emoji: "💬", title: "Напишите или позвоните", desc: "WhatsApp или звонок — как вам удобно" },
              { step: "02", emoji: "📅", title: "Выберем время", desc: "Подберём слот без очереди и ожидания" },
              { step: "03", emoji: "🚗", title: "Приезжайте", desc: "Сделаем за 20–30 минут и отпустим с гарантией" },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center relative">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl mb-6 relative z-10"
                  style={{ backgroundColor: "var(--color-bg)", border: "2px solid var(--color-border)" }}
                >
                  {item.emoji}
                </div>
                <div className="font-display text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--color-red)" }}>
                  Шаг {item.step}
                </div>
                <div className="font-display text-xl font-bold uppercase mb-2">{item.title}</div>
                <div className="font-body text-sm" style={{ color: "var(--color-muted)" }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green inline-flex items-center gap-3 px-10 py-5 text-lg"
            >
              <WhatsAppIcon />
              Написать в WhatsApp сейчас
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. ОТЗЫВЫ ── */}
      <section className="section-dark py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.25em] mb-2" style={{ color: "var(--color-red)" }}>
            Отзывы клиентов
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-12">
            Что говорят наши клиенты
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Алексей К.",
                date: "Октябрь 2024",
                text: "Быстро и без нервов — приехал утром, через 25 минут уже уехал с новой резиной. Ребята работают слаженно, цена честная. Буду возвращаться каждый сезон.",
              },
              {
                name: "Наталья В.",
                date: "Ноябрь 2024",
                text: "Записалась через WhatsApp — ответили за 3 минуты, назначили точное время. Никакой очереди, всё как и обещали. Отдельный плюс за бесплатную парковку рядом.",
              },
              {
                name: "Сергей М.",
                date: "Апрель 2025",
                text: "Хранил шины у них всю зиму — забрал в идеальном состоянии. Переобулись на сезон за 20 минут. Рекомендую всем знакомым в Краснооктябрьском районе.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="card-hover rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: "var(--color-bg-alt)" }}
              >
                <div className="flex gap-0.5" style={{ color: "#FFB800" }}>
                  {"★★★★★"}
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(245,245,245,0.85)" }}>
                  «{review.text}»
                </p>
                <div className="mt-auto flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm"
                    style={{ backgroundColor: "rgba(226,75,74,0.15)", color: "var(--color-red)" }}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-sm">{review.name}</div>
                    <div className="font-body text-xs" style={{ color: "var(--color-muted)" }}>{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://yandex.ru/maps/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm underline underline-offset-4 transition-colors"
              style={{ color: "var(--color-muted)" }}
            >
              Смотреть все отзывы на Яндекс.Картах →
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. КАК НАС НАЙТИ ── */}
      <section className="section-alt py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.25em] mb-2" style={{ color: "var(--color-red)" }}>
            Навигация
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase mb-12">
            Как нас найти
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: "MapPin",
                  label: "Адрес",
                  main: ADDRESS,
                  sub: "Ориентир: рядом с магазином Магнит",
                },
                {
                  icon: "Clock",
                  label: "Режим работы",
                  main: "Пн–Сб: 8:00–20:00",
                  sub: "Вс: 9:00–17:00",
                },
                {
                  icon: "Car",
                  label: "Парковка",
                  main: "Бесплатная парковка на территории",
                  sub: "",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(226,75,74,0.12)", border: "1px solid rgba(226,75,74,0.25)" }}
                  >
                    <Icon name={item.icon} fallback="MapPin" size={18} style={{ color: "var(--color-red)" }} />
                  </div>
                  <div>
                    <div className="font-display text-xs uppercase tracking-[0.15em] mb-1" style={{ color: "var(--color-muted)" }}>
                      {item.label}
                    </div>
                    <div className="font-body font-medium">{item.main}</div>
                    {item.sub && <div className="font-body text-sm mt-0.5" style={{ color: "var(--color-muted)" }}>{item.sub}</div>}
                  </div>
                </div>
              ))}

              <a
                href={YANDEX_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red inline-flex items-center gap-2 px-6 py-3 text-sm self-start"
              >
                <Icon name="Navigation" size={16} className="text-white" />
                Построить маршрут
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--color-border)", minHeight: "300px" }}>
              <iframe
                src={YANDEX_IFRAME_SRC}
                width="100%"
                height="380"
                frameBorder="0"
                allowFullScreen
                title="Шиномонтаж на Зеленодольской на карте"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. ФИНАЛЬНЫЙ CTA ── */}
      <section
        className="py-24 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1a10 0%, #0f2010 40%, #0d1a10 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(37,211,102,0.07) 0%, transparent 70%)" }}
        />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display uppercase tracking-[0.2em] mb-6"
            style={{ backgroundColor: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.25)", color: "#25D366" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            Принимаем прямо сейчас
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-4 text-white">
            Запишитесь прямо сейчас
          </h2>
          <p className="font-body text-lg mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
            Отвечаем в течение 5 минут в рабочее время
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green flex items-center gap-3 px-10 py-5 text-xl w-full sm:w-auto justify-center"
            >
              <WhatsAppIcon />
              Узнать свободное время
            </a>
            <a
              href={PHONE_HREF}
              className="font-display text-2xl font-bold tracking-wide"
              style={{ color: "var(--color-white)" }}
            >
              {PHONE}
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-6 font-body text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            <span>Пн–Сб: 8:00–20:00</span>
            <span>·</span>
            <span>Вс: 9:00–17:00</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center section-dark" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="font-body text-sm" style={{ color: "var(--color-muted)" }}>
          © 2025 Шиномонтаж на Зеленодольской · {ADDRESS}
        </div>
      </footer>

      {/* FLOATING WhatsApp (mobile only) */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl sm:hidden"
        style={{
          backgroundColor: "#25D366",
          color: "#fff",
          boxShadow: "0 8px 32px rgba(37,211,102,0.4)",
        }}
      >
        <WhatsAppIcon />
        <span className="font-display text-sm font-semibold uppercase tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
}