import Navigation from "../Navigation/Navigation"
import Products from "../Products/Products"
import Recommended from "../Recommended/Recommended"
import Sidebar from "../Sidebar/Sidebar"

//database
import productData from '../../Data/Data'
import { useState } from "react"
import Card from "../PageComponents/Card"

const Controller = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  //----------input Filter-------------
  const handleInputChange = event =>{
    setQuery(event.target.value)
  }

  const filteredItems = productData.filter(
    (resultData) => resultData.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    
  );

  //----------Radio Filter-------------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

//----------Button Filter-------------
 const handleClick = event => {
  setSelectedCategory(event.target.value)
 }

 const filteredData = (products, selected, query)=>{
  let filteredProducts = products

  //filtering input items
  if(query){
    filteredProducts = filteredItems
    console.log(filteredProducts)
  }

  //selected filter
  if(selected){
    filteredProducts = filteredProducts.filter(({category})=>
    category === selected);
  }

  return  filteredProducts.map(({img,title,prevPrice, newPrice, desc,stock})=>(
    <Card 
    key={Math.random()}
    img={img}
    title={title}
    prevPrice = {prevPrice}
    newPrice = {newPrice}
    desc = {desc}
    stock = {stock}
    />
  ));
 }


 const result = filteredData(productData, selectedCategory,query);
  return (
    <div>
        <Sidebar handleChange = {handleChange}/>
        <Navigation query ={query} handleInputChange = {handleInputChange}/>
        <Recommended handleClick = {handleClick}/>
        <Products result ={result}/>
    </div>
  )
}

export default Controller
