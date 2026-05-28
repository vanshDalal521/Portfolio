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
      const text = el.textContent || "";
      el.innerHTML = "";

      const words = text.split(/(\s+)/);
      const wordSpans: HTMLElement[] = [];
      const charSpans: HTMLElement[] = [];
      const lineSpans: HTMLElement[] = [];

      let currentLine: HTMLElement | null = null;
      let lineIndex = 0;

      words.forEach((word) => {
        if (word.trim() === "") {
          if (currentLine) currentLine.appendChild(document.createTextNode(word));
          return;
        }

        const wordSpan = document.createElement("span");
        wordSpan.className = "split-word";
        wordSpan.style.display = "inline-block";
        wordSpans.push(wordSpan);

        if (type.includes("chars")) {
          const chars = word.split("");
          chars.forEach((char) => {
            const charSpan = document.createElement("span");
            charSpan.className = "split-char";
            charSpan.style.display = "inline-block";
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
            charSpans.push(charSpan);
          });
        } else {
          wordSpan.textContent = word;
        }

        if (type.includes("lines")) {
          const rect = wordSpan.getBoundingClientRect();
          const containerRect = el.getBoundingClientRect();
          const lineNum = Math.round((rect.top - containerRect.top) / rect.height);

          if (!currentLine || lineNum !== lineIndex) {
            currentLine = document.createElement("span");
            currentLine.className = linesClass;
            currentLine.style.display = "block";
            el.appendChild(currentLine);
            lineSpans.push(currentLine);
            lineIndex = lineNum;
          }
          currentLine.appendChild(wordSpan);
          currentLine.appendChild(document.createTextNode(" "));
        } else {
          el.appendChild(wordSpan);
          el.appendChild(document.createTextNode(" "));
        }
      });

      this.words.push(...wordSpans);
      this.chars.push(...charSpans);
      this.lines.push(...lineSpans);
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
