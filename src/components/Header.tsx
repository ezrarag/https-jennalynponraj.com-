'use client'

import { useState, useEffect, useRef } from 'react'
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
import { bioContent, actingVideos, musicContent, voSamples, writingPieces } from '@/data/sections'

const Header = () => {
  const [openOverlay, setOpenOverlay] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

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

  const handleOverlayOpen = (itemId: string) => setOpenOverlay(itemId)
  const handleOverlayClose = () => setOpenOverlay(null)

  const renderSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'bio':
        return (
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={5}>
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
            <Grid item xs={12} md={7}>
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
            </Grid>
          </Grid>
        )

      case 'acting':
        return (
          <Box>
            <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4 }}>
              Acting
            </Typography>
            <Grid container spacing={3}>
              {actingVideos.map((video, index) => (
                <Grid item xs={12} sm={6} key={index}>
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
                <Grid item xs={12} md={6} key={index}>
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
      {/* Fixed header positioned in bottom-right corner */}
      <header 
        ref={headerRef}
        className="fixed bottom-0 right-0 z-50 bg-transparent"
      >
        <Box className="px-6 lg:px-8 pb-6">
          <Box className="flex items-end justify-end">
            {/* Navigation links */}
            <Box component="nav" className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => handleOverlayOpen(item.id)}
                  className="text-white text-sm font-light tracking-wider uppercase hover:text-gray-300 transition-colors duration-300"
                  sx={{
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    minWidth: 'auto',
                    padding: '8px 0',
                    '&:hover': {
                      color: '#d1d5db',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>

      </header>

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
                padding: '0 24px',
                width: '100%'
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
