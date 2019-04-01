const typeMap = {
  'ContentfulHomePage': 'home',
  'ContentfulMeetPamPage': 'meet',
  'ContentfulMediaPage': 'media',
  'ContentfulComedyPage': 'comedy',
  'ContentfulPressPage': 'press'
}

export const normalizeHomepage = meet => ({
  headline: meet.headline,
  description: meet.description.description,
  cta: meet.callToActionText,
  ctaLink: meet.callToActionLink.page
})