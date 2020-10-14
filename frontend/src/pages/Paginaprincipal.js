import React from 'react';
import Header from '../components/Header';
import Pp from '../components/Pp';
import Card from '../components/Card';
import Inicio from '../components/Inicio'

import Card2 from '../components/Pc/Card2'
import Pc from '../components/Pc/Pc'

import Acercade from '../components/Acercade'
import Zp1 from '../components/Zp1'
import Zp2 from '../components/Zp2'
import Zp3 from '../components/Zp3'

import Zc1 from '../components/Zc1'
import Zc2 from '../components/Zc2'
import Zc3 from '../components/Zc3'
    const Paginaprincipal = () =>{
        return(
            <>
            <Header/>
            <Inicio/>
            <Header />
            <Pp /> 
            <Card /> 
         
           
               <Pc/>
             {/* <Footer /> */}
             <Card2/>
             <Header/>
             <Acercade/> 

             <Header/>
             <Zp1/> 

             <Header/>
             <Zp2/> 

             <Header/>
             <Zp3/> 

             <Header/>
             <Zc1/> 

             <Header/>
             <Zc2/> 

             <Header/>
             <Zc3/> 
            </>
        )
    }

export default Paginaprincipal;