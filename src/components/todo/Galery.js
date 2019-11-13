import React, { Component, useEffect, useState, View, ScrollView } from 'react';

import { FileUploader } from '../../services/fileUploader.jsx';
import { Meme } from '../../components/memeComponents/Meme';
import FooterComponent from "../../components/todo/FooterComponent.jsx";
import editImageFunction from "../../components/todo/EditImageFunction"
import RefreshGalery from "../../components/todo/RefreshGalery"

export function Galery() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
const [message, setMessage] = useState("");

  
  useEffect(() => {
    fetch("http://35.224.119.47:8080/images/all").then(x =>
      x.json().then(response => setTemplates(response)))
  }, []);



  return (
    
    <div style={{ textAlign: "center" }} >
         <h2>Welcome,</h2>
         <h2>you can choose one of the predefined images or upload your own</h2>
         <div><FileUploader/></div>

      {template && (
        <form onSubmit={e => {
          e.preventDefault();
          editImageFunction(template.name+","+topText+","+bottomText);
          RefreshGalery()
          {setMessage("Edit Complete you can find picture in User Galery")}
        }}>
   
          <Meme template={template} />
          <div></div>
          <input
            placeholder="top text"
            value={topText}
            onChange={e => setTopText(e.target.value)}
          />
            <input
            placeholder="bottom text"
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          />
          {/* <input placeholder="bottom text" /> */}
          <button type="submit" >Submit</button>
          <div>{message}</div>
        </form>
  
      )}
      {!template && (
        <>
          <h1></h1>
          {templates.map(template => {
            return (
              <Meme
                template={template}
                onClick={() => {
                  setTemplate(template)
                }}
              />
            );
          })}
        </>
      )}
      
     <div>
       <FooterComponent/>
      </div>
    </div>
  );
}




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <TodoApp/>
//       <h1>You can pick a template, or upload your own picture:
//         </h1> <FileUploader />
//         <Galery/>
//       </div>

//     );
//   }
// }



export default Galery;
