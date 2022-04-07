import escapeHtml from 'escape-html'
import { Text } from 'slate'
import { CustomText } from './CreatePost'

export const serialize = node => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text)
    if ((node as CustomText).bold) {
      string = `<strong>${string}</strong>`
    }
    return string
  }

  const children = node.children.map(n => serialize(n)).join('')

  switch (node.type) {
    case 'quote':
      return `<blockquote><p>${children}</p></blockquote>`
    case 'paragraph':
      return `<p>${children}</p>`
    case 'link':
      return `<a href="${escapeHtml(node.url)}">${children}</a>`
    default:
      return children
  }
}