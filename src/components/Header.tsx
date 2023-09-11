import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { FaSearch } from 'react-icons/fa'

function Header () {
  const headerHtml = useRef<HTMLDivElement>(null)

  // header bg change function
  const headerBg = () => {
    if(headerHtml.current){
      if(window.scrollY > 100){
        headerHtml.current.style.backgroundColor = 'rgba(256,256,256,0.7)'
      } else {
        headerHtml.current.style.backgroundColor = 'transparent'
      }
    }
  }

  useEffect(()=>{

    // scrollY check
    setInterval(()=>{
      window.addEventListener('scroll', headerBg)
    },100)
  },[])
  
  type HeaderLi = {path : string, name : string}[];

  class HeaderItems {
    name: string;
    path: string;
    constructor(a:string,b:string){
      this.name = a;
      this.path = b;
    }
  };

  // header li 자료 생성
  let headerLi: HeaderLi = [
    new HeaderItems('Home','/'),
    new HeaderItems('Product','/product'),
    new HeaderItems('Cart','/cart')
  ];

  return(
    <div id="header" ref={headerHtml}>
      <div className="logo"><Link to={'/'} className="logoLink">E T U D E</Link></div>
      <div className="nav">
        {
          headerLi.map((a,i)=>{
            return (
              <NavItem headerLi={headerLi[i]} key={i}></NavItem>
            )
          })
        }
      </div>
      <div className="search"><FaSearch/></div>
    </div>
  )
}

//  Nav Link 생성 컴포넌트
function NavItem (props: {headerLi : {path : string, name : string}}): JSX.Element {
  return ( 
    <Link to={props.headerLi.path} className="link">{props.headerLi.name}</Link>
  )
}

export { Header}