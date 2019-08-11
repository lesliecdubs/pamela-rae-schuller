const getVideoId = url => {
  const id = url.split('=')
  return id[1]
}

const typeMap = {
  ContentfulHomePage: 'home',
  ContentfulMeetPamPage: 'about',
  ContentfulMediaPage: 'media',
  ContentfulComedyPage: 'comedy',
  ContentfulPressPage: 'press',
  ContentfulBookingPage: 'book',
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

const normalizePlace = pl => ({
  place: pl.place,
  logo: pl.placeLogo.fluid,
})

const normalizeBookingPackage = book => ({
  name: book.packageName,
  description: book.packageDescription.packageDescription,
  imageAlt: book.packageImage.alt,
  image: book.packageImage.fluid,
})

export const normalizeTourDate = tour => ({
  date: tour.date,
  city: tour.city,
  venue: tour.venueName,
  venueLink: tour.googleMapsLink,
  type: tour.typeOfShow && tour.typeOfShow.typeOfShow,
  audience: tour.audienceAge && tour.audienceAge.audienceAge,
  link: tour.ticketLink,
  flyer: tour.relevantFlyer && normalizeFlyer(tour.relevantFlyer),
})

// Normalize pages
export const normalizeHomepage = home => ({
  headline: home.headline,
  description: home.description.description,
  cta: home.callToActionText,
  ctaLink: typeMap[home.callToActionLink.__typename],
})

export const normalizeMeetPage = meet => ({
  hero: meet.hero.fluid,
  heroAlt: meet.hero.description,
  bioIntro: meet.bioIntro.bioIntro,
  bio: meet.bio.childContentfulRichText.html,
  bioImage: meet.bioImage.fluid,
  bioImageAlt: meet.bioImage.description,
  bioPartTwo: meet.bioPartTwo.childContentfulRichText.html,
})

export const normalizeMediaPage = media => ({
  headline: media.headline,
  featuredVideo: normalizeVideo(media.featuredVideo),
  videos: media.videos.map(v => normalizeVideo(v)),
  featuredTestimonial: normalizeTestimonial(media.featuredTestimonial),
  photos: media.photos.map(p => normalizePhoto(p)),
  testimonials: media.testimonials.map(t => normalizeTestimonial(t)),
})

export const normalizeComedyPage = comedy => ({
  headline: comedy.headline,
  hero: comedy.hero.fluid,
  heroAlt: comedy.hero.description,
  description: comedy.description.description,
  videos: comedy.comedyVideos.map(v => normalizeVideo(v)),
  pastShows: comedy.placesPamPerformedComedy.map(p => normalizePlace(p)),
})

export const normalizePressPage = press => ({
  headline: press.headline,
  hero: press.hero.fluid,
  description: press.description.description,
  heroAlt: press.hero.description,
  asSeenOn: press.asSeenOn.map(l => normalizePressLogo(l)),
  separator: press.separator.fluid,
  byPam: press.pressByPamela.map(p => normalizePressPiece(p)),
  aboutPam: press.pressAboutPamela.map(p => normalizePressPiece(p)),
  packet: press.pressPacket.file.url,
})

export const normalizeBookingPage = book => ({
  title: book.title,
  packages: book.packages.map(p => normalizeBookingPackage(p)),
  separator: book.separator.fluid,
  separatorAlt: book.separator.description,
  pastGigTypes: book.pastGigTypes,
})

export const normalizeThanksPage = thanks => ({
  separator: thanks.separator.fluid,
  separatorAlt: thanks.separator.description,
})

export const normalizeTourPage = tour => ({
  headline: tour.headline,
  hero: tour.hero.fluid,
  heroAlt: tour.hero.description,
  description: tour.description.description,
  separator: tour.separatorImage.fluid,
  separatorAlt: tour.separatorImage.description,
  pastShows: tour.pastShows,
})
