import React ,{useState}from "react";
import "./aboutPage.css";
import PageNav from "../../components/pageNav/PageNav";
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'
import { motion,AnimatePresence } from "framer-motion";
import { data } from "../../data";

function AboutPage() {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <div>
      <PageNav page="ABOUT US" />
      <div className="company-container">
        <div className="cc-image"></div>
        <div className="cc-content">
          <h1 className="c-heading">THE COMPANY</h1>
          <p>12012 Belle Views Svenhaven ,Maryland , 88149-0182 Couunrty USA</p>
          <br />
          <p><AiOutlinePhone/> 382-675-5066 x029</p><br/> <p><AiOutlineMail/> semmerich@gmail.com</p>
          <div className="c-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            nemo sunt quos. Dolorum consectetur commodi possimus alias minima
            ullam quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi harum optio repellendus repudiandae beatae ullam dolor
            voluptates? Hic eos dolorum cupiditate sed veritatis a rerum quos
            voluptatibus, quisquam, laborum neque? Lorem ipsum dolor sit amet
            consectetur
          </div>
        </div>
      </div>
      <div className="team-container">
      
 
 {data.map(item => (
  <> <motion.div layoutId={item.name} onClick={() => setSelectedId(item.name)}>
     <motion.h5>{item.name}</motion.h5>
     <motion.h2>{item.name}</motion.h2>
   </motion.div>
  <AnimatePresence>
   {selectedId && (
     <motion.div layoutId={selectedId}>
       <motion.h5>{item.name}</motion.h5>
       <motion.h2>{item.name}</motion.h2>
       <motion.button onClick={() => setSelectedId(null)} />
     </motion.div>
   )}
 </AnimatePresence> 
 </>
 ))}
      </div>
    </div>
  );
}

export default AboutPage;
