import Hero from '../../layout/HeroOthers'
import Aboutuslayout from '../../layout/AboutUs'
import Footer from '../../component/Footer'
import Header from '../../component/header'
import { useEffect, useState } from 'react'
const Index = ()=>{
    const [scroll,setscrollPosition] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setscrollPosition(window.pageYOffset)
        
        // getscroll(position) 
    };
    
    useEffect(()=>{
        window.scrollTo(0,0)
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    return (
        <div className="Home">
            <Header scroll={5}/>
            <Hero title="About Us"/>
            <Aboutuslayout/>
            <Footer/>
        
            
        </div>
    )
}
export default Index;