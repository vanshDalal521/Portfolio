class SplitTextCustom {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];

  private elements: Element[] = [];
  private originalHTML: Map<Element, string> = new Map();

  constructor(targets: Element | Element[] | string | string[], config?: { type?: string; linesClass?: string }) {
    const type = config?.type || "chars,lines";
    const linesClass = config?.linesClass || "split-line";

    let els: Element[] = [];
    if (typeof targets === "string") {
      els = Array.from(document.querySelectorAll(targets));
    } else if (Array.isArray(targets)) {
      if (targets.length > 0 && typeof targets[0] === "string") {
        (targets as string[]).forEach((sel) => {
          els.push(...Array.from(document.querySelectorAll(sel)));
        });
      } else {
        els = targets as Element[];
      }
    } else {
      els = [targets];
    }

    this.elements = els;

    els.forEach((el) => {
      this.originalHTML.set(el, el.innerHTML);

      const wordSpans: (HTMLElement | null)[] = [];
      const charSpans: HTMLElement[] = [];

      const addWord = (text: string) => {
        if (!text.trim()) return;
        const ws = document.createElement("span");
        ws.className = "split-word";
        ws.style.display = "inline-block";
        if (type.includes("chars")) {
          for (const c of text) {
            const cs = document.createElement("span");
            cs.className = "split-char";
            cs.style.display = "inline-block";
            cs.textContent = c;
            ws.appendChild(cs);
            charSpans.push(cs);
          }
        } else {
          ws.textContent = text;
        }
        wordSpans.push(ws);
      };

      const blockTags = new Set(["DIV", "P", "H1", "H2", "H3", "H4", "H5", "H6", "UL", "OL", "LI", "SECTION", "HEADER", "FOOTER", "NAV", "ARTICLE", "ASIDE", "MAIN", "BLOCKQUOTE", "HR", "FIGURE", "FIGCAPTION", "TABLE", "TR", "TD", "TH"]);

      const walkNodes = (nodes: NodeListOf<ChildNode>) => {
        for (const node of nodes) {
          if (node.nodeType === Node.TEXT_NODE) {
            const parts = (node.textContent || "").split(/(\s+)/);
            for (const part of parts) {
              if (!part) continue;
              if (part.trim()) addWord(part);
            }
          } else if ((node as HTMLElement).tagName === "BR") {
            wordSpans.push(null);
          } else if (blockTags.has((node as HTMLElement).tagName)) {
            wordSpans.push(null);
            walkNodes(node.childNodes);
          } else {
            walkNodes(node.childNodes);
          }
        }
      };

      walkNodes(el.childNodes);
      while (el.firstChild) el.removeChild(el.firstChild);

      const insertAll = () => {
        for (const ws of wordSpans) {
          if (!ws) {
            el.appendChild(document.createElement("br"));
          } else {
            el.appendChild(ws);
            el.appendChild(document.createTextNode(" "));
          }
        }
      };

      insertAll();

      if (type.includes("lines") && wordSpans.length > 0) {
        void (el as HTMLElement).offsetHeight;

        const wordPositions: { el: HTMLElement; top: number }[] = [];
        el.querySelectorAll(".split-word").forEach((w) => {
          wordPositions.push({ el: w as HTMLElement, top: Math.round(w.getBoundingClientRect().top) });
        });

        const lineGroups: HTMLElement[][] = [];
        let currentGroup: HTMLElement[] = [];
        let lastTop: number | null = null;

        for (const wp of wordPositions) {
          if (lastTop !== null && wp.top !== lastTop) {
            lineGroups.push(currentGroup);
            currentGroup = [];
          }
          lastTop = wp.top;
          currentGroup.push(wp.el);
        }
        if (currentGroup.length) lineGroups.push(currentGroup);

        while (el.firstChild) el.removeChild(el.firstChild);

        const newLines: HTMLElement[] = [];
        for (const group of lineGroups) {
          const line = document.createElement("span");
          line.className = linesClass;
          line.style.display = "block";
          for (const w of group) {
            line.appendChild(w);
            line.appendChild(document.createTextNode(" "));
          }
          el.appendChild(line);
          newLines.push(line);
        }

        this.lines = newLines;
      }

      this.words = wordSpans.filter((w): w is HTMLElement => w !== null);
      this.chars = charSpans;
    });
  }

  revert() {
    this.elements.forEach((el) => {
      const original = this.originalHTML.get(el);
      if (original) el.innerHTML = original;
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}

export default SplitTextCustom;
