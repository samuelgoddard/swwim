import BlockContentWrapper from './block-content-wrapper-guides'
import DoubleImage from './double-image'
import FancyQuote from './fancy-quote'
import SingleImage from './single-image'

const notImplemented = ({ type }) => <h1>Not implemented {type}</h1>

const bodySerializers = {
  block: {
    component: BlockContentWrapper,
    wrapper: ({ children }) => 
      <div className="max-w-[300px] mx-auto lg:px-12 py-4 lg:py-12 mb-12 md:mb-16 xl:mb-24">
        {children}
      </div>
  },
  singleImage: {
    component: SingleImage,
    wrapper: ({ children }) => 
      <div className="max-w-[300px] mx-auto lg:px-12 py-4 lg:py-12 mb-12 md:mb-16 xl:mb-24">
        {children}
      </div>
  },
  doubleImage: {
    component: DoubleImage,
    wrapper: ({ children }) => 
      <div className="max-w-[300px] mx-auto lg:px-12 py-4 lg:py-12 mb-12 md:mb-16 xl:mb-24">
        {children}
      </div>
  },
  quote: {
    component: FancyQuote,
    wrapper: ({ children }) => 
      <div className="max-w-[300px] mx-auto lg:px-12 py-4 lg:py-12 mb-12 md:mb-16 xl:mb-24">
        {children}
      </div>
  }
}

function getSerializers() {
  const res = {}
  for (const [key, value] of Object.entries(bodySerializers)) {
    if (key === 'block') continue
    const Component = value.component
    res[key] = (props) => <Component {...props.node} />
  }
  return res
}

export const blockSerializers = getSerializers()

const BodyRenderer = ({ body }) => {
  if (!body) return <div className="bg-red-500"></div>
  return body.map((item) => {
    const type = item._type
    const serializer = bodySerializers[type]
    const Component = serializer?.component
    const args = serializer?.args
    const Wrapper = serializer?.wrapper

    if (!Component || !serializer) throw new Error(`No serializer implemented for body object: ${type}`)    
    
    return Wrapper ? 
      <div className="bg-red-500"><Wrapper key={item._key}><Component {...item} {...args} /></Wrapper></div>
    :
      <div className="bg-blue-500"><Component key={item._key} {...item} {...args} /></div>
  })
}

export default BodyRenderer;