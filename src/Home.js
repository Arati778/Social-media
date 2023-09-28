import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useMemo, useState } from "react";
import { Button, Card, CardBody } from 'reactstrap';
import { Text } from '@chakra-ui/react';
import Header from './components/header/Navbar';

function Home() {


  

  return (
    <>
    <Header/>
    <div className='body'>
    <div className="bg" />
        <div className="container" style={{display:'flex'}}>
          <div className="row">
            <div className="col-6 col-lg-12">
              <Card className='card'>
              <CardBody>
              <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                  <div className="mt-3">
                    <h4>John Doe</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">Bhubansewar, India</p>
                    <Button className="btn btn-primary">Enquiry</Button>
                    <Button className="btn btn-outline-primary">Pushup</Button>
                  </div>
                </div>
              </CardBody>                
              </Card>               
              </div>
            </div>
            <hr />
            
        <div className="col-lg-8">
        <Card>
        <CardBody bg='white' margin-left='120px' position='right' display='transperant' w='100%' p={8} color='black'>
        I'm, your go-to professional writer, and I'm here to transform your ideas into engaging, informative, and persuasive words that resonate with your target audience.
        Whether you need compelling blog posts, persuasive sales copy, or polished articles, I've got you covered.
        </CardBody >
        </Card>
            
            </div>
          </div>
          <hr />
          
                </div>
</div>
                
                
    </>
    
    

  );
}

export default Home;

