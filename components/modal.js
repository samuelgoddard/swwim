
import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import {motion, AnimatePresence} from 'framer-motion'

export function Modal({ children, defaultOpened = false, fullScreen }, ref) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultOpened)
  const close = useCallback(() => setIsOpen(false), [])

  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1, transition: { type: "easeInOut", duration: 0.4 }},
    exit: { opacity: 0, transition: { type: "easeInOut", duration: 0.4 }}
  };

  const containerVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1, transition: { type: "easeInOut", duration: 0.4, delay: 0.45 }},
    exit: { opacity: 0, transition: { type: "easeInOut", duration: 0.4 }}
  };

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [close])

  useEffect(() => {
    setIsBrowser(true);

    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  if (isBrowser) {
    return createPortal(
      <>
      <AnimatePresence>
        { isOpen ? (
          <motion.div 
            initial={"initial"}
            animate={"isOpen"}
            exit={"exit"}
            variants={modalVariant}
            className={`fixed inset-0 z-50 w-full h-full flex items-center justify-center`}
          >
            <div className="bg-black absolute inset-0 w-full h-full text-white bg-opacity-80 z-50 backdrop-filter backdrop-blur-sm" onClick={close} />
            <div className={`relative rounded-lg z-50 w-full h-full ${fullScreen ? '' : 'p-5 md:p-8 m-5 md:m-8 max-w-screen-2xl'}`}>
              <button className={`focus:outline-none absolute top-0 right-0 w-10 md:w-12 h-10 md:h-12 flex items-center justify-center z-50 rounded-full bg-blue hover:opacity-70 focus:opacity-70 transition-opacity ease-in-out duration-500 ${ fullScreen ? 'mt-5 mr-5' : 'mt-8' }`} aria-label="close" onClick={close}>
                <svg className="text-white w-4 md:w-4 3xl:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88"><path d="M.324 1.909a1.14 1.14 0 010-1.587 1.14 1.14 0 011.587 0l9.523 9.539L20.973.322a1.12 1.12 0 011.571 0 1.112 1.112 0 010 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 010 1.587 1.12 1.12 0 01-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 01-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z" fill="currentColor"/></svg>
              </button>
              <motion.div
                initial={"initial"}
                animate={"isOpen"}
                exit={"exit"}
                variants={containerVariant}
                className="h-full flex items-center justify-center"
              >
                <div className={`text-white w-full ${fullScreen ? 'max-h-screen overflow-scroll' : '' }`}>
                  {children}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null }
      </AnimatePresence>
      </>,
      document.getElementById("modal-root")
    )
  } else {
    return null;
  }
}

export default forwardRef(Modal)
