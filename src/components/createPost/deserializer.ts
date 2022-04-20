import { jsx } from 'slate-hyperscript';

const deserialize = el => {
  if (el.nodeType === 3) {
    return el.textContent;
  }
  if (el.nodeType !== 1) {
    return null;
  }

  let children = Array.from(el.childNodes).map(deserialize);

  if (children.length === 0) {
    children = [{ text: '' }];
  }

  console.log("el.nodeName: ", el.nodeName);
  switch (el.nodeName) {
    // Elements:
    case 'BODY':
      return jsx('fragment', {}, children);
    case 'P':
      return jsx('element', { type: "paragraph" }, children);
    case 'H1':
      return jsx('element', { type: "heading-one" }, children);
    case 'H2':
      return jsx('element', { type: "heading-two" }, children);

    // Leafs:
    case 'STRONG':
      return { text: el.textContent, bold: true };
    case 'EM':
      return { text: el.textContent, italic: true };
    case 'U':
      return { text: el.textContent, underline: true };

    default:
      return el.textContent;
  }
};

export const deserializeFromHtml = html => {
  const document = new window.DOMParser().parseFromString(html, 'text/html');
  return deserialize(document.body);
};