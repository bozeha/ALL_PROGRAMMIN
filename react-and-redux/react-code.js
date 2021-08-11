

import {useState} from 'react'; 

const [element, setElement] = useState("defualt_value");

import styled from "styled-components";

const StyledElement = styled.div`

background-color:red;
font-size:20px;
`;

import {motion} from "framer-motion";


/// option 1
<motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }}>
    Contect us
</motion.h2>


//// option 2

const ElementStyle = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 5 },
  },
};

<motion.h2 variants={ElementStyle} initial="hidden" motion="show"> Contect us <motion.h2>



//////// option 3 motion with sityled element 

const StyledDiv = styled(motion.div)`

background-color:blue;
color:red;
`;

<StyledDiv variants={ElementStyle} initial="hidden" motion="show">Countect us<StyledDiv>



///////////////// when the element remove with flag , and we want animation 
///////////////// on remove , we need to add AnimatePresence and exit element 
///////////////// exapmle : 

import { motion, AnimatePresence} from "framer-motion";

 <AnimatePresence>
        {cartdisplay && (
          <CartBlock
            variants={closeCartMotion}
            initial="hidden"
            animate="show"
            exit="exit"
          >
		</CartBlock>
</AnimatePresence>




const closeCartMotion = {
  show: {
    width: "30%",
  },
  hidden: {
    width: "0%",
  },
  exit: {
    width: "0%",
  },
};





///#############################################scroll animation#####################33
/// import listener to element scrolled 
import { useInView } from "react-intersection-observer";
/// import control animation 
import { useAnimation } from "framer-motion";


  /// useAnimation -> let you control when the animation will start
  const controls = useAnimation();

  /// element-> to listen to any element we add ref={element}
  /// view-> returns true or false if in view
  /// threshold -> what percentage view will be true , in this case on 10% of element view will be true
  const [element, view] = useInView({ threshold: 0.1 });

  
  /// create condition when animate will start ->on element on view  
  if (view) {
    console.log(`view: ${view}`);
    controls.start("show");
  } else {
    console.log(`view: ${view}`);
    controls.start("hidden");
  }
  
  
  
  //// create animation object 
  const Fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 5 } },
};

/// create style object thet received motion obj 
const TestDiv = styled(motion.div)`
  background-color: red;
  height: 2000px;
  width: 500px;
`;




//// implement on element the 

<TestDiv
        ref={element}
        variants={Fade}
        initial="hidden"
        animate={controls}
      ></TestDiv>
  
  
  
  
  ################################## useEffect################3333
  
  import {useEffect} from "react";
  
  
  //// every time the testVar changes run the function 
  useEffect(()=>{
	  console.log("the variable has been change !!! run this");
  },[testVar])
  
  
  ################################ get api ###########################3
  
  
  import axios from "axios";
  
  
  const jsonFromApi = axios.get("www.getjson.com/file.json").then(
  (data)=>{consle.log("json is rady to use ");console.log(data)}
  );
  
  
  
  ############################## protect secret keys and code ###################
  
  // in root folder creact file .env
  
  /// in the file creact variable that start with REACT_APP_ and the name of your var
  
  REACT_APP_MYVAR = password12345678
  
  /// to use it got to the loaction in the code and add 
  
  `${procces.env.REACT_APP_MYVAR}`
  
  
  
  #####################################link #################################33
  
  /////npm install react-router-dom
  
  import { Link } from "react-router-dom";
  
  <Link to="/work">2. Our Work</Link>
  
  
  #######################################router #######################333
  
  /// first install react-router-dom
  npm install react-router-dom
  
  /// in index.js 
  import { BrowserRouter } from "react-router-dom";
  
  
  /// in index.js cover <app/> with <BrowserRouter>
  <BrowserRouter>
	<app/>
  </BrowserRouter>
  
  /// in App.js
  import { Route } from "react-router-dom";
  
  /// cover every page in App.js with <Route>
  
  <Route exact path="/">
	<AboutUs />
  </Route>
  <Route path="/work/:id">
	<MovieDetail />
  </Route>
  <Route path="/work">
	<OurWork />
  </Route>
  <Route path="/contact">
	<ContectUs />
  </Route>

################################## make page rerunder ever time url changes ########
import { useEffect } from "react";
import { useLocation} from "react-router-dom";

const { pathname } = useLocation();
  useEffect(() => {
    console.log("dd");
  }, [pathname]);
  
  
##################################### make animate of open popup ##################
///////////// in the object that contains the two elements (game image and the popup of image details)

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";


const MainContObj = () =>{
	


return (
	<>
	
	///////// wrap the two elements with  AnimateSharedLayout
	
	
	<AnimateSharedLayout>
		
		/// wrap the popup object with  AnimatePresence
		
		<AnimatePresence>
			<PopupGameDetails/>
		</AnimatePresence>
		
		////////// list of games 
		  upcoming.map((currentGame, index) => (
					  <Game
						name={currentGame.name}
						released={currentGame.released}
						img={currentGame.background_image}
						key={
						  currentGame.key
							? currentGame.key
							: currentGame.name + index
						}
						current_index={index}
						id={currentGame.id}
					  >
					  </Game>
					))}
		
		
	<AnimateSharedLayout>	
	</>

)}	



	
/////////////////////// now in the popup and in the game must have same id in layoutId


//////////////// not must but if we want to resize motion spasific element 
////////////////for example the image from game to resize to the details element
//////////////// we must add same layoutId to the image in the game element 
//////////////// and in the image in the details element

const Game = (id) =>{
	
	
	return (
	<div layoutId={id}>
		///////////////// not must 
		<img src={url} layoutId={url}/>
	
	</div>
	)
	
}

const PopupGameDetails = (id) =>{
	
	
	return (
	<div layoutId={id}>
		///////////////// not must 
		<img src={url} layoutId={url}/>
	</div>
	)
	
}














