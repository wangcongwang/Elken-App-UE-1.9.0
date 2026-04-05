import { type ReactNode, useState } from "react";

type NodeCardProps = {
  title: string;
  subtitle: string;
  accent: string;
  iconBackground: string;
  iconShadow: string;
  cardShadow: string;
  icon: ReactNode;
  collapsible?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
};

function ChevronDown({ expanded = true }: { expanded?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${expanded ? "rotate-0" : "-rotate-90"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19c-1.7-1.5-3.5-2.2-5.8-2.2A2.2 2.2 0 0 1 4 14.6V7.3A2.3 2.3 0 0 1 6.3 5c2.4 0 4.4.8 5.7 2.4C13.3 5.8 15.3 5 17.7 5A2.3 2.3 0 0 1 20 7.3v7.3a2.2 2.2 0 0 1-2.2 2.2c-2.3 0-4.1.7-5.8 2.2Z" />
      <path d="M12 7.4V19" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 3h4" />
      <path d="M10 3v4.2l-5.2 9.1A2.6 2.6 0 0 0 7.1 20h9.8a2.6 2.6 0 0 0 2.3-3.7L14 7.2V3" />
      <path d="M8.2 14h7.6" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4.5c-4.9 0-8.8 3.5-8.8 8 0 4.1 3 7 6.5 7 .8 0 1.5-.7 1.5-1.5 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-1.3 1.1-2.4 2.4-2.4h1.8c3.3 0 6.1-2.5 6.1-5.8 0-4.2-3.8-7-8.5-7Z" />
      <circle cx="7.7" cy="11.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.4" cy="8.1" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.2" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.3" cy="11" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function HammerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m14.8 5.2 4 4" />
      <path d="M8.8 11.2 4.5 18l1.5 1.5 6.8-4.3" />
      <path d="m10.1 9.9 3.1-3.1c.8-.8 2-.9 3-.4l2.2 1.1c.5.3 1.1.2 1.5-.2l.3-.3-3.7-3.7-.3.3c-.4.4-.5 1-.2 1.5l1.1 2.2c.5 1 .4 2.2-.4 3l-3.1 3.1" />
    </svg>
  );
}

function NodeCard({
  title,
  subtitle,
  accent,
  iconBackground,
  iconShadow,
  cardShadow,
  icon,
  collapsible = false,
  expanded = true,
  onToggle,
}: NodeCardProps) {
  return (
    <div
      className={`relative h-[238px] w-[278px] overflow-hidden border border-black/5 bg-white/95 ${collapsible ? "cursor-pointer" : "cursor-default"}`}
      style={{
        borderRadius: 28,
        boxShadow: cardShadow,
        backdropFilter: "blur(8px)",
      }}
      onClick={collapsible ? onToggle : undefined}
      role={collapsible ? "button" : undefined}
      tabIndex={collapsible ? 0 : undefined}
      onKeyDown={
        collapsible
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onToggle?.();
              }
            }
          : undefined
      }
      aria-expanded={collapsible ? expanded : undefined}
    >
      <div className="absolute inset-x-0 top-0 h-2" style={{ background: accent }} />

      {collapsible ? (
        <button
          type="button"
          className="absolute right-8 top-[104px] z-10 rounded-full p-1 transition-colors duration-200 hover:bg-slate-100"
          aria-label={expanded ? `折叠${title}` : `展开${title}`}
          onClick={(event) => {
            event.stopPropagation();
            onToggle?.();
          }}
        >
          <ChevronDown expanded={expanded} />
        </button>
      ) : null}

      <div className="flex h-full flex-col items-center justify-center gap-5 px-8 text-center">
        <div
          className="flex h-[64px] w-[64px] items-center justify-center rounded-full text-white"
          style={{
            background: iconBackground,
            boxShadow: iconShadow,
          }}
        >
          {icon}
        </div>

        <div className="space-y-1.5">
          <h2 className="text-[22px] font-bold leading-none tracking-[0.02em] text-[#182235]">{title}</h2>
          <p className="text-[18px] font-semibold tracking-[0.01em] text-[#7b8494]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export function App() {
  const [rootExpanded, setRootExpanded] = useState(true);
  const [cultureExpanded, setCultureExpanded] = useState(true);

  return (
    <div
      className="min-h-screen overflow-auto text-slate-900"
      style={{
        background:
          "linear-gradient(180deg, #f7f8fb 0%, #f1f3f6 55%, #edf1f5 100%)",
      }}
    >
      <div className="mx-auto flex min-h-screen min-w-[1180px] items-start justify-center px-8 py-16">
        <div
          className="relative w-[1120px] transition-all duration-500 ease-out"
          style={{
            height: rootExpanded ? (cultureExpanded ? 870 : 560) : 250,
          }}
        >
          <div className="absolute left-[422px] top-0">
            <NodeCard
              title="百科全书"
              subtitle="综合知识库"
              accent="linear-gradient(90deg, #3b82f6 0%, #4f46e5 100%)"
              iconBackground="linear-gradient(180deg, #4f7cff 0%, #4a4df3 100%)"
              iconShadow="0 14px 30px rgba(79, 92, 243, 0.30)"
              cardShadow="0 26px 56px rgba(62, 73, 105, 0.14), 0 4px 14px rgba(79, 92, 243, 0.08)"
              icon={<BookIcon />}
              collapsible
              expanded={rootExpanded}
              onToggle={() => setRootExpanded((value) => !value)}
            />
          </div>

          <div
            className={`absolute left-0 top-[246px] h-[624px] w-full transition-all duration-500 ease-out ${
              rootExpanded ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-6 opacity-0"
            }`}
          >
            <div className="absolute left-[560px] top-0 h-[56px] w-px bg-[#d7dce3]" />
            <div className="absolute left-[179px] top-[56px] h-px w-[591px] bg-[#d7dce3]" />
            <div className="absolute left-[552px] top-[48px] h-4 w-4 rounded-full bg-[#c8cdd6]" />

            <div className="absolute left-[40px] top-[72px]">
              <NodeCard
                title="科学"
                subtitle="系统研究"
                accent="linear-gradient(90deg, #10b981 0%, #0ea5a4 100%)"
                iconBackground="linear-gradient(180deg, #13c79d 0%, #0aa989 100%)"
                iconShadow="0 14px 28px rgba(16, 185, 129, 0.28)"
                cardShadow="0 26px 56px rgba(27, 89, 78, 0.12), 0 4px 14px rgba(16, 185, 129, 0.07)"
                icon={<FlaskIcon />}
              />
            </div>

            <div className="absolute left-[631px] top-[72px]">
              <NodeCard
                title="文化"
                subtitle="人类表达"
                accent="linear-gradient(90deg, #eab308 0%, #f97316 100%)"
                iconBackground="linear-gradient(180deg, #f6a300 0%, #ff7a00 100%)"
                iconShadow="0 14px 28px rgba(249, 115, 22, 0.26)"
                cardShadow="0 26px 56px rgba(111, 80, 27, 0.12), 0 4px 14px rgba(249, 115, 22, 0.07)"
                icon={<PaletteIcon />}
                collapsible
                expanded={cultureExpanded}
                onToggle={() => setCultureExpanded((value) => !value)}
              />
            </div>

            <div
              className={`absolute inset-x-0 top-[310px] h-[314px] transition-all duration-500 ease-out ${
                cultureExpanded ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
              }`}
            >
              <div className="absolute left-[770px] top-0 h-[54px] w-px bg-[#d7dce3]" />
              <div className="absolute left-[551px] top-[54px] h-px w-[376px] bg-[#d7dce3]" />
              <div className="absolute left-[762px] top-[46px] h-4 w-4 rounded-full bg-[#c8cdd6]" />

              <div className="absolute left-[412px] top-[72px]">
                <NodeCard
                  title="艺术"
                  subtitle="创意表达"
                  accent="linear-gradient(90deg, #a855f7 0%, #ec4899 100%)"
                  iconBackground="linear-gradient(180deg, #c36bf1 0%, #df3ea8 100%)"
                  iconShadow="0 14px 28px rgba(219, 39, 119, 0.24)"
                  cardShadow="0 26px 56px rgba(114, 51, 117, 0.12), 0 4px 14px rgba(219, 39, 119, 0.07)"
                  icon={<PaletteIcon />}
                />
              </div>

              <div className="absolute left-[788px] top-[72px]">
                <NodeCard
                  title="工艺"
                  subtitle="熟练实践"
                  accent="linear-gradient(90deg, #fb7185 0%, #ff0033 100%)"
                  iconBackground="linear-gradient(180deg, #ff5a72 0%, #ff173c 100%)"
                  iconShadow="0 14px 28px rgba(255, 23, 60, 0.24)"
                  cardShadow="0 26px 56px rgba(127, 43, 59, 0.12), 0 4px 14px rgba(255, 23, 60, 0.07)"
                  icon={<HammerIcon />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
