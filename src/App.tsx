
import './App.css'
import Nav from './component/nav'
import Banner from './component/banner'
import Technology from './component/Technology/technology'
import { Suspense } from 'react'
import type { Itech } from './type/techType'


const techFetch=async(): Promise<Itech[]>=>{
  const res = await fetch('/Data.json')
  const data =await res.json();
  return data;
}


function App() {
  const techPromise = techFetch();
 

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading......</h2>}>
      <Technology techPromise={techPromise}></Technology>
      </Suspense>
    </>
  )
}

export default App
