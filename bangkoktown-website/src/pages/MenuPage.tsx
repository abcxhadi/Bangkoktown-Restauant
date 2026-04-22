import React, { useEffect, useRef, useState } from "react";
import { BranchSelectionModal } from "../components/ui";

declare global {
  interface Window {
    pdfjsLib: any;
  }
}

const menuPageCss = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@200;300;400&display=swap');

.menu-root {
  position: fixed;
  inset: 0;
  background: #0B0A07;
  overflow: hidden;
  z-index: 50;
}

.menu-pdf-track {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  cursor: grab;
}
.menu-pdf-track:active { cursor: grabbing; }
.menu-pdf-track::-webkit-scrollbar { display: none; }

.menu-pdf-page {
  flex-shrink: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-pdf-page canvas {
  display: block;
  height: 100%;
  width: auto;
}

/* ── TOP BAR ── */
.menu-topbar {
  position: absolute;
  top: 0; left: 0; right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 1.8rem;
  background: linear-gradient(to bottom, rgba(11,10,7,0.82) 0%, transparent 100%);
  pointer-events: none;
}
.menu-topbar > * { pointer-events: auto; }

.menu-topbar-left { display: flex; align-items: center; gap: 1.2rem; }

.menu-back-btn {
  background: none;
  border: 1px solid rgba(201,169,110,0.22);
  color: rgba(201,169,110,0.65);
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.42rem 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
.menu-back-btn:hover { border-color: rgba(201,169,110,0.55); color: #C9A96E; }

.menu-counter {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.82rem;
  font-style: italic;
  color: rgba(201,169,110,0.45);
  letter-spacing: 0.12em;
}

.menu-topbar-right { display: flex; align-items: center; gap: 0.9rem; }

.menu-call-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 1.2rem;
  border-radius: 999px;
  background: linear-gradient(to right, #4a1d7a, #6b21a8, #4a1d7a);
  color: #fff;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-decoration: none;
  border: 1px solid rgba(167,139,250,0.22);
  transition: all 0.3s;
  cursor: pointer;
  background-color: transparent;
}
.menu-call-btn:hover { filter: brightness(1.15); transform: scale(1.03); }

.menu-download-btn {
  background: none;
  border: 1px solid rgba(201,169,110,0.18);
  color: rgba(201,169,110,0.55);
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.42rem 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
}
.menu-download-btn:hover { border-color: rgba(201,169,110,0.45); color: #C9A96E; }

/* ── BOTTOM BAR ── */
.menu-bottombar {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 2rem;
  background: transparent;
  pointer-events: none;
}
.menu-hint-text {
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  font-size: 0.48rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(107,100,86,0.5);
}
.menu-hint-dot {
  width: 2px; height: 2px;
  border-radius: 50%;
  background: rgba(201,169,110,0.18);
  flex-shrink: 0;
}

/* ── ARROWS ── */
.menu-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: rgba(11,10,7,0.5);
  border: 1px solid rgba(201,169,110,0.16);
  color: #C9A96E;
  width: 44px; height: 44px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
  font-family: inherit;
}
.menu-arrow:hover { background: rgba(201,169,110,0.1); border-color: rgba(201,169,110,0.45); }
.menu-arrow.left  { left: 1rem; }
.menu-arrow.right { right: 1rem; }

/* ── LOADING ── */
.menu-loading {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 1.4rem; background: #0B0A07; z-index: 30;
  transition: opacity 0.7s;
}
.menu-loading.hidden { opacity: 0; pointer-events: none; }

.menu-loading-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.2rem; font-weight: 300;
  letter-spacing: 0.25em; color: #C9A96E;
  animation: logo-breathe 2.5s ease-in-out infinite;
}
@keyframes logo-breathe {
  0%, 100% { opacity: 0.35; }
  50%       { opacity: 1; }
}
.menu-loading-bar {
  width: 70px; height: 1px;
  background: rgba(201,169,110,0.12);
  position: relative; overflow: hidden;
}
.menu-loading-bar::after {
  content: '';
  position: absolute; top: 0; left: -100%;
  width: 100%; height: 100%; background: #C9A96E;
  animation: bar-sweep 1.3s ease-in-out infinite;
}
@keyframes bar-sweep { to { left: 200%; } }

.menu-loading-text {
  font-family: 'Jost', sans-serif; font-weight: 300;
  font-size: 0.5rem; letter-spacing: 0.5em;
  text-transform: uppercase; color: #3a342a;
}

/* ── ERROR ── */
.menu-error {
  position: absolute; inset: 0;
  display: none; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 0.8rem; background: #0B0A07; z-index: 30;
}
.menu-error.show { display: flex; }
.menu-error h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem; font-weight: 300; color: #C9A96E;
}
.menu-error p {
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem; letter-spacing: 0.15em; color: #4a4438;
}
`;

const PDFJS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
const WORKER_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

function loadScript(src: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export const MenuPage: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const initialized = useRef<boolean>(false);
  const drag = useRef<{ active: boolean; startX: number; scrollStart: number }>(
    {
      active: false,
      startX: 0,
      scrollStart: 0,
    },
  );
  const pageState = useRef<{ current: number; total: number }>({
    current: 1,
    total: 0,
  });

  const [showBranches, setShowBranches] = useState<boolean>(false);

  function updateCounter(): void {
    if (counterRef.current) {
      counterRef.current.textContent = `${pageState.current.current} / ${pageState.current.total}`;
    }
  }

  function stepPage(dir: number): void {
    const { current, total } = pageState.current;
    const next = Math.max(1, Math.min(total, current + dir));
    if (next === current) return;
    pageState.current.current = next;
    const track = trackRef.current;
    if (track) {
      const slot = track.children[next - 1] as HTMLElement | undefined;
      if (slot)
        slot.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
    }
    updateCounter();
  }

  function handleScroll(): void {
    const track = trackRef.current;
    if (!track) return;
    const slots = track.querySelectorAll<HTMLElement>(".menu-pdf-page");
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 1;
    let minDist = Infinity;
    slots.forEach((s: HTMLElement, i: number) => {
      const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - center);
      if (d < minDist) {
        minDist = d;
        closest = i + 1;
      }
    });
    if (closest !== pageState.current.current) {
      pageState.current.current = closest;
      updateCounter();
    }
  }

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    async function init(): Promise<void> {
      try {
        await loadScript(PDFJS_URL);
        const pdfjsLib = window.pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_URL;

        const pdf = await pdfjsLib.getDocument("/menu.pdf").promise;
        const total: number = pdf.numPages;
        pageState.current.total = total;

        const track = trackRef.current;
        if (!track) return;

        const viewerH = track.clientHeight;
        track.innerHTML = "";

        for (let i = 1; i <= total; i++) {
          const page = await pdf.getPage(i);
          const base = page.getViewport({ scale: 1 });
          const scale = viewerH / base.height;
          const vp = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          canvas.width = vp.width;
          canvas.height = vp.height;

          await page.render({
            canvasContext: canvas.getContext("2d"),
            viewport: vp,
          }).promise;

          const slot = document.createElement("div");
          slot.className = "menu-pdf-page";
          slot.style.width = vp.width + "px";
          slot.appendChild(canvas);
          track.appendChild(slot);
        }

        loadingRef.current?.classList.add("hidden");
        updateCounter();
      } catch (err) {
        console.error("PDF error:", err);
        loadingRef.current?.classList.add("hidden");
        errorRef.current?.classList.add("show");
      }
    }

    init();

    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setShowBranches(false);
      if (e.key === "ArrowRight") stepPage(1);
      if (e.key === "ArrowLeft") stepPage(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>): void {
    const track = trackRef.current;
    if (!track) return;
    drag.current = {
      active: true,
      startX: e.pageX,
      scrollStart: track.scrollLeft,
    };
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>): void {
    if (!drag.current.active) return;
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft =
      drag.current.scrollStart - (e.pageX - drag.current.startX);
  }

  function onMouseUp(): void {
    drag.current.active = false;
  }

  return (
    <>
      <style>{menuPageCss}</style>

      <div className="menu-root">
        {/* Loading */}
        <div ref={loadingRef} className="menu-loading">
          <div className="menu-loading-logo">Menu</div>
          <div className="menu-loading-bar" />
          <p className="menu-loading-text">Preparing your menu</p>
        </div>

        {/* Error */}
        <div ref={errorRef} className="menu-error">
          <h3>Menu unavailable</h3>
          <p>Place menu.pdf in your /public folder.</p>
        </div>

        {/* PDF strip */}
        <div
          ref={trackRef}
          className="menu-pdf-track"
          onScroll={handleScroll}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        />

        {/* Top bar */}
        <div className="menu-topbar">
          <div className="menu-topbar-left">
            <a href="/" className="menu-back-btn">
              ← Back
            </a>
            <span ref={counterRef} className="menu-counter">
              — / —
            </span>
          </div>
          <div className="menu-topbar-right">
            <button
              className="menu-call-btn"
              onClick={() => setShowBranches(true)}
            >
              📞 Call
            </button>
            <a href="/menu.pdf" download className="menu-download-btn">
              Download ↓
            </a>
          </div>
        </div>

        {/* Arrows */}
        <button className="menu-arrow left" onClick={() => stepPage(-1)}>
          ←
        </button>
        <button className="menu-arrow right" onClick={() => stepPage(1)}>
          →
        </button>

        {/* Bottom hints */}
        <div className="menu-bottombar">
          <span className="menu-hint-text">Drag or scroll to browse</span>
          <div className="menu-hint-dot" />
          <span className="menu-hint-text">Arrow keys to navigate</span>
        </div>

        <BranchSelectionModal
          isOpen={showBranches}
          onClose={() => setShowBranches(false)}
        />
      </div>
    </>
  );
};
