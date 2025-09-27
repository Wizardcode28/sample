import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
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
        px: 3,
        fontFamily: 'Tektur, sans-serif',
        fontWeight: 500,
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
          <Grid item xs={12} lg={8} sx={{width: '100%'}} >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '@media (min-width:912px)': {
                  flexDirection: 'row',
                },
                justifyContent: { xs: 'center', md: 'center' },
                alignItems: 'flex-start',
                gap: { xs: 4, md: 15 }
              }}
            >
              <Box sx={{ textAlign: 'left' }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    textAlign: 'left',
                    fontSize: '2.5rem',
                    color: '#ea580c',
                    fontWeight: 500,
                    fontFamily: 'Tektur, sans-serif',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    },
                    display: 'block'
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
                    <Phone sx={{ color: '#ea580c', fontSize: '2.1875rem' }} />
                    <Box>
                      <Box sx={{
                        display: { xs: 'block', sm: 'flex' },
                        alignItems: 'center',
                        gap: { sm: 3 },
                        color: '#b5b5b6',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#ea580c',
                        }
                      }}>
                        <Typography variant="body2" sx={{
                          fontSize: '0.9rem',
                          fontFamily: 'Tektur, sans-serif',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                          minWidth: { sm: '8.5rem' }
                        }}>
                          Sanjana Malani
                        </Typography>
                        <Link href="tel:+917691929205" sx={{ textDecoration: 'none', color: 'inherit' }}>
                          <Typography variant="body2" sx={{
                            fontSize: '0.9rem',
                            fontFamily: 'Tektur, sans-serif',
                            fontWeight: 500,
                            whiteSpace: 'nowrap'
                          }}>
                            +91 7691929205
                          </Typography>
                        </Link>
                      </Box>

                      <Box sx={{
                        mt: { xs: 1, md: 2 },
                        display: { xs: 'block', sm: 'flex' },
                        alignItems: 'center',
                        gap: { sm: 3 },
                        color: '#b5b5b6',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#ea580c',
                        }
                      }}>
                        <Typography variant="body2" sx={{
                          fontSize: '0.9rem',
                          fontFamily: 'Tektur, sans-serif',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                          minWidth: { sm: '8.5rem' }
                        }}>
                          Tanishq Dinkar
                        </Typography>
                        <Link href="tel:+919109896779" sx={{ textDecoration: 'none', color: 'inherit' }}>
                          <Typography variant="body2" sx={{
                            fontSize: '0.9rem',
                            fontFamily: 'Tektur, sans-serif',
                            fontWeight: 500,
                            whiteSpace: 'nowrap'
                          }}>
                            +91 9109896779
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    spacing={{ xs: 2, md: 3 }}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    <LocationOn sx={{ color: '#ea580c', fontSize: '2.1875rem', mt: 0.5 }} />
                    <Link
                      href="https://maps.app.goo.gl/ZERHwrJJcutMMMig8"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{cursor:'pointer', textDecoration:'none'}}
                    >
                      <Typography variant="body2" sx={{
                        fontSize: '0.9rem',
                        color: '#b5b5b6',
                        fontFamily: 'Tektur, sans-serif',
                        fontWeight: 500,
                        transition: 'color 0.3s ease',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          color: '#ea580c',
                        }
                      }}>
                        Maulana Azad National Institute<br />
                        Of Technology Bhopal, 462003 (M.P.)
                      </Typography>
                    </Link>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{ xs: 2, md: 3 }}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    <Email sx={{ color: '#ea580c', fontSize: '2.1875rem' }} />
                    <Link href="mailto:istescmanit@gmail.com" sx={{cursor:'pointer', textDecoration:'none'}}>
                      <Typography variant="body2" sx={{
                        cursor: 'pointer',
                          fontSize: '0.9rem',
                          color: '#b5b5b6',
                          fontFamily: 'Tektur, sans-serif',
                          fontWeight: 500,
                          transition: 'color 0.3s ease',
                          whiteSpace: 'nowrap',
                          '&:hover': {
                            color: '#ea580c',
                          }
                        }}>
                        istescmanit@gmail.com
                      </Typography>
                    </Link>
                  </Stack>
                </Stack>
              </Box>

              <Box
                sx={{
                  width: '1px',
                  height: '15rem',
                  marginTop: '3.4375rem',
                  backgroundColor: '#7a7a7a',
                  display: 'none',
                  '@media (min-width:912px)': {
                    display: 'flex',
                  }
                }}
              />

              <Box sx={{ textAlign: 'left', }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    color: '#ea580c',
                    fontWeight: 500,
                    fontFamily: 'Tektur, sans-serif',
                    textAlign: 'left',
                    fontSize: '2.5rem',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    },
                    whiteSpace: 'nowrap'
                  }}
                >
                  Social Links
                </Typography>
                <Stack spacing={{ xs: 2, md: 5 }}>
                  <Link
                    href="https://www.instagram.com/istemanit/"
                    underline="none"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
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
                        width: '2.1875rem',
                        height: '2.1875rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <Instagram className="icon-default" sx={{ color: '#ea580c', fontSize: '2.5rem' }} />
                      <Box
                        component="img"
                        className="icon-hover"
                        src="/Images/instagram.png"
                        alt="Instagram Logo"
                        sx={{
                          width: '2.1875rem',
                          height: '2.1875rem',
                          display: 'none',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                    <Typography className='social-text' variant="body2" sx={{
                      fontSize: '1.25rem',
                      color: '#b5b5b6',
                      fontFamily: 'Tektur, sans-serif',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}>
                      Instagram
                    </Typography>
                  </Link>
                  <Link
                    href="https://www.facebook.com/ISTESCMANIT"
                    underline="none"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
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
                        width: '2.0625rem',
                        height: '2.0625rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <Facebook className="icon-default" sx={{ color: '#ea580c', fontSize: '2.5rem' }} />
                      <Box
                        component="img"
                        className="icon-hover"
                        src="/Images/facebook.svg"
                        alt="Facebook Logo"
                        sx={{
                          width: '2.0625rem',
                          height: '2.0625rem',
                          display: 'none',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                    <Typography className='social-text' variant="body2" sx={{
                      fontSize: '1.25rem',
                      color: '#b5b5b6',
                      fontFamily: 'Tektur, sans-serif',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}>
                      Facebook
                    </Typography>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/iste-sc-manit/"
                    underline="none"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
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
                        width: '2.8125rem',
                        height: '2.8125rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <LinkedInIcon className="icon-default" sx={{ color: '#ea580c', fontSize: '2.8125rem', marginLeft: {md: '-0.53125rem', xs: '-0.625rem'} }} />
                      <Box
                        component="img"
                        className="icon-hover"
                        src="/Images/linkedin.svg"
                        alt="LinkedIn Logo"
                        sx={{
                          width: '2.8125rem',
                          height: '2.8125rem',
                          display: 'none',
                          objectFit: 'contain',
                          marginLeft: {md: '-0.75rem', xs: '-0.84375rem'}
                        }}
                      />
                    </Box>
                    <Typography className="social-text" variant="body2" sx={{
                      fontSize: '1.25rem',
                      color: '#b5b5b6',
                      fontFamily: 'Tektur, sans-serif',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}>
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
      <Container sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: {xs:'2rem', md: '20rem'},
        marginTop: '1rem',
        textAlign: 'center'
      }}>
        <Link
          href="https://devfolio.co/code-of-conduct"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            color: '#b5b5b6',
            '&:hover': {color: '#ea580c'},
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
            fontFamily: 'Tektur, sans-serif',
            fontWeight: 500,
            whiteSpace: 'nowrap'
          }}
        >
          Code Of Conduct Devfolio
        </Link>
        <Link
          href="https://version-beta-main.vercel.app/Images/VBrulebook-2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            color: '#b5b5b6',
            '&:hover': {color: '#ea580c'},
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
            fontFamily: 'Tektur, sans-serif',
            fontWeight: 500,
            whiteSpace: 'nowrap'
          }}
        >
          Rulebook
        </Link>
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
      <Typography variant="caption" align="center" sx={{
        mt: 4,
        display: 'block',
        color: '#b5b5b6',
        fontSize: '1rem',
        fontFamily: 'Tektur, sans-serif',
        fontWeight: 500,
      }}>
        Copyright © 2025 by <Link
          href="https://www.istemanit.in/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            fontFamily: 'Tektur, sans-serif',
            fontWeight: 500,
            color: 'inherit'
          }}
        >ISTE SC MANIT</Link> . All rights reserved.
      </Typography>
    </Box>
  );
}