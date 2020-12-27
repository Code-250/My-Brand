import React from 'react'

import Facebook from './Facebook'
import Github from './Github'
import Instagram from './Instagram'
import Twitter from './Twitter'

 const Icon = (props) => {
   switch(props.name.toLowerCase()){
       case 'Facebook':
            return <Facebook {...props}/>
        case 'Github':
            return <Github {...props}/>
        case 'Insstagram':
            return <Instagram {...props}/>
        case 'Twitter':
            return <Twitter {...props}/>
   }
}
export default Icon ;