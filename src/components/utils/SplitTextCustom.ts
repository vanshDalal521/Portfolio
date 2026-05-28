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
      el.innerHTML = "";

      const lineSpans: HTMLElement[] = [];
      const wordSpans: HTMLElement[] = [];
      const charSpans: HTMLElement[] = [];

      const processNode = (node: Node, currentLine: () => HTMLElement | null, setLine: (l: HTMLElement) => void) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || "";
          const parts = text.split(/(\s+)/);
          parts.forEach((part) => {
            if (part === "") return;
            if (part.trim() === "") {
              let line = currentLine();
              if (line) line.appendChild(document.createTextNode(part));
              return;
            }
            const wordSpan = document.createElement("span");
            wordSpan.className = "split-word";
            wordSpan.style.display = "inline-block";
            wordSpans.push(wordSpan);

            if (type.includes("chars")) {
              const chars = part.split("");
              chars.forEach((char) => {
                const charSpan = document.createElement("span");
                charSpan.className = "split-char";
                charSpan.style.display = "inline-block";
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
                charSpans.push(charSpan);
              });
            } else {
              wordSpan.textContent = part;
            }

            if (type.includes("lines")) {
              let line = currentLine();
              if (!line) {
                line = document.createElement("span");
                line.className = linesClass;
                line.style.display = "block";
                el.appendChild(line);
                lineSpans.push(line);
                setLine(line);
              }
              line.appendChild(wordSpan);
              line.appendChild(document.createTextNode(" "));
            } else {
              el.appendChild(wordSpan);
              el.appendChild(document.createTextNode(" "));
            }
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as HTMLElement;
          if (element.tagName === "BR") {
            const line = document.createElement("span");
            line.className = linesClass;
            line.style.display = "block";
            el.appendChild(line);
            lineSpans.push(line);
            setLine(line);
          } else {
            const children = Array.from(element.childNodes);
            children.forEach((child) => processNode(child, currentLine, setLine));
          }
        }
      };

      const children = Array.from(el.childNodes);
      let currentLine: HTMLElement | null = null;
      children.forEach((child) => {
        processNode(child, () => currentLine, (l) => { currentLine = l; });
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
