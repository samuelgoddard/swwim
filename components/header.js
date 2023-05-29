import { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from './container'
import Logo from './logo'
import { motion, AnimatePresence } from "framer-motion"
import Socials from './socials'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SmoothScrollContext } from '../contexts/SmoothScroll.context'
import { Context } from "../contexts/state";
import { AlertContext } from '../contexts/alert'
import { NewsletterContext } from '../contexts/newsletter'
import { PopupContext } from '../contexts/popup'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

gsap.registerPlugin(ScrollTrigger);

export default function Header({ theme, contact, pinned, active }) {

  const { scroll } = useContext(SmoothScrollContext)
  const [alertContext, setAlertContext] = useContext(AlertContext);
  const [popupContext, setPopupContext] = useContext(PopupContext);
  const [newsletterContext, setNewsletterContext] = useContext(NewsletterContext);
  
  let progressBar = null;
  let [showLogo, setShowLogo] = useState(false)
  
  const [menuIsOpen, setMenuIsOpen] = useContext(Context)

  let themeColors = 'bg-blue text-white'
  let themeButtonColors = 'bg-white text-blue hover:text-white'

  if (theme == 'white') {
    themeColors = 'bg-white text-blue'
    themeButtonColors = 'bg-blue text-white hover:text-white'
  }

  useEffect(() => {
    // progressBar = document.querySelector('.progress-bar__progress')

    if (menuIsOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }

    if (newsletterContext) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }

    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.y / limit.y * 100
        // progressBar.style.width = `${progress}%`

        if (progress > 2) {
          setShowLogo(true)
        } else {
          setShowLogo(false)
        } 
      })
    }
  }, [scroll, showLogo, menuIsOpen, newsletterContext])

  const newsletterToggle = () => {
    if (newsletterContext) {
      setNewsletterContext(false)
      // document.body.style.overflow = 'unset';
      // document.body.style.height = 'auto';
    } else {
      setNewsletterContext(true)
      // document.body.style.overflow = 'hidden';
      // document.body.style.height = '100%';
    }
  }

  return (
    <>
    
    <header data-scroll data-scroll-sticky data-scroll-position="top" data-scroll-target="#scroll-container" className={`fixed top-0 left-0 right-0 z-30 header ${themeColors} ${pinned ? 'absolute top-0 left-0 right-0 w-full z-20 bg-opacity-0' : 'bg-noise'}`}>
      {popupContext[0]?.popupEnabled && (
        <>
        {alertContext && (
          <div className="w-full bg-blue-dark text-white text-center text-xs md:text-sm px-4 relative">
            <span className="inline-block relative py-[13px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 hidden md:block md:w-[100px] absolute bottom-0 left-[-90px]" fill="none" viewBox="0 0 124 46"><g clipPath="url(#a)"><path fill="#EEE1D9" fillRule="evenodd" d="M74.432 50.39c-.127-1.15-.55-2.23-1.302-3.074-4.644-8.51-10.49-19.97-13.992-24.331-1.883-.996-7.666.809-6.445 3.283.968 5.34 6.163 14.027 6.953 16.392-4.466-4.925-17.044-13.174-20.19-12.196 0 0 5.136 10.722 6.513 17.451.98 4.811 12.204 8.355 21.08 11.382 3.592.072 6.164-2.69 7.057-5.753.436-.892.565-1.992.326-3.154Z" clipRule="evenodd"/><path fill="#07398A" fillRule="evenodd" d="M63.044 82.162c2.456 4.224-4.489 24.846-12.132 27.068-.973-8.477-18.508-23.64-29.703-17.275-.027-6.19.865-21.026-.094-25.674-2.68-12.913-2.862-20.247.295-28.78.656-1.726 2.769-3.566 3.824-4.596 4.175-4.06 10.672-2.824 14.655-2.527 7.465.579 8.7 12.242 12.956 31.08 2.018 8.809 7.673 16.379 10.199 20.704Z" clipRule="evenodd"/><path fill="#EEE1D9" fillRule="evenodd" d="M36.203 30.013c-.79-.921-1.325-.35-1.393-4.367 2.218 1.007 4.514-1.745 3.977-2.84-.761-1.535-1.843-2.973-1.422-5-1.37-.483-2.137-2.88-3.964-3.05-3.007-.262-7.749 2.264-5.017 8.534.645 1.495 2.213 3.034 2.784 7.484-1.196 1.021-1.626 3.606-.299 4.594.987.728 5.704.288 6.46-.897 1.468-2.308.179-3.217-1.127-4.458Z" clipRule="evenodd"/><path fill="#A1551F" fillRule="evenodd" d="M37.341 17.836c-1.17.796-5.482-3.594-6.01 1.975-.03.393-.209 1.75-1.988.906-1.756-.874-1.647 1.999-.056 1.646 1.594-.326 1.006 3.558.323 3.233-2.801-.595-8.283-7.078-3.319-9.606 3.164-6.618 10.253-3.878 13.815-5.468 1.856-.86 3.463 6.338-2.765 7.314Z" clipRule="evenodd"/><path fill="#A1551F" fillRule="evenodd" d="M26.114 14.876c-4.12 1.165-5.135-5.141-10.342-5.662-3.854-.37-2.551-3.073-8.996-4.122C.336 4.07-.827 13.39 6.09 14.237c6.917.847 7.98-1.99 11.714.174 3.762 2.16 8.113 1.685 8.31.465Z" clipRule="evenodd"/><path fill="#3294C4" d="M52.387 17.59s-.78.604-.531 1.626c.275 1.018.986 1.756.986 1.756l2.646.477s-.33-3.483-.119-3.983l.183-.497-3.165.62Z"/><path fill="#0D3C88" d="M63.49 13.43s-8.852 1.08-8.646 4.468c.199 3.75.845 7.523 9.792 6.736 4.113-.387-1.146-11.204-1.146-11.204Z"/><path fill="#B98984" d="M64.987 24.558c2.907-.39 4.929-3.199 4.515-6.272-.413-3.073-3.105-5.247-6.012-4.856-2.907.391-4.93 3.2-4.516 6.272.414 3.073 3.106 5.247 6.013 4.856Z"/><path fill="#EEE1D9" d="M60.256 19.53c.312 2.318 2.338 3.962 4.547 3.665 2.183-.294 3.73-2.418 3.418-4.736-.312-2.319-2.338-3.962-4.547-3.665-2.21.297-3.73 2.418-3.418 4.736Z"/><path fill="#fff" d="M65.024 15.335c1.317.294 2.177 1.734 2.478 2.943.174.67.184 1.364-.032 2.031-.2.582-.722 1.236-1.384 1.27-.082.01-.24-.135-.139-.204.227-.17.489-.288.709-.512.223-.197.354-.464.457-.728.227-.586.17-1.217.062-1.813-.24-1.162-.98-2.534-2.191-2.871-.055.007-.046-.133.04-.117Z"/><path fill="#0D3C88" d="M43.125 19.335s-.78.605-.531 1.627c.275 1.018.986 1.755.986 1.755l2.646.477s-.33-3.482-.119-3.982l.183-.497-3.165.62Z"/><path fill="#0D3C88" d="M54.2 15.18s-8.851 1.08-8.645 4.467c.199 3.75.845 7.523 9.792 6.736 4.117-.36-1.146-11.203-1.146-11.203Z"/><path fill="#B98984" d="M55.697 26.308c2.908-.391 4.93-3.2 4.516-6.272-.413-3.073-3.105-5.247-6.012-4.856-2.908.39-4.93 3.199-4.516 6.272.413 3.073 3.105 5.247 6.012 4.856Z"/><path fill="#EEE1D9" d="M55.514 24.944c2.2-.296 3.73-2.416 3.417-4.736-.312-2.32-2.347-3.96-4.547-3.664-2.199.295-3.729 2.416-3.417 4.735.312 2.32 2.348 3.961 4.547 3.665Z"/><path fill="#fff" d="M55.765 17.107c1.317.295 2.177 1.735 2.479 2.944.173.67.183 1.363-.033 2.031-.199.582-.722 1.236-1.384 1.27-.082.01-.24-.135-.138-.204.227-.17.489-.288.708-.512.224-.197.354-.464.458-.728.226-.586.17-1.217.061-1.813-.24-1.162-.98-2.534-2.19-2.871-.059-.02-.05-.16.04-.117Z"/><path fill="#EEE1D9" fillRule="evenodd" d="M50.3 22.924c-.296-.543-3.031 2.24-3.114 1.835-.873-2.16 1.288-5.699-.732-6.066-.428-.081-2.48 1.389-3.324 1.919-1.769 1.099-2.653 2.578-.827 7.275.309.848-5.742 24.404-9.305 28.882-5.961-4.474-9.196-21.09-8.333-23.343 0 0-8.763 5.455-9.187 14.064-.232 4.474 2.916 21.268 11.35 29.464 3.395 3.57 14.968 1.457 16.377-5.203 2.234-10.436 4.26-27.786 3.682-37.038 0 0-.194-4.334.603-6.662.863-1.227 3.063-4.689 2.81-5.127Z" clipRule="evenodd"/><path fill="#07398A" fillRule="evenodd" d="M27.616 13.868c1.344-.125.899.074.73 1.29-.1.708-.489 1.121-1.69 1.894-1.072.7-1.708-.104-1.853-1.39-.145-1.285 1.52-1.703 2.813-1.794Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M.851 5.639 94.76-6.993l29.027 215.8-93.908 12.632z"/></clipPath></defs></svg>

              { popupContext[0]?.bannerText ? (
                <span className="block font-bold">{popupContext[0].bannerText} - <button onClick={newsletterToggle} className="font-normal inline-block underline focus:border-none focus:outline-none hover:border-none hover:outline-none hover:opacity-60 focus:opacity-60 transition-opacity ease-in-out duration-300">Tell me more.</button></span>
              ) : (
                <span className="block font-bold">Sign up for all things Swwim. <span className="hidden md:inline-block">Never miss a Breeze.</span> <button onClick={newsletterToggle} className="font-normal inline-block underline focus:border-none focus:outline-none hover:border-none hover:outline-none hover:opacity-60 focus:opacity-60 transition-opacity ease-in-out duration-300">Tell me more.</button></span>
              )}

              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 hidden md:block md:w-[100px] absolute bottom-0 right-[-90px] transform scale-x-[-100%]" fill="none" viewBox="0 0 124 46"><g clipPath="url(#a)"><path fill="#EEE1D9" fillRule="evenodd" d="M74.432 50.39c-.127-1.15-.55-2.23-1.302-3.074-4.644-8.51-10.49-19.97-13.992-24.331-1.883-.996-7.666.809-6.445 3.283.968 5.34 6.163 14.027 6.953 16.392-4.466-4.925-17.044-13.174-20.19-12.196 0 0 5.136 10.722 6.513 17.451.98 4.811 12.204 8.355 21.08 11.382 3.592.072 6.164-2.69 7.057-5.753.436-.892.565-1.992.326-3.154Z" clipRule="evenodd"/><path fill="#07398A" fillRule="evenodd" d="M63.044 82.162c2.456 4.224-4.489 24.846-12.132 27.068-.973-8.477-18.508-23.64-29.703-17.275-.027-6.19.865-21.026-.094-25.674-2.68-12.913-2.862-20.247.295-28.78.656-1.726 2.769-3.566 3.824-4.596 4.175-4.06 10.672-2.824 14.655-2.527 7.465.579 8.7 12.242 12.956 31.08 2.018 8.809 7.673 16.379 10.199 20.704Z" clipRule="evenodd"/><path fill="#EEE1D9" fillRule="evenodd" d="M36.203 30.013c-.79-.921-1.325-.35-1.393-4.367 2.218 1.007 4.514-1.745 3.977-2.84-.761-1.535-1.843-2.973-1.422-5-1.37-.483-2.137-2.88-3.964-3.05-3.007-.262-7.749 2.264-5.017 8.534.645 1.495 2.213 3.034 2.784 7.484-1.196 1.021-1.626 3.606-.299 4.594.987.728 5.704.288 6.46-.897 1.468-2.308.179-3.217-1.127-4.458Z" clipRule="evenodd"/><path fill="#A1551F" fillRule="evenodd" d="M37.341 17.836c-1.17.796-5.482-3.594-6.01 1.975-.03.393-.209 1.75-1.988.906-1.756-.874-1.647 1.999-.056 1.646 1.594-.326 1.006 3.558.323 3.233-2.801-.595-8.283-7.078-3.319-9.606 3.164-6.618 10.253-3.878 13.815-5.468 1.856-.86 3.463 6.338-2.765 7.314Z" clipRule="evenodd"/><path fill="#A1551F" fillRule="evenodd" d="M26.114 14.876c-4.12 1.165-5.135-5.141-10.342-5.662-3.854-.37-2.551-3.073-8.996-4.122C.336 4.07-.827 13.39 6.09 14.237c6.917.847 7.98-1.99 11.714.174 3.762 2.16 8.113 1.685 8.31.465Z" clipRule="evenodd"/><path fill="#3294C4" d="M52.387 17.59s-.78.604-.531 1.626c.275 1.018.986 1.756.986 1.756l2.646.477s-.33-3.483-.119-3.983l.183-.497-3.165.62Z"/><path fill="#0D3C88" d="M63.49 13.43s-8.852 1.08-8.646 4.468c.199 3.75.845 7.523 9.792 6.736 4.113-.387-1.146-11.204-1.146-11.204Z"/><path fill="#B98984" d="M64.987 24.558c2.907-.39 4.929-3.199 4.515-6.272-.413-3.073-3.105-5.247-6.012-4.856-2.907.391-4.93 3.2-4.516 6.272.414 3.073 3.106 5.247 6.013 4.856Z"/><path fill="#EEE1D9" d="M60.256 19.53c.312 2.318 2.338 3.962 4.547 3.665 2.183-.294 3.73-2.418 3.418-4.736-.312-2.319-2.338-3.962-4.547-3.665-2.21.297-3.73 2.418-3.418 4.736Z"/><path fill="#fff" d="M65.024 15.335c1.317.294 2.177 1.734 2.478 2.943.174.67.184 1.364-.032 2.031-.2.582-.722 1.236-1.384 1.27-.082.01-.24-.135-.139-.204.227-.17.489-.288.709-.512.223-.197.354-.464.457-.728.227-.586.17-1.217.062-1.813-.24-1.162-.98-2.534-2.191-2.871-.055.007-.046-.133.04-.117Z"/><path fill="#0D3C88" d="M43.125 19.335s-.78.605-.531 1.627c.275 1.018.986 1.755.986 1.755l2.646.477s-.33-3.482-.119-3.982l.183-.497-3.165.62Z"/><path fill="#0D3C88" d="M54.2 15.18s-8.851 1.08-8.645 4.467c.199 3.75.845 7.523 9.792 6.736 4.117-.36-1.146-11.203-1.146-11.203Z"/><path fill="#B98984" d="M55.697 26.308c2.908-.391 4.93-3.2 4.516-6.272-.413-3.073-3.105-5.247-6.012-4.856-2.908.39-4.93 3.199-4.516 6.272.413 3.073 3.105 5.247 6.012 4.856Z"/><path fill="#EEE1D9" d="M55.514 24.944c2.2-.296 3.73-2.416 3.417-4.736-.312-2.32-2.347-3.96-4.547-3.664-2.199.295-3.729 2.416-3.417 4.735.312 2.32 2.348 3.961 4.547 3.665Z"/><path fill="#fff" d="M55.765 17.107c1.317.295 2.177 1.735 2.479 2.944.173.67.183 1.363-.033 2.031-.199.582-.722 1.236-1.384 1.27-.082.01-.24-.135-.138-.204.227-.17.489-.288.708-.512.224-.197.354-.464.458-.728.226-.586.17-1.217.061-1.813-.24-1.162-.98-2.534-2.19-2.871-.059-.02-.05-.16.04-.117Z"/><path fill="#EEE1D9" fillRule="evenodd" d="M50.3 22.924c-.296-.543-3.031 2.24-3.114 1.835-.873-2.16 1.288-5.699-.732-6.066-.428-.081-2.48 1.389-3.324 1.919-1.769 1.099-2.653 2.578-.827 7.275.309.848-5.742 24.404-9.305 28.882-5.961-4.474-9.196-21.09-8.333-23.343 0 0-8.763 5.455-9.187 14.064-.232 4.474 2.916 21.268 11.35 29.464 3.395 3.57 14.968 1.457 16.377-5.203 2.234-10.436 4.26-27.786 3.682-37.038 0 0-.194-4.334.603-6.662.863-1.227 3.063-4.689 2.81-5.127Z" clipRule="evenodd"/><path fill="#07398A" fillRule="evenodd" d="M27.616 13.868c1.344-.125.899.074.73 1.29-.1.708-.489 1.121-1.69 1.894-1.072.7-1.708-.104-1.853-1.39-.145-1.285 1.52-1.703 2.813-1.794Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M.851 5.639 94.76-6.993l29.027 215.8-93.908 12.632z"/></clipPath></defs></svg>
            </span>

            <button onClick={() => setAlertContext(false)} className="absolute top-0 right-0 p-3 pr-5 focus:border-none focus:outline-none hover:border-none hover:outline-none transform group" aria-label="close popup">
              <svg className="w-3 mt-[4px] transform group-hover:rotate-90 transition-transform ease-in-out duration-300" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.305 27.132L26.354 2.084M26.354 27.132L1.306 2.083" stroke="currentColor" strokeWidth="3.24"/></svg>
            </button>
          </div>
        )}
      </>
      )}

      <div className={`pt-3 pb-3 md:pt-4 md:pb-4 xl:pt-5 xl:pb-5 flex items-center transition-all ease-in-out duration-500 overflow-visible ${showLogo ? 'h-[65px] md:h-[80px] 2xl:h-[80px]' : ' h-[110px] md:h-[140px] 2xl:h-[140px]'}`}>
        <Container>
          <div className="flex flex-wrap items-center relative z-10" id="header-wrap">
            <div className="flex flex-wrap items-center">
              <div className={`md:border-r mr-5 pr-5 transition-all ease-in-out duration-500 ${showLogo ? 'border-opacity-0' : 'border-opacity-30' } ${ theme == 'white' ? 'border-blue' : 'border-white' }`}>
                <Link href="/">
                  <a aria-label="Navigate to the home page" className="block py-2 ring-white">
                    <Logo width={`transition-all ease-in-out duration-500 ${showLogo ? 'w-20 md:w-24 xl:w-32' : 'w-24 md:w-32 xl:w-40' }`} />
                  </a>
                </Link>
              </div>

              <div className="overflow-hidden">
                <span className={`text-sm font-medium hidden md:block transform transition-transform ease-in-out duration-500 ${showLogo ? '-translate-x-full' : 'translate-x-0'}`}>Social Media Marketing</span>
              </div>
            </div>

            <div className="ml-auto">
              <div className={`flex items-center space-x-1 relative z-10`}>
                {/* <Button white overrideClasses="hidden md:inline-block" href="/">Contact Us</Button> */}

                <Link href="/contact">
                  <a className={`rounded-full text-center font-bold px-4 md:px-6 py-2 bg-blue text-white ring-blue hidden md:inline-block group overflow-hidden transition-colors ease-in-out duration-500 relative z-10 ${themeButtonColors}`}>
                    <span className="block relative z-10">Contact Us</span>
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-dark group-hover:h-full group-focus:h-full transition-all ease-in-out duration-500 z-0"></div>
                  </a>
                </Link>
                <button
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                  className={`rounded-full text-center inline-block font-bold px-4 md:px-4 py-2 bg-transparent ring-blue relative z-10 group ${theme == 'white' ? 'text-blue' : 'text-white'}`}
                >
                  <div className="flex items-center group-hover:opacity-70 transition-opacity ease-in-out duration-500">
                    <span className="block mr-2">Menu</span>
                    <svg className="w-6" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.997 10.98c-.52.057-.979-.112-1.288-.476-.323-.386-.42-.934-.272-1.473a.478.478 0 00-.254-.584c-2.135-1.081-3.366.059-4.453 1.064-.755.698-1.467 1.357-2.501 1.47-.521.058-.979-.113-1.286-.477-.324-.386-.427-.936-.271-1.473.114-.394-.221-.567-.256-.584-.533-.27-1.01-.402-1.443-.431-1.299-.09-2.196.74-3.012 1.495-.754.698-1.466 1.357-2.5 1.47-.521.058-.978-.113-1.286-.477-.324-.386-.427-.936-.271-1.473.114-.394-.221-.567-.255-.584-2.134-1.081-3.366.059-4.454 1.064-.754.698-1.466 1.357-2.5 1.47a.5.5 0 00.109.994c1.361-.15 2.269-.989 3.07-1.73.969-.895 1.692-1.558 2.984-1.056-.089.718.103 1.427.552 1.96a2.39 2.39 0 001.857.843 2.8 2.8 0 00.249-.014.516.516 0 00.056-.002c1.361-.15 2.269-.99 3.07-1.73.966-.894 1.688-1.554 2.975-1.06a.067.067 0 00.008.004c-.088.718.104 1.427.553 1.959.459.545 1.124.844 1.857.844.1 0 .2-.006.302-.017 1.363-.15 2.271-.989 3.072-1.73.968-.896 1.692-1.559 2.983-1.056-.088.718.105 1.427.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.017a.5.5 0 00-.11-.996zM26.997 17.84c-.52.056-.979-.112-1.288-.477-.323-.385-.42-.934-.272-1.473a.478.478 0 00-.254-.584c-2.135-1.081-3.366.059-4.453 1.065-.755.698-1.467 1.356-2.501 1.469-.521.058-.979-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.256-.584-.533-.27-1.01-.401-1.443-.43-1.299-.09-2.196.74-3.012 1.495-.754.698-1.466 1.356-2.5 1.469-.521.058-.978-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.255-.584-2.134-1.08-3.366.059-4.454 1.065-.754.698-1.466 1.356-2.5 1.469a.5.5 0 00.109.994c1.361-.149 2.269-.988 3.07-1.729.969-.896 1.692-1.559 2.984-1.056-.089.718.103 1.427.552 1.959a2.39 2.39 0 001.857.844 2.8 2.8 0 00.249-.014.516.516 0 00.056-.003c1.361-.15 2.269-.989 3.07-1.73.966-.893 1.688-1.553 2.975-1.059a.067.067 0 00.008.003c-.088.718.104 1.428.553 1.96.459.544 1.124.843 1.857.843.1 0 .2-.006.302-.017 1.363-.149 2.271-.989 3.072-1.729.968-.896 1.692-1.559 2.983-1.057-.088.718.105 1.428.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.016a.5.5 0 00-.11-.996zM26.997 4.121c-.52.056-.979-.112-1.288-.477-.323-.385-.42-.934-.272-1.473a.478.478 0 00-.254-.583c-2.135-1.082-3.366.058-4.453 1.063-.755.699-1.467 1.357-2.501 1.47-.521.058-.979-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.256-.583-.533-.271-1.01-.403-1.443-.431-1.299-.09-2.196.74-3.012 1.494-.754.699-1.466 1.357-2.5 1.47-.521.058-.978-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.255-.583C5.515.506 4.283 1.645 3.195 2.65c-.754.699-1.466 1.357-2.5 1.47a.5.5 0 00.109.994c1.361-.149 2.269-.989 3.07-1.729.969-.896 1.692-1.559 2.984-1.057-.089.718.103 1.427.552 1.96a2.39 2.39 0 001.857.844 2.8 2.8 0 00.249-.014.516.516 0 00.056-.003c1.361-.15 2.269-.989 3.07-1.73.966-.893 1.688-1.554 2.975-1.059a.067.067 0 00.008.003c-.088.719.104 1.427.553 1.96.459.545 1.124.843 1.857.843.1 0 .2-.005.302-.016 1.363-.15 2.271-.99 3.072-1.73.968-.896 1.692-1.559 2.983-1.057-.088.719.105 1.427.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.016a.5.5 0 00-.11-.996z" fill="currentColor" stroke="currentColor" strokeWidth=".5"/></svg>
                  </div>
                </button>

                { pinned && (
                  <div className="absolute inset-0 inset-x-[0px] md:inset-x-[40px]">
                    <div className="w-full h-full bg-white z-0 rounded-full transform md:scale-x-[1.75] md:scale-y-[1.75]"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
    {/* Popup Menu */}
  </>
  )
}