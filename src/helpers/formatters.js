const typeMap = {
  ContentfulHomePage: 'home',
  ContentfulMeetPamPage: 'meet',
  ContentfulMediaPage: 'media',
  ContentfulComedyPage: 'comedy',
  ContentfulPressPage: 'press',
}

export const normalizeHomepage = home => ({
  headline: home.headline,
  description: home.description.description,
  cta: home.callToActionText,
  ctaLink: home.callToActionLink.page,
})

export const normalizeMeetPage = meet => ({
  description: meet.headshot.description,
  headshot: meet.headshot.fluid,
  bioIntro: meet.bioIntro.bioIntro,
  bio: meet.bio.childContentfulRichText.html,
})
