import { useEffect, useState } from 'react'
import TabButton from './TabButton'
import { EXAMPLES } from "../data";

export default function Examples() {

    const [tabSelected, setTabSelected] = useState('components');
    const [getData, setGetData] = useState('')
    

    function handleClick(selectedTab) {
      setTabSelected(selectedTab);
    }
    // const fetchData=async ()=>{
    //   const response= await fetch('https://www.omdbapi.com/?s=supermann&apikey=3575c4a9');
    //   const parsedData=await response.json();
    //   console.log(parsedData.Search,'ji')
    // }

    // useEffect(()=>{
    //   fetchData()
    // },[])

    return (
    
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              className={tabSelected === "components" ? "active" : ""}
              label="Components"
              onClick={() => handleClick("components")}
            />
            <TabButton
              className={tabSelected === "jsx" ? "active" : ""}
              label="JSX"
              onClick={() => handleClick("jsx")}
            />
            <TabButton
              className={tabSelected === "props" ? "active" : ""}
              label="Props"
              onClick={() => handleClick("props")}
            />
            <TabButton
              className={tabSelected === "state" ? "active" : ""}
              label="State"
              onClick={() => handleClick("state")}
            />
          </menu>
        
            <div id="tab-content">
              <h3>{EXAMPLES[tabSelected].title}</h3>
              <p>{EXAMPLES[tabSelected].description}</p>
              <pre>
                <code>{EXAMPLES[tabSelected].code}</code>
              </pre>
            </div>
        
        </section>

  )
}
