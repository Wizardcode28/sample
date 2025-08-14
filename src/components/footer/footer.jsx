import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Avatar,
  Stack
} from '@mui/material';
import {
  Phone,
  LocationOn,
  Email,
  Instagram,
  Facebook,
} from '@mui/icons-material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#09314a',
        color: 'white',
        py: 2,
        px: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{
            px: { xs: 2, sm: 4, md: 10 },
            mt: { xs: 2, md: 6 }
          }}
        >
          
          {/* <Grid item xs={12} lg={4} sx={{width: '100%'}}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Stack 
                direction="row" 
                alignItems="center" 
                spacing={2} 
                sx={{ 
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  mb: 2 
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 100, sm: 140 },
                    height: { xs: 50, sm: 60 },
                    borderRadius: 0,
                    bgcolor: 'transparent'
                  }}
                  alt="ISTE Logo"
                  src="/Images/Logo.svg"
                  variant="square"
                >
                  
                </Avatar>
              </Stack>
              
              <Typography 
                variant="caption" 
                color="#7a7a7a" 
                sx={{ 
                  display: 'block',
                  lineHeight: 1.5,
                  maxWidth: '300px',
                  mx: { xs: 'auto', lg: 0 }
                }}
              >
                BEST STUDENT'S CHAPTER IN MADHYA PRADESH-CHHATTISGARH REGION FROM 3 CONSECUTIVE YEARS
              </Typography>
            </Box>
          </Grid> */}

          <Grid item xs={12} lg={8} sx={{width: '100%'}} >
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                justifyContent: { xs: 'center', md: 'center' }, 
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: { xs: 4, md: 15 }
              }}
            >


              <Box sx={{ textAlign: 'left' }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    textAlign: { xs: 'center', md: 'left' },
                    fontSize: { xs: 28, md: 42 },
                    color: '#ea580c',
                    fontWeight: 600,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  Contact Us
                </Typography>


                <Stack spacing={{ xs: 2, md: 4 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{ xs: 2, md: 3 }}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    <Phone sx={{ color: '#ea580c', fontSize: 35 }} />
                    <Box>
                      <Typography variant="body2" sx={{
                        fontSize: { xs: 13, sm: 16, md: 18 },
                        color: '#b5b5b6',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#ea580c',
                        }
                      }}>
                        Abhinav Rai &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <Link sx={{cursor:'pointer', textDecoration:'none', color:'inherit'}} href="tel:+917909474088"> +91 7909474088 </Link>
                      </Typography>
                      <Typography variant="body2" sx={{
                        fontSize: { xs: 13, sm: 16, md: 18 },
                        color: '#b5b5b6',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#ea580c',
                        }
                      }}>
                        Vanshika Agarwal &nbsp; <Link sx={{cursor:'pointer', textDecoration:'none', color:'inherit' }} href="tel:+919828534432"> +91 9828534432 </Link>
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    spacing={{ xs: 2, md: 3 }}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    <LocationOn sx={{ color: '#ea580c', fontSize: 35, mt: 0.5 }} />
                    <Link href="https://maps.app.goo.gl/ZERHwrJJcutMMMig8" sx={{cursor:'pointer', textDecoration:'none'}}  >
                      <Typography variant="body2" sx={{
                        fontSize: { xs: 13, sm: 16, md: 17 },
                        color: '#b5b5b6',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#ea580c',
                        }
                      }}>
                        Maulana Azad National Institute Of <br></br>
                        Technology Bhopal, 462003 (M.P.)
                      </Typography>

                    </Link>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{ xs: 2, md: 3 }}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    <Email sx={{ color: '#ea580c', fontSize: 35 }} />
                    <Typography variant="body2" sx={{
                      cursor: 'pointer',
                        fontSize: { xs: 13, sm: 16, md: 17 },
                        color: '#b5b5b6',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#ea580c',
                        }
                      }}>
                      istescmanit@gmail.com
                    </Typography>
                  </Stack>
                </Stack>
              </Box>

              <Box
                sx={{
                  width: '1px',
                  height: '240px',
                  marginTop: '55px',
                  backgroundColor: '#7a7a7a',
                  display: { xs: 'none', lg: 'flex', md: 'flex' }
                }}
              />

              <Box sx={{ textAlign: 'left', }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    color: '#ea580c',
                    fontWeight: 600,
                    textAlign: { xs: 'center', md: 'left' },
                    fontSize: { xs: 28, md: 40 },
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  Social Links
                </Typography>


                <Stack spacing={{ xs: 2, md: 5 }}>
                  <Link
                    href="https://www.instagram.com/istemanit/"
                    underline="none"
                    color="inherit"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      justifyContent: 'flex-start',
                      '&:hover .icon-wrapper': {
                        transform: 'scale(1.1)',
                      },
                      '&:hover .icon-default': {
                        display: 'none',
                      },
                      '&:hover .icon-hover': {
                        display: 'inline-block',
                      },
                      '&:hover .social-text': {
                        color: '#ea580c',
                      }
                    }}
                  >

                    <Box
                      className="icon-wrapper"
                      sx={{
                        width: 35,
                        height: 35,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <Instagram className="icon-default" sx={{ color: '#ea580c', fontSize: 40 }} />

                      <Box
                        component="img"
                        className="icon-hover"
                        src="/Images/instagram.png"
                        alt="Instagram Logo"
                        sx={{
                          width: 35,
                          height: 35,
                          display: 'none',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>

                    <Typography className='social-text' variant="body2" sx={{ fontSize: 20, color: '#b5b5b6' }}>
                      Instagram
                    </Typography>
                  </Link>



                  <Link
                    href="https://www.facebook.com/ISTESCMANIT"
                    underline="none"
                    color="inherit"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      justifyContent: 'flex-start',
                      '&:hover .icon-wrapper': {
                        transform: 'scale(1.1)',
                      },
                      '&:hover .icon-default': {
                        display: 'none',
                      },
                      '&:hover .icon-hover': {
                        display: 'inline-block',
                      },
                      '&:hover .social-text': {
                        color: '#ea580c',
                      }
                    }}
                  >
                    <Box
                      className="icon-wrapper"
                      sx={{
                        width: 33,
                        height: 33,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <Facebook className="icon-default" sx={{ color: '#ea580c', fontSize: 40 }} />

                      <Box
                        component="img"
                        className="icon-hover"
                        src="/Images/facebook.svg"
                        alt="Instagram Logo"
                        sx={{
                          width: 33,
                          height: 33,
                          display: 'none',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>

                    <Typography className='social-text' variant="body2" sx={{ fontSize: 20, color: '#b5b5b6' }}>
                      Facebook
                    </Typography>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/iste-sc-manit/"
                    underline="none"
                    color="inherit"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: {md: 2, xs: 1.5},
                      justifyContent: 'flex-start',
                      '&:hover .icon-wrapper': {
                        transform: 'scale(1.1)',
                      },
                      '&:hover .icon-default': {
                        display: 'none',
                      },
                      '&:hover .icon-hover': {
                        display: 'inline-block',
                      },
                      '&:hover .social-text': {
                        color: '#ea580c',
                      }
                    }}
                  >
                    <Box
                      className="icon-wrapper"
                      sx={{
                        width: 45,
                        height: 45,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <LinkedInIcon className="icon-default" sx={{ color: '#ea580c', fontSize: 45, marginLeft: {md: '-8.5px', xs: '-10px'} }} />

                      <Box
                        component="img"
                        className="icon-hover"
                        src="/Images/linkedin.svg"
                        alt="Instagram Logo"
                        sx={{
                          width: 45,
                          height: 45,
                          display: 'none',
                          objectFit: 'contain',
                          marginLeft: {md: '-12px', xs: '-13.5px'}
                        }}
                      />
                    </Box>

                    <Typography className="social-text" variant="body2" sx={{ fontSize: 20, color: '#b5b5b6' }}>
                      LinkedIn
                    </Typography>
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          width: '100%',
          maxWidth: '960px',
          height: '1px',
          margin: '0 auto',
          marginTop: '5rem',
          backgroundColor: '#7a7a7a',
          display: { xs: 'flex', lg: 'flex', md: 'flex' }
        }}
      />

      <Container sx={{ display: 'flex',flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center',alignItems: 'center',gap: {xs:'2rem', md: '20rem'} ,marginTop: '1rem',textAlign: 'center'}}>
        <Link sx={{
          textDecoration: 'none',
          cursor: 'pointer',
          color: '#b5b5b6',
          '&:hover': {color: '#ea580c'},
          fontSize: { xs: '16px', sm: '18px', md: '20px' },
          fontFamily: 'Roboto',
          fontWeight: '600',
          whiteSpace: 'nowrap'
          }}

          href = "https://devfolio.co/code-of-conduct"

        > Code Of Conduct Devfolio </Link>

        <Link sx={{
          textDecoration: 'none',
          cursor: 'pointer',
          color: '#b5b5b6',
          '&:hover': {color: '#ea580c'},
          fontSize: { xs: '16px', sm: '18px', md: '20px' },
          fontFamily: 'Roboto',
          fontWeight: '600',
          whiteSpace: 'nowrap'
          }}
          href = "https://version-beta-main.vercel.app/Images/VBrulebook-2024.pdf"
          
        > Rulebook </Link>
      </Container>
      
      <Box
        sx={{
          width: '100%',
          maxWidth: '960px',
          height: '1px',
          margin: '0 auto',
          marginTop: '1rem',
          backgroundColor: '#7a7a7a',
          display: { xs: 'flex', lg: 'flex', md: 'flex' }
        }}
      />

      <Typography variant="caption" align="center" sx={{ mt: 4, display: 'block', color: '#b5b5b6',fontSize: '16px', fontWeight: '600' }}>
        Copyright © 2025 by  <Link href="https://www.istemanit.in/" sx={{textDecoration: 'none', cursor: 'pointer'}} >ISTE SC MANIT</Link> . All rights reserved.
      </Typography>

    </Box>
    
  );
}