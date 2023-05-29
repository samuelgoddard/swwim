import BlockContent from '@sanity/block-content-to-react'
import { blockSerializers } from './body-renderer-guides'

const BlockContentWrapper = ({ text }) => {
  return (
    <BlockContent
    serializers={{ 
      types: blockSerializers,
      container: ({ children }) => children
    }}
      blocks={text}
    />
  )
}

export default BlockContentWrapper