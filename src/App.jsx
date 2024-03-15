import Header from "./Components/Header";
import Concepts from "./Components/Concepts";
import Examples from "./Components/Examples";
import Card from "./Components/Card";
import { useEffect } from "react";

function App() {
  const fetchData= async()=>{
    const response = await fetch('https://www.omdbapi.com/?s=supermann&apikey=3575c4a9');
    const parseData = await response.json();
   console.log(parseData.Search)
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <main>
      <Concepts />
      <Examples />
      <Card />
      </main>
      
    </>
  );
}

export default App;
