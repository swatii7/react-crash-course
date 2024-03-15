import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS} from "../data";

export default function Concepts() {
  return (
    <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem, index)=>
            <CoreConcept key={index} {...conceptItem} />
            )}
          </ul>
        </section>
  )
}
