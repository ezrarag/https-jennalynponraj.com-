'use client'

import { useState, useEffect, useRef } from 'react'
import { Button, Menu, MenuItem, Box, Dialog, DialogContent, IconButton } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { gsap } from 'gsap'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [openOverlay, setOpenOverlay] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  const menuItems = [
    { name: 'Bio', href: '#bio', id: 'bio' },
    { name: 'Acting', href: '#acting', id: 'acting' },
    { name: 'Music', href: '#music', id: 'music' },
    { name: 'VO', href: '#voice', id: 'voice' },
    { name: 'Writing', href: '#writing', id: 'writing' }
  ]

  const dropdownItems = [
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '#resume' },
    { name: 'Press Kit', href: '#press' }
  ]

  useEffect(() => {
    // GSAP animation for header entrance
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children, 
        { 
          opacity: 0, 
          y: -20 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out" 
        }
      )
    }
  }, [])

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setIsDropdownOpen(true)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setIsDropdownOpen(false)
  }

  const handleOverlayOpen = (itemId: string) => {
    setOpenOverlay(itemId)
  }

  const handleOverlayClose = () => {
    setOpenOverlay(null)
  }

  return (
    <>
      <header 
        ref={headerRef}
        className="fixed bottom-0 right-0 z-50 bg-transparent"
      >
        <Box className="px-6 lg:px-8 pb-6">
          <Box className="flex flex-col items-end space-y-4">
            {/* Brand Name */}
            <Button
              onClick={handleMenuClick}
              className="text-white text-lg font-bold tracking-wide hover:text-gray-300 transition-colors duration-300"
              sx={{
                color: 'white',
                fontSize: '1.125rem',
                fontWeight: 400,
                fontFamily: 'Helvetica, Arial, sans-serif',
                letterSpacing: '0.025em',
                minWidth: 'auto',
                padding: '8px 16px',
                '&:hover': {
                  color: '#d1d5db',
                  backgroundColor: 'transparent'
                }
              }}
            >
              Jennalyn Ponraj
            </Button>

            {/* Menu Items */}
            <Box component="nav" className="flex flex-col items-end space-y-2">
              {menuItems.map((item, index) => (
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
                    padding: '4px 8px',
                    justifyContent: 'flex-end',
                    '&:hover': {
                      color: '#d1d5db',
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Material UI Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={isDropdownOpen}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          PaperProps={{
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
              minWidth: '120px',
              mt: 1
            }
          }}
        >
          {dropdownItems.map((item) => (
            <MenuItem
              key={item.name}
              onClick={handleMenuClose}
              component="a"
              href={item.href}
              sx={{
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 300,
                fontFamily: 'Helvetica, Arial, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </header>

      {/* Full Viewport Overlays */}
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
              backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            }
          }}
        >
          <DialogContent sx={{ 
            padding: 0, 
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            {/* Close Button */}
            <IconButton
              onClick={handleOverlayClose}
              sx={{
                position: 'absolute',
                top: 24,
                right: 24,
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Content Area */}
            <Box sx={{
              textAlign: 'center',
              maxWidth: '800px',
              padding: '0 24px'
            }}>
              <h2 style={{
                color: 'white',
                fontSize: '3rem',
                fontWeight: 300,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }}>
                {item.name}
              </h2>
              
              <Box sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.125rem',
                lineHeight: 1.6,
                fontFamily: 'Helvetica, Arial, sans-serif'
              }}>
                {/* Empty content for now - will be filled later */}
                <p>Content for {item.name} section will be added here.</p>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
      ))}
    </>
  )
}

export default Header
