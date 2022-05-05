    import React from 'react';

const Greeting = ({name}) => (
      <h1>Hello {this.state.name}</h1>
  );

const App=()=>{
  return(
    <div>
        <Greeting name="React"/>
  </div>);
}

export default App
