import React, { useEffect, useRef } from "react";
import { Container } from "../components/ui";

const menuPageCss = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@200;300;400&display=swap');

.menu-pdf-viewer {
  position: relative;
  width: 100%;
  height: 80vh;
  background: #0B0A07;
  border-radius: 4px;
  overflow: hidden;
}

.menu-pdf-track {
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  cursor: grab;
  gap: 2px;
}

.menu-pdf-track:active { cursor: grabbing; }
.menu-pdf-track::-webkit-scrollbar { display: none; }

.menu-pdf-page {
  flex-shrink: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  background: #111009;
}

.menu-pdf-page canvas {
  display: block;
  height: 100%;
  width: auto;
}

.menu-pdf-fade-left,
.menu-pdf-fade-right {
  position: absolute;
  top: 0; bottom: 0;
  width: 80px;
  pointer-events: none;
  z-index: 4;
}
.menu-pdf-fade-left  { left: 0;  background: linear-gradient(to right, rgba(11,10,7,0.85), transparent); }
.menu-pdf-fade-right { right: 0; background: linear-gradient(to left,  rgba(11,10,7,0.85), transparent); }

.menu-pdf-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  background: rgba(11,10,7,0.7);
  border: 1px solid rgba(201,169,110,0.25);
  color: #C9A96E;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(8px);
  font-family: inherit;
}
.menu-pdf-arrow:hover { background: rgba(201,169,110,0.12); border-color: #C9A96E; }
.menu-pdf-arrow.left  { left: 1rem; }
.menu-pdf-arrow.right { right: 1rem; }

.menu-pdf-loading {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  background: #0B0A07;
  z-index: 10;
  transition: opacity 0.6s;
}
.menu-pdf-loading.hidden { opacity: 0; pointer-events: none; }

.menu-pdf-loading-bar {
  width: 60px; height: 1px;
  background: rgba(201,169,110,0.2);
  position: relative; overflow: hidden;
}
.menu-pdf-loading-bar::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: #C9A96E;
  animation: bar-slide 1.2s ease-in-out infinite;
}
@keyframes bar-slide { to { left: 200%; } }

.menu-pdf-loading-text {
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  font-size: 0.55rem;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: #6B6456;
}

.menu-pdf-error {
  position: absolute;
  inset: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: #0B0A07;
  z-index: 10;
}
.menu-pdf-error.show { display: flex; }
.menu-pdf-error h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem; font-weight: 300; color: #C9A96E;
}
.menu-pdf-error p {
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem; letter-spacing: 0.15em; color: #6B6456;
}

.menu-pdf-counter {
  position: absolute;
  bottom: 1.2rem; left: 50%;
  transform: translateX(-50%);
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.9rem; font-style: italic;
  color: rgba(201,169,110,0.6);
  letter-spacing: 0.15em;
  z-index: 5;
  pointer-events: none;
}

