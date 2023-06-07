import React, { Component } from "react";

import '../Styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


class Footer extends Component{
  render(){
return(
<section className="footer">
  <section className = "socialMedia"> 
  <p>&copy; 2023 Diane Bada</p>

    <InstagramIcon/>
    <FacebookIcon/>
    <TwitterIcon/>
  </section>

</section>
);
  }
}

export default Footer