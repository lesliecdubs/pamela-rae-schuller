const getVideoId = url => {
  const id = url.split('=')
  return id[1]
}

const typeMap = {
  ContentfulHomePage: 'home',
  ContentfulMeetPamPage: 'meet',
  ContentfulMediaPage: 'media',
  ContentfulComedyPage: 'comedy',
  ContentfulPressPage: 'press',
}

// Normalize content types
const normalizeVideo = video => ({
  title: video.videoTitle,
  producer: video.videoProducer && video.videoProducer.videoProducer,
  id: getVideoId(video.videoUrl),
})

const normalizePhoto = photo => ({
  title: photo.photoTitle,
  alt: photo.photo.description,
  photo: photo.photo.fluid,
})

const normalizeTestimonial = testimonial => ({
  quote: testimonial.quote.quote,
  name: testimonial.name,
  title: testimonial.title,
  organization: testimonial.organization,
  headshotAlt: testimonial.headshot && testimonial.headshot.description,
  headshot: testimonial.headshot && testimonial.headshot.fluid,
})

const normalizeFlyer = flyer => ({
  title: flyer.flyerName,
  file: flyer.flyerPdf.file.url,
  type: flyer.flyerPdf.file.contentType,
  image: flyer.flyerPdf && flyer.flyerPdf.fluid,
})

const normalizePressLogo = logo => ({
  title: logo.title,
  image: logo.fluid,
})

const normalizePressPiece = press => ({
  headline: press.headline,
  publication: press.publication,
  publicationUrl: press.publicationUrl,
  byline: press && press.byline,
})

const normalizeBookingPackage = book => ({
  name: book.packageName,
  description: book.packageDescription.packageDescription,
  imageAlt: book.packageImage.alt,
  image: book.packageImage.fluid,
})

export const normalizeTourDate = tour => ({
  title: tour.title,
  date: tour.date,
  venue: tour.venueName,
  venueLink: tour.googleMapsLink,
  type: tour.typeOfShow && tour.typeOfShow.typeOfShow,
  audience: tour.audienceAge && tour.audienceAge.audienceAge,
  link: tour.ticketLink,
  flyer: tour.relevantFlyer && normalizeFlyer(tour.relevantFlyer)
})

// Normalize pages
export const normalizeHomepage = home => ({
  headline: home.headline,
  description: home.description.description,
  cta: home.callToActionText,
  ctaLink: home.callToActionLink.page,
})

export const normalizeMeetPage = meet => ({
  hero: meet.hero.fluid,
  heroAlt: meet.hero.description,
  headshot: meet.headshot.fluid,
  headshotAlt: meet.headshot.description,
  bioIntro: meet.bioIntro.bioIntro,
  bio: meet.bio.childContentfulRichText.html,
})

export const normalizeMediaPage = media => ({
  headline: media.headline,
  description: media.description.description,
  videos: media.videos.map(v => normalizeVideo(v)),
  featuredTestimonial: normalizeTestimonial(media.featuredTestimonial),
  photos: media.photos.map(p => normalizePhoto(p)),
  testimonials: media.testimonials.map(t => normalizeTestimonial(t)),
})

export const normalizeComedyPage = comedy => ({
  headline: comedy.headline,
  description: comedy.description.description,
  flyers: comedy.showFlyers.map(f => normalizeFlyer(f)),
  videos: comedy.comedyVideos.map(v => normalizeVideo(v)),
})

export const normalizePressPage = press => ({
  headline: press.headline,
  asSeenOn: press.asSeenOn.map(l => normalizePressLogo(l)),
  byPam: press.pressByPamela.map(p => normalizePressPiece(p)),
  aboutPam: press.pressAboutPamela.map(p => normalizePressPiece(p)),
})

export const normalizeBookingPage = book => ({
  title: book.title,
  packages: book.packages.map(p => normalizeBookingPackage(p)),
  pastGigTypes: book.pastGigTypes,
})
