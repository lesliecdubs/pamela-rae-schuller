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
  hero: meet.hero.fluid,
  heroAlt: meet.hero.description,
  headshot: meet.headshot.fluid,
  headshotAlt: meet.headshot.description,
  bioIntro: meet.bioIntro.bioIntro,
  bio: meet.bio.childContentfulRichText.html,
})
