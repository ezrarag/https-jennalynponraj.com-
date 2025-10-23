# TODO - Jennalyn Ponraj Portfolio Site

## 🎯 Priority Tasks

### 1. Fix Section Heights
**Status:** 🔴 High Priority  
**Issue:** Sections are not properly filling viewport height despite `min-h-screen` classes

**Tasks:**
- [ ] Debug why sections aren't taking full viewport height
- [ ] Check CSS conflicts or parent container constraints
- [ ] Verify flexbox centering is working correctly
- [ ] Test on different screen sizes (mobile, tablet, desktop)
- [ ] Ensure each section takes exactly 100vh

**Files to check:**
- `src/components/BioSection.tsx`
- `src/components/WorkCarousel.tsx` 
- `src/components/SoundVisual.tsx`
- `src/components/FooterSection.tsx`
- `src/app/page.tsx` (parent container)
- `src/app/globals.css` (global styles)

### 2. Connect Menu Navigation to Sections
**Status:** 🔴 High Priority  
**Issue:** Menu items have href links but sections don't have corresponding IDs

**Tasks:**
- [ ] Add proper section IDs to each component
- [ ] Update menu href values to match section IDs
- [ ] Implement smooth scrolling behavior
- [ ] Test navigation functionality
- [ ] Add active state highlighting for current section

**Required IDs:**
- [ ] `#bio` - BioSection
- [ ] `#acting` - WorkCarousel (Acting tab)
- [ ] `#music` - WorkCarousel (Music tab) 
- [ ] `#voice` - WorkCarousel (Voice tab)
- [ ] `#writing` - WorkCarousel (Writing tab)

**Files to modify:**
- `src/components/Header.tsx` (menu links)
- `src/components/BioSection.tsx` (add id="bio")
- `src/components/WorkCarousel.tsx` (add section IDs)
- `src/components/SoundVisual.tsx` (if needed)
- `src/components/FooterSection.tsx` (if needed)

## 🔧 Technical Notes

### Current Section Structure:
1. **Hero Section** - `min-h-screen` ✅ (working)
2. **Bio Section** - `min-h-screen flex items-center` ⚠️ (needs debugging)
3. **Work Carousel** - `min-h-screen flex items-center` ⚠️ (needs debugging)
4. **Sound Visual** - `min-h-screen flex items-center` ⚠️ (needs debugging)
5. **Footer Section** - `min-h-screen flex items-center justify-center` ⚠️ (needs debugging)

### Menu Structure:
- Bio → `#bio`
- Acting → `#acting` 
- Music → `#music`
- VO → `#voice`
- Writing → `#writing`

## 🎨 Design Considerations

### Section Height Issues:
- Check if parent containers have height constraints
- Verify flexbox properties are correct
- Consider using `height: 100vh` instead of `min-h-screen`
- Test with browser dev tools to see actual computed heights

### Navigation Enhancement Ideas:
- Add scroll spy to highlight active menu item
- Implement smooth scroll behavior
- Consider adding scroll progress indicator
- Add keyboard navigation support

## 📝 Additional Improvements (Future)

### Content & Functionality:
- [ ] Add actual content to WorkCarousel sections
- [ ] Implement proper video/audio players
- [ ] Add contact form functionality
- [ ] Optimize images and assets
- [ ] Add loading states

### Performance:
- [ ] Implement lazy loading for images
- [ ] Optimize animations for performance
- [ ] Add proper error boundaries
- [ ] Implement proper SEO meta tags

### Accessibility:
- [ ] Add proper ARIA labels
- [ ] Implement keyboard navigation
- [ ] Add focus management
- [ ] Test with screen readers

---

**Last Updated:** January 2025  
**Next Session Focus:** Fix section heights and implement menu navigation
