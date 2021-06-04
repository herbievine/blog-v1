import type { Content } from 'mdast'

type NodeToProps<T> = {
  node: T
  children: T extends { children: any } ? ReactNode : never
}

export type MarkdownComponents = {
  string?: (props: NodeToProps<Extract<Content, { type: K }>>) => ReactElement
}
