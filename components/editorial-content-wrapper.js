import BlockContent from '@sanity/block-content-to-react'
import { blockSerializers } from './body-renderer'


const EditorialContentWrapper = ({ text }) => {
  return (
    <div className="content content--large content--restricted-width">
      <BlockContent
        serializers={{ 
          types: blockSerializers,
          container: ({ children }) => children
        }}
          blocks={text}
      />
    </div>
  )
}

export default EditorialContentWrapper