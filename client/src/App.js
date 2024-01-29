import logo from "./logo.svg";
import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

const alanKey = '67a5079be94b4a2b3b5dcf55c5cce49e2e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand:({command, articles}) => {
        if(command === 'newsHeadelines'){
          console.log(articles)
        }
      }
    })
  }, []);
	return (
		<div className='App'>
			<header className='App-header'>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
				/>
				<h1 className='text-4xl font-palanquin'>News at Ease</h1>
			</header>
		</div>
	);
}

export default App;
