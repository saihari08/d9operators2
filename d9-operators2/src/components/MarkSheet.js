import React,{useRef} from 'react'

function MarksSheet() {

    let FirstNameInputRef=useRef();
    let LastNameInputRef=useRef();
    let EnglishInputRef=useRef();
    let TeluguInputRef=useRef();
    let HindiInputRef=useRef();
    let MathsInputRef=useRef();
    let ScienceInputRef=useRef();
    let SocialInputRef=useRef();

    let resultParaRef=useRef();

    let EnglishSpanRef=useRef();
    let TeluguSpanRef=useRef();
    let HindiSpanRef=useRef();
    let MathsSpanRef=useRef();
    let ScienceSpanRef=useRef();
    let SocialSpanRef=useRef();
    
let EnglishOnFocus=()=>{
    resultParaRef.current.innerHTML="onFocus";
    EnglishInputRef.current.style.backgroundColor="red";
    };
  
let EnglishOnChange=()=>{
    EnglishInputRef.current.style.backgroundColor="yellow";
    EnglishSpanRef.current.innerHTML=EnglishInputRef.current.value>35?"Pass":"Fail";   
    EnglishSpanRef.current.style.backgroundColor=EnglishInputRef.current.value>35?"green":"red";
    };
let EnglishOnBlur=()=>{
    resultParaRef.current.innerHTML="onBlur";
    EnglishInputRef.current.style.backgroundColor="";
    };

    let TeluguOnFocus=()=>{
        resultParaRef.current.innerHTML="onFocus";
        TeluguInputRef.current.style.backgroundColor="red";
    }
    let TeluguOnChange=()=>{
        resultParaRef.current.innerHTML="onChange";
        TeluguInputRef.current.style.backgroundColor="yellow";
        TeluguSpanRef.current.innerHTML=TeluguInputRef.current.value>35?"Pass":"Fail";
        TeluguSpanRef.current.style.backgroundColor=TeluguInputRef.current.value>35?"green":"red";
    }
    let TeluguOnBlur=()=>{
        resultParaRef.current.innerHTML="onBlur";
        TeluguInputRef.current.style.backgroundColor="";
    }

    let HindiOnFocus=()=>{
        resultParaRef.current.innerHTML="onFocus";
        HindiInputRef.current.style.backgroundColor="red";
    }
    let HindiOnChange=()=>{
        resultParaRef.current.innerHTML="onChange";
        HindiInputRef.current.style.backgroundColor="yellow";
        HindiSpanRef.current.innerHTML=HindiInputRef.current.value>35?"Pass":"Fail";
        HindiSpanRef.current.style.backgroundColor=HindiInputRef.current.value>35?"green":"red";
    }
    let HindiOnBlur=()=>{
        resultParaRef.current.innerHTML="onBlur";
        HindiInputRef.current.style.backgroundColor="";
    }

    let MathsOnFocus=()=>{
        resultParaRef.current.innerHTML="onFocus";
        MathsInputRef.current.style.backgroundColor="red";
    }
    let MathsOnChange=()=>{
        resultParaRef.current.innerHTML="onChange";
        MathsInputRef.current.style.backgroundColor="yellow";
        MathsSpanRef.current.innerHTML=MathsInputRef.current.value>35?"Pass":"Fail";
        MathsSpanRef.current.style.backgroundColor=MathsInputRef.current.value>35?"green":"red";
    }
    let MathsOnBlur=()=>{
        resultParaRef.current.innerHTML="onBlur";
        MathsInputRef.current.style.backgroundColor="";
    }

    let ScienceOnFocus=()=>{
        resultParaRef.current.innerHTML="onFocus";
        ScienceInputRef.current.style.backgroundColor="red";

    }
    let ScienceOnChange=()=>{
    resultParaRef.current.innerHTML="onChange";
    ScienceInputRef.current.style.backgroundColor="yellow";
    ScienceSpanRef.current.innerHTML=ScienceInputRef.current.value>35?"Pass":"Fail";
    ScienceSpanRef.current.style.backgroundColor=ScienceInputRef.current.value>35?"green":"red"; 
    }
    let ScienceOnBlur=()=>{
    resultParaRef.current.innerHTML="onBlur";
    ScienceInputRef.current.style.backgroundColor="";
   }
   
   let SocialOnFocus=()=>{
    resultParaRef.current.innerHTML="onFocus";
        SocialInputRef.current.style.backgroundColor="red";
   }
   let SocialOnChange=()=>{
    resultParaRef.current.innerHTML="onChange";
        SocialInputRef.current.style.backgroundColor="yellow";
        SocialSpanRef.current.innerHTML=SocialInputRef.current.value>35?"Pass":"Fail";
        SocialSpanRef.current.style.backgroundColor=SocialInputRef.current.value>35?"green":"red"; 
   
   }
   let SocialOnBlur=()=>{
    resultParaRef.current.innerHTML="onBlur";
        SocialInputRef.current.style.backgroundColor="";

   }

  return (
<div>
    <form className='MarksSheet'>
    <fieldset>
    <legend>MarksSheet</legend>
     <div>
        <label>FirstName</label>
        <input ref={FirstNameInputRef}type="text"></input>
        <span></span>
     </div>
     <div>
        <label>LastName</label>
        <input ref={LastNameInputRef}type="text"></input>
        <span></span>
     </div>
     <div>
        <label>English</label>
        <input ref={EnglishInputRef} type="number"
onFocus={()=>{
    EnglishOnFocus();
}}
onChange={()=>{
    EnglishOnChange();
}}
onBlur={()=>{
    EnglishOnBlur();
}}>          
</input>
<span ref={EnglishSpanRef}></span>
</div>

<div>
<label>Telugu</label>
<input ref={TeluguInputRef}type="number"
onFocus={()=>{
    TeluguOnFocus();       
}}
onChange={()=>{
    TeluguOnChange();  
}}
onBlur={()=>{
    TeluguOnBlur();   
}}        
></input>
<span ref={TeluguSpanRef}></span>
</div>
     
<div>
<label>Hindi</label>
<input ref={HindiInputRef}type="number" 

onFocus={()=>{
     HindiOnFocus();   
}}
onChange={()=>{
    HindiOnChange();  
}}
onBlur={()=>{
    HindiOnBlur();
}}
></input>
<span ref={HindiSpanRef}></span>
</div>

<div>
<label>Maths</label>
<input ref={MathsInputRef}type="number"
        
onFocus={()=>{
    MathsOnFocus();  
}}
onChange={()=>{
     MathsOnChange();
}}
onBlur={()=>{
     MathsOnBlur();   
}}>
</input>
<span ref={MathsSpanRef}></span>
</div>

<div>
<label>Science</label>
<input ref={ScienceInputRef} type="number"
onFocus={()=>{
    ScienceOnFocus();
 }}
onChange={()=>{
    ScienceOnChange();
}}
onBlur={()=>{
    ScienceOnBlur();
}}>
</input>
<span ref={ScienceSpanRef}></span>
</div>

<div>
<label>Social</label>
<input ref={SocialInputRef} type="number"
onFocus={()=>{
    SocialOnFocus();
}}
onChange={()=>{
    SocialOnChange();
}}
onBlur={()=>{
    SocialOnBlur();
}}>
</input>
<span ref={SocialSpanRef}></span>
</div>

</fieldset>
<div> 
<button type="button" onClick={()=>{

let English=Number(EnglishInputRef.current.value);
let Telugu=Number(TeluguInputRef.current.value);
let Hindi=Number(HindiInputRef.current.value);
let Science=Number(ScienceInputRef.current.value);
let Maths=Number(MathsInputRef.current.value);
let Social=Number(SocialInputRef.current.value);

let result;

if(English >=35 && Telugu >=35 && 
   Hindi >=35 && Science >=35 &&
   Maths >=35 && Social >=35 )
    {result="Pass";
}else{
     result="Fail";
}

let totalmarks=English+Telugu+Hindi+Maths+Science+Social

let perc=(totalmarks/600)*100
//alert(`${FirstNameInputRef.current.value} totalmarks are ${totalmarks}`);//

resultParaRef.current.innerHTML=`${FirstNameInputRef.current.value}
${LastNameInputRef.current.value} ${result} in Tenth with
totalmarks are ${totalmarks} with percentage ${perc.toFixed(2)}%`;

}}>Submit</button>
<button type="button" onClick={()=>{
      
      let HallticketNo="no";
      let RollNumber="no";
      let FullName="no";
    
   if(HallticketNo=="yes"||
    RollNumber=="yes"||
    FullName=="yes"){
      console.log("you can check  your results");
   }else{
    console.log("you can check your results");
   }   

}}>Result</button>
</div>
<p id="resultPara" ref={resultParaRef}></p>
</form>
</div>
  )
}

export default MarksSheet;
