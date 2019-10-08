import React from 'react';
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="App">
      <Contact 
        name="Bob Razowski"
        online = "false"
        image="https://i.pinimg.com/236x/5a/95/12/5a9512c7c3336acfb907773bf582140c--monsters-ink-pixar-characters.jpg"
      />
      <Contact 
        name="Paul Scholes"
        online="true"
        image="https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p363.png"
      />
      <Contact 
        name="Zinédine Zidane"
        online="false"
        image="https://www.trzcacak.rs/myfile/detail/41-411661_zidane-sticker-clipart-zidane.png"
      />
    </div>
  );
}

export default App;
