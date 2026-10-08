import './App.css'
import NavBar from './components/nav/NavBar'
import HeroSection from './components/hero/HeroSection'
import Technologies from './components/Technologies/Technologies'
import { Suspense } from 'react'
import type { technologyType } from './type'


function App() {

  const dataFetch = async (): Promise<technologyType[]> => {
    const res = await fetch("/gemini-code-1791380681627.json")
    const data = await res.json()
    return data;
  }

  const dataPromise = dataFetch()

  return (
    <>
      <NavBar />

      <HeroSection></HeroSection>

      <Suspense fallback={<h1>Load hobe...</h1>}>
        <Technologies dataPromise={dataPromise}></Technologies>
      </Suspense>





    </>
  )
}

export default App
