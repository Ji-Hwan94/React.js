import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      //최상위 코더로 시작한다.
      <header> 
         <h1>WEB</h1>
         world wide web!
      </header>
    );
  }
} 

class Index extends Component {
  render() {
    return(
      <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ul>
        </nav>
    );
  }
}

class Text extends Component {
  render() {
    return(
      <article>
            <h2>HTML</h2>
            HTML is hypertext markup language.
      </article>
    )
  }
}

class App extends Component { //Component를 만드는 코드
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <Index></Index>
        <Text></Text>
      </div>
    );
  }//자바스크립트와 비슷하지만 자바스크립트가 아니다(jsx)
}

export default App;
