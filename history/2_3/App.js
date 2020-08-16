import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from './comment.js'

import jh from "./JH.jpg"



function App() {
  return (
    <div>
    <Image src = {jh} centered />
    <Comments />

    </div>
  );
}

export default App;
