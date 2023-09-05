import React, { Fragment, useState,useEffect } from 'react'
import 'h8k-components'

import { image1, image2, image3, image4 } from './assets/images'
import { Thumbs, Viewer } from './components'

const title = 'Catalog Viewer'

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1
    },
    {
      thumb: image2,
      image: image2
    },
    {
      thumb: image3,
      image: image3
    },
    {
      thumb: image4,
      image: image4
    }
  ]

  const [ catalogs ] = useState([...catalogsList])
  const [ activeIndex, setActiveIndex ] = useState(0)
  const [ slideTimer, setSlideTimer ] = useState(null)
  const [ slideDuration ] = useState(3000)
  const [isAutoSlide,setIsAutoSlide] = useState(false)


  const handleMoveNext = () => {
    if(activeIndex === 0){
      setActiveIndex(1)
      return
    }

    if(catalogsList.length -1  === activeIndex){
      setActiveIndex(0)
    }else if(activeIndex < catalogs.length - 1){
      setActiveIndex(activeIndex + 1)
    }

    console.log('%%% indexxxx active',activeIndex)
  }

  useEffect(() => {
    let timeoutId;
    if(isAutoSlide)(
      timeoutId = setTimeout(() => {
        
        handleMoveNext()

      }, slideDuration)
    )
    return () => clearTimeout(timeoutId);
  }, [handleMoveNext]); 

  const handleAutoSlide = (e) => {
    setIsAutoSlide(e.cancelable)
  }


  const handleMovePrev = () => {
    console.log('%%% indexxxx active',activeIndex)
    if(activeIndex === 0){
      setActiveIndex(catalogs.length - 1)
      return
    }
    setActiveIndex(activeIndex - 1)
  }

  return (
    <Fragment>
      <h8k-navbar header={ title }></h8k-navbar>
      <div className='layout-column justify-content-center mt-75'>
        <div className='layout-row justify-content-center'>
          <div className='card pt-25'>
            <Viewer catalogImage={ catalogs[activeIndex].image } />
            <div className='layout-row justify-content-center align-items-center mt-20'>
            <button 
            onClick={handleMovePrev}
              className="icon-only outlined"
              data-testid="prev-slide-btn"
            >
              <i className="material-icons">arrow_back</i>
            </button>
              <Thumbs 
              catalogs={catalogs}
              setActiveIndex={setActiveIndex}
                items={ catalogs } 
                currentIndex={ activeIndex } 
              />
            <button 
              className="icon-only outlined"
              data-testid="next-slide-btn"
              onClick={handleMoveNext}
            >
              <i className="material-icons">arrow_forward</i>
            </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input 
            onClick={handleAutoSlide}
            type='checkbox'
            data-testid='toggle-slide-show-button'
          /> 
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  )
}

export default App

