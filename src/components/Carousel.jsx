/* eslint-disable react/prop-types */

import Carousel from 'react-material-ui-carousel'
import { Paper,  } from '@mui/material'
import Event1 from '../assets/event1.jpeg'
import Event2 from '../assets/amitabh_das.jpeg'
import Event3 from '../assets/ayas_kanta_swain.jpeg'
import Event4 from '../assets/chandan_karfa.jpeg'
import Event5 from '../assets/kishore_p.jpeg'



function Example()
{
    var items = [
        {
            src: Event1
          
        },
        {
            src: Event2
          
        },
        {
            src: Event3
          
        },
        {
            src: Event4
          
        },
        {
            src: Event5
          
        },
       
    ]

    return (
        <Carousel autoPlay animation='slide' duration='1000'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item({item})
{
    return (
        <Paper>
        <div className='image-holder'>
        <img height='200px' width='auto' src={item.src} />
        </div>
         
           
        </Paper>
    )
}



export default function Slider() {
  return (
    <div> 
    <Example/>
    </div>
  )
}
