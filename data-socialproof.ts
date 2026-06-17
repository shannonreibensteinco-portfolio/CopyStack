import type { Section } from "./data-home";

export const socialProofData: Section[] = [
  {
    id: "sp_headline",
    title: "Headline",
    subtitle: "Brand the page — make it feel like a celebration, not a list",
    tag: "required",
    goal: "Set the tone for the page — this isn't a dry review wall, it's a showcase of real transformation",
    tip: 'Don\'t just call it "Testimonials" or "Reviews" — name the page in a way that reflects your brand personality. Copy Posse calls theirs "Love From The Posse."',
    prompts: [
      { label: "Page headline options", text: (c, b, a) => `Write 8 Social Proof page headline options for ${c} (${b}, audience: ${a}). The headline should feel like a branded celebration of customer wins — not a generic "testimonials" label. Think personality, warmth, and specificity.` },
      { label: "Page subheadline options", text: (c, b, a) => `Write 5 subheadline options for ${c}'s Social Proof page. Audience: ${a}. Should invite the reader in, hint at the transformation they'll read about, and feel on-brand. Under 15 words each.` },
      { label: "Headline + subheadline pairs", text: (c, b, a) => `Write 4 headline and subheadline pairs for ${c}'s Social Proof page. Audience: ${a}. The headline is the branded page name; the subheadline sets up the proof to follow. Warm, confident, specific to the brand.` },
    ],
  },
  {
    id: "sp_featured",
    title: "Featured testimonials",
    subtitle: "2–3 hero testimonials — photo, quote, outcome, product label",
    tag: "required",
    goal: "Lead with your most powerful, outcome-specific proof — give featured testimonials more visual weight than the rest",
    tip: "Featured testimonials should include: a photo or video, a bolded pull-quote, 2–4 sentences of context, the person's name, and the product/service they used. Outcome-specific beats vague praise every time.",
    prompts: [
      { label: "What makes a featured testimonial", text: (c, b, a) => `I'm selecting featured testimonials for ${c}'s Social Proof page. List 8 criteria for choosing which testimonials deserve featured placement — the qualities that make a testimonial maximally persuasive to ${a}.` },
      { label: "Pull-quote rewrites", text: (c, b, a) => `Rewrite these testimonials into punchy pull-quotes for ${c}'s Social Proof page. Each pull-quote should: be under 10 words, name a specific outcome or emotion, and work as a standalone headline. Audience: ${a}. [PASTE TESTIMONIALS HERE]` },
      { label: "Testimonial intro framing", text: (c, b, a) => `Write 3 short intro lines for ${c}'s featured testimonials section. Audience: ${a}. 1–2 sentences that set up the testimonials and prime the reader to connect with the proof. Not "here's what our clients say" — something more specific and brand-forward.` },
    ],
  },
  {
    id: "sp_library",
    title: "Full testimonial library",
    subtitle: "All testimonials — filterable by product, outcome, or audience",
    tag: "required",
    goal: "Give prospects a comprehensive proof library — updated in real time, organized so visitors can find the most relevant voices",
    tip: "Put your best testimonials at the top. Consider organizing by product or offer so visitors can filter to proof that's directly relevant to what they're considering buying.",
    prompts: [
      { label: "Library intro copy", text: (c, b, a) => `Write 3 short intro options for ${c}'s full testimonial library section. Audience: ${a}. 1–2 sentences that frame the volume of proof and invite the reader to explore. Should feel like a warm endorsement, not a database label.` },
      { label: "What proof to collect", text: (c, b, a) => `I'm building ${c}'s Social Proof page. List 10 specific types of testimonials and proof to collect — organized by what objections they overcome or what emotions they trigger in ${a}. Think: transformation stories, doubt-busting testimonials, before/after outcomes.` },
      { label: '"View more" CTA options', text: (c, b, a) => `Write 8 "view more" or "load more" CTA label options for ${c}'s testimonial library. Audience: ${a}. More specific and inviting than "see more" — should build anticipation for more proof.` },
    ],
  },
  {
    id: "sp_collection",
    title: "Testimonial collection system",
    subtitle: "How to ask, what to ask, when to ask",
    tag: "required",
    goal: "Build a repeatable process for collecting high-quality, outcome-specific testimonials that actually persuade",
    tip: "The goal of every testimonial is to help future prospects: eliminate an objection, overcome a fear, or envision a transformation. Ask 3–5 open-ended questions. Ask while the experience is still fresh.",
    fiveSteps: [
      { num: "Step 1", name: "Make it easy", desc: "Send clients directly to a form (Boast.io, Google Forms) so they don't have to figure out format, length, or delivery. Eliminate every friction point." },
      { num: "Step 2", name: "Ask open-ended questions", desc: "Ask 3–5 questions that surface specific stories, emotions, and outcomes. Avoid yes/no or star ratings — they don't inspire future buyers." },
      { num: "Step 3", name: "Get 'em while they're hot", desc: "Ask as soon as the project ends or the product is consumed — before specificity and emotion fade. Timing is everything." },
      { num: "Step 4", name: "Follow up", desc: "A short, warm follow-up email secures testimonials from satisfied customers who simply got busy. Keep it brief and genuine." },
      { num: "Step 5", name: "Showcase strategically", desc: "Best testimonials on the Home page. Product-specific testimonials on Offers pages. Everything on the Social Proof page — best ones first." },
    ],
    prompts: [
      { label: "Open-ended question set", text: (c, b, a) => `Write a set of 5 open-ended testimonial request questions for ${c} (${b}). Each question should help ${a} surface a specific story, emotion, or outcome. Goal: eliminate objections, overcome fears, or help future customers envision their own transformation. Customize to the product/service.` },
      { label: "Testimonial request email (first)", text: (c, b, a) => `Write a testimonial request email for ${c} to send to ${a} immediately after they've completed a product or service. Tone: warm, genuine, not salesy. Include: a reminder of what they accomplished, an expression of appreciation, a clear ask with a reason why testimonials matter, a link placeholder, and reassurance it'll take under 5 minutes.` },
      { label: "Testimonial follow-up email", text: (c, b, a) => `Write a short follow-up testimonial request email for ${c}. Audience: ${a}. This is the second email — keep it brief, check in on their results, gently reiterate the ask, and include the form link again. Warm and pressure-free.` },
      { label: "Testimonial request for a specific product", text: (c, b, a) => `Write a testimonial request email for ${c} targeting ${a} who just completed [PRODUCT NAME]. Reference the specific transformation the product delivers, ask them to reflect on their experience, and link to the product-specific testimonial form. Enthusiastic and personal.` },
      { label: "Questions to uncover specific outcomes", text: (c, b, a) => `Write 6 testimonial prompt questions for ${c} designed to surface before/after outcomes from ${a}. Each question should draw out a specific result, measurable win, or emotional shift — not just general satisfaction.` },
    ],
  },
  {
    id: "sp_placement",
    title: "Placement strategy",
    subtitle: "Where to use testimonials across the site",
    tag: "optional",
    goal: "Remind the copywriter that social proof isn't just a page — it's woven throughout the entire site",
    tip: "Three-tier placement: (1) Best overall testimonials → Home page. (2) Product-specific testimonials → relevant Offers page. (3) All testimonials → Social Proof page, best ones first.",
    prompts: [
      { label: "Placement audit prompt", text: (c, b, a) => `I'm doing a social proof audit for ${c}'s website (${b}, audience: ${a}). List every page and section where testimonials or proof should appear — and for each, describe what TYPE of testimonial is most persuasive in that spot.` },
      { label: "Proof-to-objection mapping", text: (c, b, a) => `Map the top 8 objections ${a} has before buying from ${c} to the type of testimonial that overcomes each one. I'll use this to curate the right proof for each section of the site.` },
    ],
  },
];
