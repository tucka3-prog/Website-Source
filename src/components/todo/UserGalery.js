import React, { Component, useEffect, useState, View, ScrollView } from 'react';

import { Meme } from '../../components/memeComponents/Meme';
import FooterComponent from "../../components/todo/FooterComponent.jsx"

export function Galery() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch("http://35.224.119.47:8080/users/all").then(x =>
      x.json().then(response => setTemplates(response)))
  }, []);


  return (
    <div style={{ textAlign: "center" }} >

      {template && (
        <form onSubmit={e => {
          e.preventDefault()
          // add logic to create meme from api
        }}>
          <Meme template={template} />

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




export default Galery;
