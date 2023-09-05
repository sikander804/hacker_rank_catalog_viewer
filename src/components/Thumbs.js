import React, { Fragment } from 'react'

function Thumbs({ items, currentIndex ,setActiveIndex,catalogs}) {
    
    const handleActiveItem = (cat,idx) => () => {

        const index = catalogs?.findIndex((cata) => {
            console.log('$$$$ cata',cata.image,cat)
            if(cata.image === cat.image){
                return cata
            }
        })

        console.log('%%%% indxx',index)

        setActiveIndex(index)
    }

    return (
        <Fragment>
            {
                items.map((catalog, idx) => (
                    <span   
                        onClick={handleActiveItem(catalog,idx)}
                        id={idx} 
                        key={idx} 
                        data-testid={'thumb-button-' + idx}
                    >
                        <span 
                            className={'inline-flex w-90 pa-4 image-thumb ' + 
                                (idx === currentIndex ? 'thumb-selected' : '')} 
                        >
                            <span 
                                className='mx-5 thumb' 
                                id={idx} 
                                style={{ backgroundImage: 'url('+ catalog.thumb + ')' }}
                            />
                        </span>
                    </span>
                ))
            }
        </Fragment>
    )
}

export default Thumbs

