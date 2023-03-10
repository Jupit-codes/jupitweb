import '../../assets/css/Footer/footer.css'
import backgroundFooter from '../../assets/images/BackgroundFooter.svg'
//import footerLogo from '../../assets/images/footerlogo.svg'
import footerLogo from '../../assets/images/jupit_white.svg'
import blogpost1 from '../../assets/images/blogpost1.png'
import blogpost2 from '../../assets/images/blogpost2.png'
import blogpost3 from '../../assets/images/blogpost3.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import facebook from '../../assets/images/facebook.png'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
const Index= ()=>{
    return (
        <div className="my_footer">
            <div className='footerContent'>
                <div className='userCount'>3,620 </div>
                <div className='userText'>Users & Still Counting</div>

                <div className='whatareyou'>What are you waiting for?</div>
                <a href='https://app.jupitapp.co/client/signin' target="_blank" style={{textDecoration:'none'}}>
                    <div className='footerBtn'>Get Started</div>
                </a>

                <div className='footerInfor'>
                        <div className='footerlogoarea'>
                            <div className='logoReal'>
                                <img src={footerLogo} className="footerlogo"/>
                                <small>...simplifying exchange</small>
                            </div>
                            <div className='QuickLink'>Quick Link</div>
                            <div className='linkParent'>
                                <div className='link'>
                                    <div>
                                        <div className='titleLink'>Company</div>
                                       
                                        <div> <Link to='/aboutus' style={{textDecoration:'none',color:'#fff'}}>About Us</Link></div>
                                        <div> <Link to='/contact' style={{textDecoration:'none',color:'#fff',cursor:'pointer'}}>Contact Us</Link></div>
                                        
                                    </div>
                                    <div>
                                        <div className='titleLink'>Product</div>
                                        <div><Link to="/our-cryptoasset" style={{textDecoration:'none',color:'#fff'}}>Bitcoin</Link></div>
                                        <div><Link to="/our-cryptoasset" style={{textDecoration:'none',color:'#fff'}}>Usdt</Link></div>
                                        <div><Link to="/our-giftcard" style={{textDecoration:'none',color:'#fff'}}>Gift Card</Link></div>
                                        <div><Link to="/otc" style={{textDecoration:'none',color:'#fff'}}>OTC</Link></div>
                                        
                                    </div>
                                    <div>
                                        <div className='titleLink'>Legal</div>
                                        <div><Link to='/terms-of-service' style={{textDecoration:'none',color:'#fff'}}>Terms Of Service</Link></div>
                                        <div><Link to='/privacy-policy'style={{textDecoration:'none',color:'#fff'}}>Privacy Policy</Link></div>
                                        <div><Link to='/aml-policy'style={{textDecoration:'none',color:'#fff'}}>Anti-Money laundering Policy</Link></div>
                                        
                                    </div>
                                    
                                    <div className='resources'>
                                        <div className='titleLink'>Resources</div>
                                        <div><Link to='/blog' style={{textDecoration:'none',color:'#fff'}}>Blog</Link></div>
                                        <div><Link to='/faq' style={{textDecoration:'none',color:'#fff'}}>FAQ</Link></div>
                                        
                                    </div>
                                
                                </div>
                                <div className='supportParent'>
                                    <div className='support' style={{marginTop:20}}><a href="malito:support@jupitapp.co" style={{color:"#fff",textDecoration:"none"}}>support@jupitapp.co</a></div>
                                    <div><a href="tel:+2348028651917" style={{color:"#fff",textDecoration:"none"}}>+2348028651917</a></div>
                                    <div className='socialmedia'>
                                        <img src={facebook} className="socialmedia-img"/>
                                        <img src={twitter} className="socialmedia-img"/>
                                        <img src={instagram} className="socialmedia-img"/>
                                    </div>
                                    <div className='reserved'>@ 2022 Jupit | All Right Reserved. </div>
                                </div>

                            </div>
                            
                        </div>

                        
                        
                </div>
                   
            
            </div>
           
            
        </div>
    )
}

export default Index;