import '../../assets/css/contact/contact.css'
import {IoHomeOutline} from 'react-icons/io5'
import {BsArrowLeft} from 'react-icons/bs'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import {RiWhatsappFill} from 'react-icons/ri'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
const Index = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
},[])
const [Form,setForm] = useState({})

const handleChange = (e)=>{
    const {name,value} = e.target
    setForm({...Form,[name]:value});
}

const RegisterValidForm = !Form.fullname?.length 
    || !Form.email?.length 
    || !Form.phonenumber?.length
    || Form.phonenumber.length > 12
    || !Form.message?.length
    
const submitContact =()=>{
    setForm({...Form,'fullname':'','email':'','phonenumber':'','message':'','company':''});
    Swal.fire({
        title: 'Success',
        text: 'Message successfully submitted..A feedback will be provided shortly.',
        icon: 'success',
        confirmButtonText: 'Thank you'
      })
}
    
const chat = ()=>{

}
    return (
        <div className="contactIndex">
            <div className='whatsappIcon'>
                    <a href="https://wa.me/2348088213177" target="_blank"><RiWhatsappFill size={50} style={{cursor:'pointer'}} color="#25D366"  /></a>
                </div>
            <div className='heroContact'>
                
                    <div className='cardContact'>
                        <div className='iconHome'>
                            <div className='homeDiv'>
                                <IoHomeOutline  size="30" color='#4bb543' style={{cursor:'pointer'}} data-aos="fade-up" />
                            </div>
                            <Link to='/' className='hide'>
                                <div className='backDiv '>
                                    <BsArrowLeft size="25" color="#4bb543" data-aos="fade-left"  data-aos-duration="4000"/>
                                </div>
                            </Link>
                            
                        </div>
                        <div className='say_hello'>Contact Us</div>
                        <div className='question'>Do you have any question ? Drop us a message.</div>
                        <div className='forms'>
                            
                            <div className='formDiv'>

                                <div className='form-group'>
                                    <TextField id="filled-basic" label="Full name *" value={Form.fullname || ''}  onChange={handleChange} name='fullname' variant="filled" className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <TextField required id="filled-basic" label="Email" value={Form.email || ''}  onChange={handleChange} name='email' variant="filled" className='form-control' />
                                </div>
                            </div>

                            <div className='formDiv'>

                                <div className='form-group'>
                                    <TextField id="filled-basic" label="Phone number *" value={Form.phonenumber || ''}  onChange={handleChange} name="phonenumber" variant="filled" className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <TextField id="filled-basic" label="Company" onChange={handleChange} name="company" variant="filled" className='form-control' value={Form.company || ''}  />
                                </div>
                            </div>
                            <div className='formDiv'>

                                <div className='form-group'>
                                    <TextField id="filled-basic" 
                                        label="Message *"
                                        multiline
                                        rows={5}
                                        variant="filled"
                                        value={Form.message || ''} 
                                        className='form-control' name="message" onChange={handleChange} />
                                </div>
                                
                            </div>
                            <div className='formDiv'>

                                <div className='form-group'>
                                    <Button fullWidth variant="contained" disabled={RegisterValidForm} style={{backgroundColor:'#1c1c93',height:50}} onClick={()=>{submitContact()}} >Send Message</Button>
                                </div>
                                
                            </div>

                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Index