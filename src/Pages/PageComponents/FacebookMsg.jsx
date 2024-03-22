import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="732128538747679" chatSupport>
        <CustomChat pageId="106447448798376" minimized={true}/>
    </FacebookProvider>  
  )
}

export default FacebookMsg
