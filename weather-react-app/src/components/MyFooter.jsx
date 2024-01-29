import React from 'react'

export default function MyFooter() {
  return (
    <>
        <footer className='bg-info-subtle mt-5'>
            <div className='d-flex fw-bold  align-items-center justify-content-center'>
                <p>chi siamo</p>
                <p className='mx-4'>contatti</p>
                <p>policies</p>
                <p className='mx-4'>careers</p>
                <p>consensi</p>
            </div>
            <p className='text-center'>&copy; Copyright 2024</p>
        </footer>
    </>
  )
}
