import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SignatureCanvas from 'react-signature-canvas';

function App() {


  const [sign, setSign] = useState<SignatureCanvas | null>(null);
  const [base64Sign, setBase64Sign] = useState<string | null>(null);

  const clear = () => {
    if (sign) {
      sign.clear()
    }

  }

  const trim = () => {

    //set base64 signature
    if (sign) {
      setBase64Sign(sign.getTrimmedCanvas().toDataURL('image/png'));
    }

  }

  //get REF from SignatureCanvas
  const getSignFromCanvas = (ref: any) => {
    setSign(ref);
  }


  return (
    <>
      <div className="App">
        <SignatureCanvas
          penColor='green'
          canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
          ref={(ref: SignatureCanvas | null) => { getSignFromCanvas(ref) }} />

        <input type="button" name='trim' value="trim" onClick={trim}></input>
      </div>
      <div>
        {base64Sign}
      </div>
    </>

  );
}

export default App;
