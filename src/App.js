import './App.css';
import Home from "./Home/Home"
import Testimonial from './Testimonial/Testimonial';
import Video from "./Video/Video"
import Features from "./Features/Features"
import About from "./About/About"
import Footer from  "./Footer/Footer"
import { Grid } from '@mui/material';

function App() {
  return (
    <>
    <Grid fluid>
      <Home />
       <Video />
      <Testimonial />
      <Features />
      <About />
      <Footer /> 
    </Grid>
    </>
  );
}

export default App;
