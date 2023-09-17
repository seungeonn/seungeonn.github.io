import axios from "axios"
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name1 : string;
  name2 : string;
  price : string;
  description : string;
  hashTag : string;
  image : string;
}

function Section2 () {
  let [product,setProduct] = useState<Product[] | null>(null)
  let [pdNum, setPdNum] = useState(5)

  useEffect(function(){
    axios.get('https://seungeonn.github.io/data/project1/project1.json')
    .then(function(result){
      let state = result.data.product.slice(0,pdNum)
      setProduct(state)
    })
    .catch(function(error){
      console.error('data load failed',error);
    })
  },[product, pdNum])

  console.log(product);
  
  return(
    <section className="section2">
      {
        product
        ? product.map((a,i) => {
          return <ProductHtml key={i} product={a}></ProductHtml>
        })
        : null
      }
      
      <div className="btnBox">
        <button className="more" onClick={function(){
          setPdNum(pdNum + 5)
        }}>View More</button>
      </div>
    </section>
  )
}

function ProductHtml ({product} : {product : Product}) {
  return(
    <div className="box">
      <div className="image">
        <img className="img" src={'https://seungeonn.github.io/data/project1/image/'+product.id+'.png'} alt={'화장품이미지' + product.id} />
      </div>

      <div className="text">
        <div className="name">{product.name1}</div>
        <div className="price">{product.price}원</div>
      </div>
    </div>
  )
}

export { Section2}