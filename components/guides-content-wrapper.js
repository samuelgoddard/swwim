import BlockContent from '@sanity/block-content-to-react'
import { blockSerializers } from './body-renderer-guides'


const GuidesContentWrapper = ({ text, full, mini }) => {
  return (
    <div className={`content content--large ${mini ? 'content--guide--mini' : 'content--guide' } ${full ? '' : 'content--restricted-width' }`}>      
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

export default GuidesContentWrapper