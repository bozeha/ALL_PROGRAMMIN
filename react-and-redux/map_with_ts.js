

//////////////// #########################parent 

{questeions.arrayOfQuestions && questeions.arrayOfQuestions.map((currentQuesteion)=>(

        <h1>
          <Question currentQ={currentQuesteion} />
        </h1>
       
        
))}


/////////////////###########################child 


interface question  {
    question: string,
    answer :string [],
    rightAnswer: number
 }


/////// this is all type of props we can add , this time we using currentQ , that 
/////// is type of question interface we created above
 interface questionProps {
     currentQ : question
 }

const Question = (props: questionProps)=>{

    return(
        <h1>{props.currentQ.question}</h1>
    )
}

export default Question;