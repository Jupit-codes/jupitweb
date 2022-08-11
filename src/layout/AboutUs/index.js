import '../../assets/css/aboutus/aboutus.css'
import about1 from '../../assets/images/about1.png'
import googleplay from '../../assets/images/googleplay.svg'
import image1 from '../../assets/images/1.jpg'
import image4 from '../../assets/images/4.jpg'
import image5 from '../../assets/images/5.jpg'
import favicon from '../../assets/images/favicon.svg'
const Index = ()=>{
    return (
        <div className="aboutus">
           
            <div className='whoweare'>
                <div>
                    <div className='title'>
                        <div>Who we are?</div>
                        <small>who we are @ jupit.</small>
                    </div>
                    
                    <p>
                        We're all about simplifying your daily exchange.<br/>
                        Beyond operating a secure channel, we're dedicated to providing you with the best service,
                        with a focus on dependability matched with satisfaction.
                    </p>
                </div>
                <div>
                    <img src={about1}/>
                </div>

            </div>
            <div className='achievement'>
                <div>
                    <div>1,578</div>
                    <div>Users</div>
                </div>
                <div>
                    <div>1,200,578</div>
                    <div>Asset Crypto</div>
                </div>
                <div>
                    <div>1,500,578</div>
                    <div>Asset Fiat</div>
                </div>
                <div>
                    <div>1,500,578</div>
                    <div>Assets</div>
                </div>
            </div>


            <div className='ourmission'>
                    <div>
                            <div className="mtitle">OUR MISSION</div>
                            <div className='msubtext'>Jupit Mission Statement</div>
                    </div>
                    <div className='aboutPlatform'>
                        <div>Our platform is intended mainly to simplify your daily exchange in a most reliable and secured way.</div>
                    </div>
               
            </div>

            <div className='ourmission'>
                    <div>
                            <div className="mtitle">OUR VISION</div>
                            <div className='msubtext'>Jupit Vision Statement</div>
                    </div>
                    <div className='aboutPlatformII'>
                        <div>Our vision is to advance the use of borderless currency within the Africa communities. We want to make sure anyone and everyone who wants to engage in borderless payments gets prompt and clear access in their transactions.</div>
                    </div>
               
            </div>
            <div className='ceopunditDiv'>
                <div className='Opacity'></div>
                <div className='ceopundit'>
                    <div className='ceopunditdiv1'>
                        <div>CEO PUNDIT</div>
                        <small>Get ready to start an interesting journey.</small>
                        <small>Our services and simplicity will aid you walk through the world of crytoexchange.</small>
                    </div>
                    <div className='ceopunditdiv2'>
                        <img src={googleplay}/>
                    </div>
                </div>
                
            </div>

            <div className='crew'>
                        <div>
                            <div className="mtitle">OUR SQUAD</div>
                            <div className='msubtext'>Our Awesome Team</div>
                        </div>
                        <div className='teamDiv'>
                                <div className='teammember'>
                                    <div>
                                        <img src={image1}/>
                                    </div>
                                    <div className='teambody'>
                                        <div className='teamdescription'>
                                        <div className='circleDetails'>
                                                <div>
                                                    Femi A. Somoye.
                                                </div>
                                                <div>
                                                    Business Manager.
                                                </div>
                                            </div>
                                            <div className='circle'>
                                                <img src={favicon} className="fav"/>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className='teammember'>
                                    <div>
                                        <img src={image4}/>
                                    </div>
                                    <div className='teambody'>
                                        <div className='teamdescription'>
                                            <div className='circleDetails'>
                                                <div>
                                                    Ejire Sylvester.
                                                </div>
                                                <div>
                                                   Finance Manager
                                                </div>
                                            </div>
                                            <div className='circle'>
                                                <img src={favicon} className="fav"/>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className='teammember'>
                                    <div>
                                        <img src={image5}/>
                                    </div>
                                    <div className='teambody'>
                                        <div className='teamdescription'>
                                            <div className='circleDetails'>
                                                <div>
                                                    Oladimeji  Qazeem.
                                                </div>
                                                <div>
                                                   Operation Manager
                                                </div>
                                            </div>
                                            <div className='circle'>
                                                <img src={favicon} className="fav"/>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className='teammember'>
                                    <div>
                                        <img src={image5}/>
                                    </div>
                                    <div className='teambody'>
                                        <div className='teamdescription'>
                                            <div className='circleDetails'>
                                                <div>
                                                    Peace  Oriola.
                                                </div>
                                                <div>
                                                   Brand Specialist.
                                                </div>
                                            </div>
                                            <div className='circle'>
                                                <img src={favicon} className="fav"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                  
                                   
                                </div>
                                <div className='teammember'>
                                    <div>
                                        <img src={image5}/>
                                    </div>
                                    <div className='teambody'>
                                        <div className='teamdescription'>
                                            <div className='circleDetails'>
                                                <div>
                                                    Temiloluwa  Vincent.
                                                </div>
                                                <div>
                                                   Software Developer.
                                                </div>
                                            </div>
                                            <div className='circle'>
                                                <img src={favicon} className="fav"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                  
                                   
                                </div>
                              
                        </div>

            </div>

            
        </div>
    )
}

export default Index;