import Accordian from "./Accordian"
import data from '../data.json';

function FAQ() {
    console.log(data.faqs)
  return (
    <div>
        <h1 className="text-6xl text-center my-10 tracking-[0.75rem]">REACT FAQ</h1>
        {data.faqs.map((faq, index)=>{
            return <Accordian key={index} qna={faq}/>
        })}
    </div>
  )
}

export default FAQ;