import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [results, setResults] = useState(null);
  const [catetoOne, setCatetoOne] = useState(null);
  const [catetoTwo, setCatetoTwo] = useState(null);

  const getMySum = async () => {
    setResults('Acessando API')
    const getApiValue = await fetch(`http://localhost:5000/api?n1=${catetoOne}&n2=${catetoTwo}`)
                              .then(myJson => myJson.json()
                              .then(result => {
                                console.log(result.sum)
                                const jsonToString = JSON.stringify(result.sum);
                                setResults(jsonToString)
                              }))
                              .catch(err => { console.log(err) });
  }

  const insertDigit = (key) => {
    const myElementId = key.target.className;
    console.log(myElementId)
  }

  const resetDisplays = () => {
    // Armazenamento Hipotenusa
    // Armazenamento Cateto 1
    setCatetoOne( )
    // Armazenamento Cateto 2
    setCatetoTwo( )
    
  }

  const getCateto1 = (ev) => {
    setCatetoOne(ev.target.value)
  }

  const getCateto2 = (ev) => {
    setCatetoTwo(ev.target.value)
  }

  return (
    <>
      <div className="calculadora">
        {/* Display */}
        <div className="display">
          <input type="text" name="1.000,00" className="display-calculadora" id="display-calculadora" placeholder="Valor Hipotenusa" value={ results } disabled />
        </div>
        {/* Display Valor Um */}
        <div className="display-valor-1">
          <input type="text" className="display-cateto-one" placeholder="Cateto 1" onFocus={insertDigit} value={catetoOne}/>
        </div>
        {/* Display Valor Dois */}
        <div className="display-valor-2">
          <input type="text" className="display-cateto-two" placeholder="Cateto 2" onFocus={insertDigit} value={catetoTwo}/>
        </div>
        {/* Teclado */}
        <div className="teclado">
          <button type="button" className="btn-number">0</button>
          <button type="button" className="btn-number">1</button>
          <button type="button" className="btn-number">2</button>
          <button type="button" className="btn-number">3</button>
          <button type="button" className="btn-number">4</button>
          <button type="button" className="btn-number">5</button>
          <button type="button" className="btn-number">6</button>
          <button type="button" className="btn-number">7</button>
          <button type="button" className="btn-number">8</button>
          <button type="button" className="btn-number">9</button>
          <button type="button" className="btn-number">.</button>
          <button type="button" className="btn-number">,</button>
        </div>
        {/* Opções */}
        <div className="opcoes">
          {/* Botão Calcular */}
          <div className="opcoes-calcular">
            <button type="button" className="btn-calcular" onClick={ getMySum }>CALCULAR</button>
          </div>
          {/* Botão Resetar */}
          <div className="opcoes-resetar">
            <button type="button" className="btn-resetar" onClick={ resetDisplays }>RESETAR</button>
          </div>
        </div>
      </div>
      {catetoOne}
      {catetoTwo}
    </>
  );
};

export default App;
