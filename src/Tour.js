import React,{useState} from 'react'

const Tour = ({id,image,info,price,name,removeTours}) => {
    const [readMore, setReadMore] = useState(true)
    return (
       <article className="single-tour">
           <img src={image} />
               <footer>
                   <div className="tour-info">
                       <h4>{name}</h4>
                       <h4>{price}</h4>
                       </div>
                    <p>{readMore? info :`${info.substring(0,200)}`}</p>
                    <button onClick={()=>setReadMore(!readMore)}>
                        {readMore?'show less' :'Read More'}
                    </button>
                    <button className="delete-btn" onClick={()=>removeTours(id)}>NOt interrested</button>

               </footer>

     

       </article>
    )
}

export default Tour