.menu-section-label {
  font-family: 'Jost', sans-serif; font-weight: 300;
  font-size: 0.55rem; letter-spacing: 0.5em;
  text-transform: uppercase; color: #C9A96E;
  text-align: center; margin-bottom: 0.6rem;
}
.menu-section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.2rem; font-weight: 300;
  color: #F0E6D0; text-align: center; line-height: 1.1;
  margin-bottom: 0.5rem;
}
.menu-section-title em { font-style: italic; color: #C9A96E; }

.menu-section-divider {
  display: flex; align-items: center; gap: 1rem;
  justify-content: center; margin: 1rem 0 2rem;
}
.menu-section-divider span {
  width: 50px; height: 1px;
  background: linear-gradient(to right, transparent, rgba(201,169,110,0.4));
}
.menu-section-divider span:last-child {
  background: linear-gradient(to left, transparent, rgba(201,169,110,0.4));
}
.menu-section-divider svg { color: #C9A96E; opacity: 0.6; }

.menu-hint {
  display: flex; align-items: center;
  justify-content: center; gap: 2rem;
  margin-top: 1.2rem; padding-bottom: 2rem;
}
.menu-hint span {
  font-family: 'Jost', sans-serif; font-weight: 300;
  font-size: 0.55rem; letter-spacing: 0.25em;
  text-transform: uppercase; color: #6B6456;
}
.menu-hint-dot {
  width: 3px; height: 3px; border-radius: 50%;
  background: rgba(201,169,110,0.25); flex-shrink: 0;
}
`;

const PDFJS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
const WORKER_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export const MenuPage = () => {
  const trackRef = useRef(null);
  const loadingRef = useRef(null);
  const errorRef = useRef(null);
  const counterRef = useRef(null);
  const initialized = useRef(false); // prevents React strict-mode double-fire
  const drag = useRef({ active: false, startX: 0, scrollStart: 0 });
  const pageState = useRef({ current: 1, total: 0 });

  function updateCounter() {
    if (counterRef.current)
      counterRef.current.textContent = `${pageState.current.current} / ${pageState.current.total}`;
  }

  function stepPage(dir) {
    const { current, total } = pageState.current;
    const next = Math.max(1, Math.min(total, current + dir));
    if (next === current) return;
    pageState.current.current = next;
    const slot = trackRef.current?.children[next - 1];
    if (slot)
      slot.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    updateCounter();
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const slots = track.querySelectorAll(".menu-pdf-page");
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 1,
      minDist = Infinity;
    slots.forEach((s, i) => {
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
    window.scrollTo(0, 0);

    // Hard guard: only ever run once, even in React 18 strict mode
    if (initialized.current) return;
    initialized.current = true;

    async function init() {
      try {
        await loadScript(PDFJS_URL);

        const pdfjsLib = window.pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_URL;

        const pdf = await pdfjsLib.getDocument("/menu.pdf").promise;
        const total = pdf.numPages;
        pageState.current.total = total;

        const track = trackRef.current;
        const viewerH = track.clientHeight;

        // Wipe any stale content before we start
        track.innerHTML = "";

        // Pages rendered strictly one-at-a-time — no parallel races, no shuffle
        for (let i = 1; i <= total; i++) {
          const page = await pdf.getPage(i);
          const base = page.getViewport({ scale: 1 });
          const scale = viewerH / base.height;
          const vp = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          canvas.width = vp.width;
          canvas.height = vp.height;

          // Wait for this page to fully render before touching the next
          await page.render({
            canvasContext: canvas.getContext("2d"),
            viewport: vp,
          }).promise;

          const slot = document.createElement("div");
          slot.className = "menu-pdf-page";
          slot.style.width = vp.width + "px";
          slot.appendChild(canvas);

          // Append only after render is complete — guarantees order
          track.appendChild(slot);
        }

        loadingRef.current?.classList.add("hidden");
        updateCounter();
      } catch (err) {
        console.error("PDF load error:", err);
        loadingRef.current?.classList.add("hidden");
        errorRef.current?.classList.add("show");
      }
    }

    init();

    const onKey = (e) => {
      if (e.key === "ArrowRight") stepPage(1);
      if (e.key === "ArrowLeft") stepPage(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function onMouseDown(e) {
    drag.current = {
      active: true,
      startX: e.pageX,
      scrollStart: trackRef.current.scrollLeft,
    };
  }
  function onMouseMove(e) {
    if (!drag.current.active) return;
    trackRef.current.scrollLeft =
      drag.current.scrollStart - (e.pageX - drag.current.startX);
  }
  function onMouseUp() {
    drag.current.active = false;
  }

  return (
    <div className="min-h-screen bg-company-neutral relative overflow-hidden">
      <style>{menuPageCss}</style>

      {/* Background glows */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-900 to-purple-700 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-800 to-purple-900 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        />
      </div>

      {/* Hero */}
      <section className="relative min-h-[20vh] flex items-center justify-center z-20">
        <div className="absolute inset-0">
          <img
            src="/images/gradient-hero-prerender.webp"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-company-neutral via-company-neutral/80 to-company-neutral/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-company-neutral/80 via-transparent to-company-neutral/40" />
        </div>
      </section>

      <main className="relative bg-company-neutral z-30">
        <Container>
          {/* Section heading */}
          <p className="menu-section-label">Browse</p>
          <h2 className="menu-section-title">
            Our <em>Menu</em>
          </h2>
          <div className="menu-section-divider">
            <span />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0l1.3 4.7H12L8 7.6l1.5 4.4L6 9.3 2.5 12 4 7.6 0 4.7h4.7z" />
            </svg>
            <span />
          </div>

          {/* PDF Viewer */}
          <div className="menu-pdf-viewer">
            <div ref={loadingRef} className="menu-pdf-loading">
              <div className="menu-pdf-loading-bar" />
              <p className="menu-pdf-loading-text">Loading menu</p>
            </div>

            <div ref={errorRef} className="menu-pdf-error">
              <h3>Menu unavailable</h3>
              <p>Place menu.pdf in your /public folder.</p>
            </div>

            <div className="menu-pdf-fade-left" />
            <div className="menu-pdf-fade-right" />

            <button
              className="menu-pdf-arrow left"
              onClick={() => stepPage(-1)}
            >
              ←
            </button>
            <button
              className="menu-pdf-arrow right"
              onClick={() => stepPage(1)}
            >
              →
            </button>

            <div
              ref={trackRef}
              className="menu-pdf-track"
              onScroll={handleScroll}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            />

            <div ref={counterRef} className="menu-pdf-counter">
              — / —
            </div>
          </div>

          {/* Hints */}
          <div className="menu-hint">
            <span>Drag or scroll to browse</span>
            <div className="menu-hint-dot" />
            <span>Arrow keys to navigate</span>
            <div className="menu-hint-dot" />
            <span>
              <a
                href="/menu.pdf"
                download
                style={{
                  color: "rgba(201,169,110,0.6)",
                  textDecoration: "none",
                }}
              >
                Download PDF ↓
              </a>
            </span>
          </div>

          {/* Call to order */}
          <div className="text-center py-8">
            <a
              href="tel:065568282"
              className="inline-flex flex-col items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-purple-500/30"
            >
              <span>Call to Order</span>
            </a>
            <p className="text-xs text-company-secondary/60 mt-4">
              Please note that we do not offer delivery through the website.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
};

