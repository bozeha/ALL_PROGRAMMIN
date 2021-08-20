



///////////// before ts 


const [currentNum, setCurrentNum] = useState();


/////////////// with ts we must declare the type of the var before 

//// ther is two ways :
///first 

const [currentNum, setCurrentNum] = useState<number>();


//// second 

/////// we will set default value , what make it auto to number 
const [currentNum, setCurrentNum] = useState(0);



///// array of numbers

const [arrayOfAnswers, setArrayOfAnswers] = useState<number[]>();