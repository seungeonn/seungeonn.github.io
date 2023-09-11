import { useEffect, useState } from 'react';
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import styled from 'styled-components';

type MainType = {
  id: number, text1 : string, text2: string, image?: string
}


function Main () {
  
  let mainview: MainType[] = [
    {id: 0,text1 :'고수분 물빛 스밈 틴트', text2 :'프루티 듀이 틴트 지그재그 단독 런칭', image : '../assets/images/section1/0.jpg'},
    {id: 1,text1 :'CITY EDITION', text2: '매력적인 도시의 느낌을 담아낸 컬러 컬렉션', image : '../assets/images/section1/1.jpg'},
    {id: 2,text1 :'ETUDE x BEARKKU', text2: '베어꾸는 하루종일 귀엽다꾸~❤️', image : '../assets/images/section1/2.jpg'},
    {id: 3,text1 :'무한 조합 퍼스널 컬러 팔레트', text2: '나만의 워너비룩을 완성해주는 My Playlist', image : '../assets/images/section1/3.jpg'},
    {id: 4,text1 :'7년 연속 1위! 컬링 마스카라', text2:'깔끔한 컬링, 첫 화장 그래도 픽싱!', image : '../assets/images/section1/4.jpg'},
    {id: 5,text1 :'NEW 글로우 픽싱 틴트',text2: '은은한 광이 차오르는 글로잉 틴트', image : '../assets/images/section1/5.jpg'},
    {id: 6,text1 :'민감 피부 자극도 제로',text2: '순정 약산성 5.5 진정 토너', image : '../assets/images/section1/6.jpg'},
    {id: 7,text1 :'조효진 개발! 그림자 쉐딩', text2: '음영 메이크업 강자로 재.조.명' , image : '../assets/images/section1/7.jpg'}
  ]
  

  let [mainNum, setMainNum] = useState<number>(0);

  let Current = styled.div`
    width: ${100 / mainview.length}%;
    height: 5px;
    background-color: #fff;
    position: absolute;
    left: ${mainNum * (100 / mainview.length)}%;
`
  
  // useEffect(()=>{

    

  // },[mainNum])


  return(
    <div id="main">

      <section className="section1">
        
        {
          mainview.map((a,i)=>{
            return(
              a.id === mainNum ?  <MainviewHtml key={i} mainview={mainview[i]}/> : null
            )
          })
        }

        <div className="mainNav">
          <div className="arrow prev" onClick={function(){
            if(mainNum){
              setMainNum(mainNum -= 1)
            } else if(mainNum === 0) {
              setMainNum(mainNum = mainview.length-1)
            }
          }}><FaAngleLeft size='38' color='#fff' /></div>
          <Current></Current>
          <div className="arrow next" onClick={function(){
            if(mainNum < mainview.length - 1){
              setMainNum(mainNum += 1)
            } else {
              setMainNum(mainNum = 0)
            }
          }}><FaAngleRight size='38' color='#fff' /></div>
        </div>

      </section>

      <section className="section2">

      </section>
      
      <section className="section3">

      </section>

    </div>
  )
}

function MainviewHtml ({mainview}: any): JSX.Element {

    return (
      <div className={'mainviewBox'} id={mainview.id}>
        <img className="img" src = {mainview.image} alt={'image'+ mainview.id} />
      <div className="mainviewText">
        {mainview.text1}
        <span className="span">{mainview.text2}</span>
      </div>
    </div>
    )

}

export {Main}