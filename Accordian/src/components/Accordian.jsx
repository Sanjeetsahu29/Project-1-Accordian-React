import {useState} from 'react';
function Accordian({qna}) {
    const [show, setShow] = useState(false);
    function handleClick(){
        setShow(()=>!show);
    }
  return (
    <div className="w-[80%] mx-auto border-2 mb-2 p-2 rounded-lg border-black transition-transform ">
        <h1 className="font-semibold flex justify-between items-center pb-2">
            <span>{qna.question}</span>
            <span className="cursor-pointer p-1" onClick={handleClick}>
                {show?"-":"+"}
            </span>
        </h1>
        {show?(<p className="text-sm">{qna.answer}</p>):""}
    </div>
  )
}

export default Accordian