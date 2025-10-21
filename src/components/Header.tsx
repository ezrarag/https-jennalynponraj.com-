'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Button, 
  Box, 
  Dialog, 
  DialogContent, 
  IconButton, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Stack,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { gsap } from 'gsap'
import { bioContent, actingVideos, musicContent, voSamples, writingPieces, newsPressArticles, magazineSpread } from '@/data/sections'

const Header = () => {
  const [openOverlay, setOpenOverlay] = useState<string | null>(null)
  const [bioView, setBioView] = useState<'bio' | 'news' | 'magazine'>('bio')
  const [isVisible, setIsVisible] = useState(true)
  const headerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.15], [0, 1, 0.8])
  const blur = useTransform(scrollYProgress, [0, 0.1], [0, 10])
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -10])

  const menuItems = [
    { name: 'Bio', href: '#bio', id: 'bio' },
    { name: 'Acting', href: '#acting', id: 'acting' },
    { name: 'Music', href: '#music', id: 'music' },
    { name: 'VO', href: '#voice', id: 'voice' },
    { name: 'Writing', href: '#writing', id: 'writing' }
  ]

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        }
      )
    }
  }, [])

  // GSAP animation for dialog content
  useEffect(() => {
    if (openOverlay) {
      gsap.fromTo(`.overlay-content-${openOverlay} *`, 
        { y: 20, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.05, 
          ease: "power2.out" 
        }
      )
    }
  }, [openOverlay])

  const handleOverlayOpen = (itemId: string) => {
    setOpenOverlay(itemId)
    if (itemId === 'bio') {
      setBioView('bio')
    }
  }
  const handleOverlayClose = () => setOpenOverlay(null)

  const renderSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'bio':
        return (
          <Box>
            {/* Toggle Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Button
                onClick={() => setBioView('bio')}
                sx={{
                  color: bioView === 'bio' ? 'white' : 'rgba(255,255,255,0.6)',
                  borderBottom: bioView === 'bio' ? '2px solid white' : '2px solid transparent',
                  borderRadius: 0,
                  padding: '8px 24px',
                  fontSize: '1.1rem',
                  fontWeight: bioView === 'bio' ? 600 : 300,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'white'
                  }
                }}
              >
                Bio
              </Button>
              <Button
                onClick={() => setBioView('news')}
                sx={{
                  color: bioView === 'news' ? 'white' : 'rgba(255,255,255,0.6)',
                  borderBottom: bioView === 'news' ? '2px solid white' : '2px solid transparent',
                  borderRadius: 0,
                  padding: '8px 24px',
                  fontSize: '1.1rem',
                  fontWeight: bioView === 'news' ? 600 : 300,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'white'
                  }
                }}
              >
                News + Press
              </Button>
              <Button
                onClick={() => setBioView('magazine')}
                sx={{
                  color: bioView === 'magazine' ? 'white' : 'rgba(255,255,255,0.6)',
                  borderBottom: bioView === 'magazine' ? '2px solid white' : '2px solid transparent',
                  borderRadius: 0,
                  padding: '8px 24px',
                  fontSize: '1.1rem',
                  fontWeight: bioView === 'magazine' ? 600 : 300,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'white'
                  }
                }}
              >
                Magazine Spread
              </Button>
            </Box>

            {/* Content Area with Framer Motion */}
            <Box sx={{ position: 'relative', minHeight: '400px' }}>
              <AnimatePresence mode="wait">
                {bioView === 'bio' && (
                  <motion.div
                    key="bio"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Grid container spacing={4} alignItems="center">
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                          component="img"
                          src="/bio.jpg"
                          alt="Jennalyn portrait"
                          sx={{ 
                            width: '100%', 
                            borderRadius: 2,
                            maxWidth: 300,
                            margin: '0 auto',
                            display: 'block'
                          }}
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 3 }}>
                          {bioContent.title}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: 'rgba(255,255,255,0.9)', 
                            fontStyle: 'italic',
                            mb: 3,
                            fontSize: '1.25rem'
                          }}
                        >
                          "{bioContent.pullQuote}"
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: 'rgba(255,255,255,0.8)', 
                            lineHeight: 1.8,
                            fontSize: '1.1rem'
                          }}
                        >
                          {bioContent.content}
                        </Typography>
                        
                        {/* Subtle News + Press Link */}
                        <Box sx={{ mt: 3, opacity: 0.3, transition: 'opacity 0.3s ease' }}>
                          <Button
                            onClick={() => setBioView('news')}
                            sx={{
                              color: 'rgba(255,255,255,0.4)',
                              fontSize: '0.9rem',
                              textTransform: 'none',
                              padding: '4px 8px',
                              '&:hover': {
                                backgroundColor: 'transparent',
                                color: 'rgba(255,255,255,0.7)',
                                opacity: 1
                              }
                            }}
                          >
                            View News + Press →
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </motion.div>
                )}
                
                {bioView === 'news' && (
                  <motion.div
                    key="news"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4, textAlign: 'center' }}>
                        News + Press
                      </Typography>
                      <Box sx={{ 
                        maxHeight: '60vh', 
                        overflowY: 'auto',
                        paddingRight: '8px',
                        '&::-webkit-scrollbar': {
                          width: '6px',
                        },
                        '&::-webkit-scrollbar-track': {
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: '3px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                          background: 'rgba(255,255,255,0.3)',
                          borderRadius: '3px',
                          '&:hover': {
                            background: 'rgba(255,255,255,0.5)',
                          },
                        },
                      }}>
                        <Grid container spacing={3}>
                          {newsPressArticles.map((article, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                              >
                                <Card sx={{ 
                                  background: 'rgba(255,255,255,0.05)', 
                                  borderRadius: 2,
                                  border: '1px solid rgba(255,255,255,0.1)',
                                  height: '100%',
                                  display: 'flex',
                                  flexDirection: 'column'
                                }}>
                                  <Box
                                    component="img"
                                    src={article.image}
                                    alt={article.title}
                                    sx={{ 
                                      width: '100%', 
                                      height: 200,
                                      objectFit: 'cover',
                                      borderRadius: '8px 8px 0 0'
                                    }}
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none'
                                    }}
                                  />
                                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h6" sx={{ color: 'white', mb: 1, fontSize: '1rem', lineHeight: 1.3 }}>
                                      {article.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, fontSize: '0.85rem' }}>
                                      Read full article on {article.source}.
                                    </Typography>
                                    <Button 
                                      variant="outlined" 
                                      size="small"
                                      href={article.readMore}
                                      sx={{
                                        color: 'white',
                                        borderColor: 'rgba(255,255,255,0.3)',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        mt: 'auto',
                                        '&:hover': {
                                          borderColor: 'white',
                                          backgroundColor: 'rgba(255,255,255,0.1)'
                                        }
                                      }}
                                    >
                                      READ MORE
                                    </Button>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                      
                      {/* Blur overlay at bottom */}
                      <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60px',
                        background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))',
                        backdropFilter: 'blur(8px)',
                        pointerEvents: 'none',
                        zIndex: 1,
                        borderRadius: '0 0 8px 8px'
                      }} />
                    </Box>
                  </motion.div>
                )}
                
                {bioView === 'magazine' && (
                  <motion.div
                    key="magazine"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Box>
                      <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 2, textAlign: 'center' }}>
                        {magazineSpread.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, textAlign: 'center', fontSize: '0.9rem' }}>
                        {magazineSpread.subtitle}
                      </Typography>
                      
                      {/* Magazine Gallery */}
                      <Grid container spacing={2}>
                        {magazineSpread.images.map((image, index) => (
                          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={image.id}>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                              <Card sx={{ 
                                background: 'rgba(255,255,255,0.05)', 
                                borderRadius: 2,
                                border: '1px solid rgba(255,255,255,0.1)',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                  transform: 'scale(1.02)',
                                  boxShadow: '0 8px 32px rgba(255,255,255,0.1)'
                                }
                              }}>
                                <Box
                                  component="img"
                                  src={image.src}
                                  alt={image.alt}
                                  sx={{ 
                                    width: '100%', 
                                    height: 200,
                                    objectFit: 'cover',
                                    transition: 'filter 0.3s ease',
                                    '&:hover': {
                                      filter: 'brightness(1.1)'
                                    }
                                  }}
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none'
                                  }}
                                />
                                <CardContent sx={{ padding: '8px 12px' }}>
                                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem' }}>
                                    {image.description}
                                  </Typography>
                                </CardContent>
                              </Card>
                            </motion.div>
                          </Grid>
                        ))}
                      </Grid>
                      
                      {/* Download Links */}
                      <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                          <Button 
                            variant="outlined"
                            href={magazineSpread.downloadLinks.freePDF}
                            target="_blank"
                            sx={{
                              color: 'white',
                              borderColor: 'rgba(255,255,255,0.3)',
                              fontSize: '0.9rem',
                              fontWeight: 'bold',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              padding: '12px 24px',
                              minWidth: '180px',
                              '&:hover': {
                                borderColor: 'white',
                                backgroundColor: 'rgba(255,255,255,0.1)'
                              }
                            }}
                          >
                            Free PDF Download
                          </Button>
                          <Button 
                            variant="contained"
                            href={magazineSpread.downloadLinks.paidVersion}
                            target="_blank"
                            sx={{
                              backgroundColor: 'rgba(255,255,255,0.1)',
                              color: 'white',
                              border: '1px solid rgba(255,255,255,0.3)',
                              fontSize: '0.9rem',
                              fontWeight: 'bold',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              padding: '12px 24px',
                              minWidth: '180px',
                              '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                borderColor: 'white'
                              }
                            }}
                          >
                            Buy Print Issue ($34.80)
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Box>
        )

      case 'acting':
        return (
          <Box>
            <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4 }}>
              Acting
            </Typography>
            <Grid container spacing={3}>
              {actingVideos.map((video, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Card sx={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <CardContent>
                      <Box 
                        component="iframe"
                        src={video.url}
                        title={video.title}
                        sx={{ 
                          width: '100%', 
                          aspectRatio: '16/9', 
                          borderRadius: '8px',
                          mb: 2
                        }}
                      />
                      <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                        {video.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        {video.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )

      case 'music':
        return (
          <Stack spacing={4} alignItems="center">
            <Typography variant="h4" sx={{ color: 'white' }}>
              Music
            </Typography>
            <Box 
              component="img" 
              src={musicContent.albumCover} 
              alt="Album cover"
              sx={{ 
                width: 200, 
                borderRadius: 1,
                border: '2px solid rgba(255,255,255,0.2)'
              }}
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.style.display = 'none'
              }}
            />
            <Typography variant="h5" sx={{ color: 'white', textAlign: 'center' }}>
              {musicContent.albumTitle}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255,255,255,0.8)', 
                textAlign: 'center',
                maxWidth: 400,
                lineHeight: 1.6
              }}
            >
              {musicContent.description}
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
              {musicContent.streamingLinks.map((link, index) => (
                <Button 
                  key={index}
                  variant="outlined" 
                  href={link.url} 
                  target="_blank"
                  sx={{
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.3)',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  {link.platform}
                </Button>
              ))}
            </Stack>
          </Stack>
        )

      case 'voice':
        return (
          <Box>
            <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4 }}>
              Voice Over
            </Typography>
            <List sx={{ maxWidth: 600, margin: '0 auto' }}>
              {voSamples.map((sample, index) => (
                <ListItem key={index} sx={{ mb: 3 }}>
                  <Card sx={{ 
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                        {sample.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                        {sample.description}
                      </Typography>
                      <audio 
                        controls 
                        src={sample.src} 
                        style={{ width: '100%' }}
                        onError={(e) => {
                          // Hide audio element if file doesn't exist
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </CardContent>
                  </Card>
                </ListItem>
              ))}
            </List>
          </Box>
        )

      case 'writing':
        return (
          <Box>
            <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4 }}>
              Writing
            </Typography>
            <Grid container spacing={3}>
              {writingPieces.map((piece, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <Card sx={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.1)',
                    height: '100%'
                  }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                        {piece.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.6)', 
                          mb: 1,
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em'
                        }}
                      >
                        {piece.type} • {piece.publication}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.7)',
                          mb: 2,
                          lineHeight: 1.5
                        }}
                      >
                        {piece.excerpt}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        size="small"
                        href={piece.readMore}
                        sx={{
                          color: 'white',
                          borderColor: 'rgba(255,255,255,0.3)',
                          '&:hover': {
                            borderColor: 'white',
                            backgroundColor: 'rgba(255,255,255,0.1)'
                          }
                        }}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )

      default:
        return (
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            Content for {sectionId} section will be added here.
          </Typography>
        )
    }
  }

  return (
    <>
      {/* Fixed header positioned in bottom-right corner with scroll-based visibility */}
      <motion.header 
        ref={headerRef}
        className="fixed bottom-0 right-0 z-50 bg-transparent"
        style={{ opacity, y, backdropFilter: `blur(${blur}px)` }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Box className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
          <Box className="flex items-end justify-end">
            {/* Always show navigation - responsive sizing */}
            <Box component="nav" className="flex items-center">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => handleOverlayOpen(item.id)}
                  className="text-white/90 text-xs sm:text-sm font-light tracking-[0.15em] uppercase hover:text-white transition-all duration-500"
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.7rem',
                    fontWeight: 300,
                    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    minWidth: 'auto',
                    padding: '8px 12px',
                    marginRight: '16px',
                    textShadow: '0 2px 12px rgba(0,0,0,0.4)',
                    '@media (min-width: 640px)': {
                      fontSize: '0.75rem',
                      padding: '10px 16px',
                      marginRight: '20px',
                    },
                    '@media (min-width: 1024px)': {
                      fontSize: '0.875rem',
                      padding: '12px 20px',
                      marginRight: '24px',
                    },
                    '&:hover': {
                      color: 'white',
                      backgroundColor: 'transparent',
                      textShadow: '0 2px 20px rgba(255,255,255,0.3)',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </motion.header>

      {/* Overlay dialogs for each section */}
      {menuItems.map((item) => (
        <Dialog
          key={item.id}
          open={openOverlay === item.id}
          onClose={handleOverlayClose}
          fullScreen
          PaperProps={{
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(20px)',
              backgroundImage:
                'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            },
          }}
        >
          <DialogContent
            sx={{
              padding: 0,
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingTop: '80px',
              position: 'relative',
            }}
          >
            {/* Close button */}
            <IconButton
              onClick={handleOverlayClose}
              sx={{
                position: 'absolute',
                top: 24,
                right: 24,
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Overlay content area */}
            <Box
              className={`overlay-content-${item.id}`}
              sx={{
                maxWidth: '900px',
                padding: '0 16px',
                width: '100%',
                '@media (min-width: 640px)': {
                  padding: '0 24px',
                }
              }}
            >
              {renderSectionContent(item.id)}
            </Box>
          </DialogContent>
        </Dialog>
      ))}
    </>
  )
}

export default Header
