import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes';
import MetaTags from 'react-meta-tags'


function App() {
  return (
    <div className="App">
                  <MetaTags>
                    <title>RianDev</title>
                    <meta name="description" content="Site Portfólio criado para mostrar alguma das minhas habilidades em programação."/>

                    <meta itemprop="name" content="RianDev"/>
                    <meta itemprop="description" content="Site Portfólio criado para mostrar alguma das minhas habilidades em programação."/>
                    <meta itemprop="image" content="https://i.pinimg.com/originals/0e/79/8f/0e798f91138755ce7386df586f6feb3b.gif"/>
                </MetaTags>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
