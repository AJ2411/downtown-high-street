"use client"
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
//import "bootstrap-icons/font/bootstrap-icons.min.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Button from 'react-bootstrap/Button';


export default function App() {
  return (
    <>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
        <Button variant="primary"><i class="bi bi-facebook"></i></Button>{'  '}
        <Button variant="danger"><i class="bi bi-instagram"></i></Button>{'  '}
        <Button variant="primary"><i class="bi bi-twitter"></i></Button>{'  '}
        <Button variant="danger"><i class="bi bi-google"></i></Button>{'  '}
        <Button variant="success"><i class="bi bi-whatsapp "></i></Button>{'  '}
        <Button variant="info"><i class="bi bi-meta "></i></Button>{'  '}
        <Button variant="danger"><i class="bi bi-youtube "></i></Button>{'  '}

        </div>     
    
     </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-0'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Downtown infra group
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                 Smartphones
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laptops
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Fragrances
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Skincare
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                BANER, BN 10012, PUNE INDIA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          DIGBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </>
  );
}