import ModularImage from './modular-image'

const notImplemented = ({ type }) => <h1>Not implemented {type}</h1>

const bodySerializers = {
  imageBlock: {
    component: ModularImage,
    wrapper: ({ children }) => 
      <div className="mb-12 md:mb-16 xl:mb-24">
        {children}
      </div>
  }
}

const BodyRenderer = ({ body }) => {
  if (!body) return <></>
  return body.map((item) => {
    const type = item._type
    const serializer = bodySerializers[type]
    const Component = serializer?.component
    const args = serializer?.args
    const Wrapper = serializer?.wrapper

    if (!Component || !serializer) throw new Error(`No serializer implemented for body object: ${type}`)    
    
    return Wrapper ? <Wrapper key={item._key}><Component {...item} {...args} /></Wrapper> : <Component key={item._key} {...item} {...args} />
  })
}

export default BodyRenderer;