import BlockContent from '@sanity/block-content-to-react'

const BlockContentWrapper = ({ text }) => {
  return (
    <BlockContent
      serializers={{ container: ({ children }) => children }}
      blocks={text}
    />
  )
}

export default BlockContentWrapper