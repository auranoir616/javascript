import React from 'react';
import Content from './Component/Content';
import Header from './Component/Header';
import {NativeBaseProvider} from 'native-base'
function App() {
return(
    <NativeBaseProvider>
<Header />
<Content/>
 
    </NativeBaseProvider>


)}

export default App;
