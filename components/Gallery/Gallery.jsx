import React from 'react'

const Gallery = () => {
  return (
    <>
    <div className='gallery'>
      <div className='gallery__cell'>cel
        <div className="gallery__cell-img"></div>
      </div>

      <div className='gallery__cell'>cel
        <div className="gallery__cell-img"></div>
      </div>

      <div className='gallery__cell'>cel
        <div className="gallery__cell-img"></div>
      </div>

    </div>
    <style>
      {`
        .gallery{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 10px;
          background:blue;
          min-height:96vh;
        }

        .gallery__cell {
          border: 1px solid #ccc;
          padding: 10px;
        }


      `}
    </style>
    </>

  )
}

export default Gallery