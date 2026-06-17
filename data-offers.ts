import type { Section } from "./data-home";

export const offersServicesData: Section[] = [
  {
    id: "o_headline",
    title: "Headline",
    subtitle: "The big benefit of hiring you — your unique edge",
    tag: "required",
    goal: "Make prospects feel YOU are the perfect person to solve their problem",
    tip: "This is a hot lead page — they're already interested. Lead with transformation, not a list of tasks.",
    prompts: [
      { label: "Headline options", text: (c, b, a) => `Write 8 Services page headline options for ${c} (freelancer/consultant/coach, audience: ${a}). Make prospects feel ${c} is the perfect person to solve their problem. Lead with the big benefit. Mix: benefit-led, transformation-led, bold-claim.` },
      { label: "Subheadline options", text: (c, b, a) => `Write 5 subheadline options for ${c}'s Services page. Audience: ${a}. Expand on the headline and reinforce the transformation or unique edge. Under 15 words each.` },
    ],
  },
  {
    id: "o_usp",
    title: "USP / authority",
    subtitle: "Why you — credibility, expertise, unique approach",
    tag: "required",
    goal: "Communicate the specific expertise and unique angle that makes you impossible to substitute",
    tip: 'This is where you "sell yourself" — be specific about your niche, experience, and results.',
    prompts: [
      { label: "USP copy", text: (c, b, a) => `Write a USP paragraph for ${c}'s Services page. Audience: ${a}. 2–3 sentences explaining why ${c} specifically — niche expertise, unique approach, and results others can't match. Confident, not arrogant.` },
      { label: "Authority angles", text: (c, b, a) => `List 10 types of authority signals I should ask ${c} to share on their Services page to convince ${a} they're the right person to hire. Think: niche experience, notable clients, results, unique method.` },
    ],
  },
  {
    id: "o_services",
    title: "Services & packages",
    subtitle: "Each offer — name, outcome, 3–4 key deliverables",
    tag: "required",
    goal: "List services with outcome-focused descriptions — highlight transformation, not every deliverable",
    tip: "Focus on outcomes and impact, not a laundry list of tasks.",
    prompts: [
      { label: "Service description", text: (c, b, a) => `Write a service description for one of ${c}'s offerings for ${a}. Structure: (1) Service name, (2) a 1-sentence outcome-focused headline, (3) 2–3 sentences on what's included and the transformation it delivers. Make the prospect feel the result, not the process. [ADD SERVICE NAME + KEY DETAILS]` },
      { label: "Full service suite", text: (c, b, a) => `Write descriptions for all of ${c}'s services for ${a}. For each: name, outcome headline, 2–3 sentence description focused on transformation. Keep deliverables high-level — 3–4 most important only. [LIST SERVICES HERE]` },
      { label: "Outcome-led bullets", text: (c, b, a) => `For ${c}'s services page, write outcome-led bullets for each service. Audience: ${a}. Each bullet names a result, not a task. [LIST SERVICES HERE]` },
      { label: "Naming the offer", text: (c, b, a) => `I'm naming a service package for ${c} that serves ${a}. Give me 10 package name options that feel premium, clear, and outcome-focused. Brand type: ${b}. Describe the package: [ADD DESCRIPTION]` },
    ],
  },
  {
    id: "o_pricing",
    title: "Pricing",
    subtitle: "Optional — transparent, clear, easy to understand",
    tag: "optional",
    goal: "Remove objections and set expectations — confusion is the biggest conversion killer",
    tip: 'Use "starting at $$$" language to allow for custom pricing.',
    prompts: [
      { label: "Pricing copy", text: (c, b, a) => `Write pricing section copy for ${c}'s Services page. Audience: ${a}. Include: a brief framing sentence before the prices, "starting at" language for each package, and a note about custom options.` },
      { label: "Investment framing", text: (c, b, a) => `Write 5 ways to frame the investment for ${c}'s services. Audience: ${a}. Help the prospect see the price as a smart investment, not a cost. Focus on the value and transformation.` },
    ],
  },
  {
    id: "o_socialproof",
    title: "Social proof",
    subtitle: "Testimonials specific to the service · outcomes",
    tag: "required",
    goal: 'Answer "why should I trust you with this?" with real client validation',
    tip: "Outcome-focused testimonials are everything here.",
    prompts: [
      { label: "Social proof framing", text: (c, b, a) => `Write 3 social proof section headline options for ${c}'s Services page. Audience: ${a}. Frame the testimonials that follow — more specific than "what clients say".` },
      { label: "What proof to seek", text: (c, b, a) => `List 8 specific types of testimonials and proof to ask ${c} for on their Services page — focused on outcomes, before/after, and specific results that would resonate with ${a}.` },
    ],
  },
  {
    id: "o_method",
    title: "Method / process",
    subtitle: "How does it work? Step-by-step from inquiry to result",
    tag: "required",
    goal: "Remove confusion — walk the prospect through exactly what working with you looks like",
    tip: "Confusion is the biggest conversion killer. Even if your process seems obvious, spell it out.",
    prompts: [
      { label: "Process copy", text: (c, b, a) => `Write a "how it works" section for ${c}'s Services page. Audience: ${a}. 3–5 clear steps from first contact to final result. Each step: a short name + 1–2 sentences. Make the prospect feel at ease.` },
      { label: "Process step names", text: (c, b, a) => `Give me 8 options for naming the steps in ${c}'s process section. Audience: ${a}. Clear and confidence-inspiring — not corporate jargon.` },
    ],
  },
  {
    id: "o_portfolio",
    title: "Portfolio / work samples",
    subtitle: "3–5 best samples — results, not just aesthetics",
    tag: "optional",
    goal: "Show the quality of your work and build confidence before the prospect reaches out",
    tip: "Select 3–5 best samples only.",
    prompts: [
      { label: "Portfolio intro copy", text: (c, b, a) => `Write a short portfolio section intro for ${c}'s Services page. Audience: ${a}. 2–3 sentences that frame the work samples as evidence of transformation, not just aesthetics.` },
      { label: "Case study teaser", text: (c, b, a) => `Write a case study teaser for one of ${c}'s client results. Audience: ${a}. Structure: (1) client context in 1 sentence, (2) the challenge, (3) the result. Under 60 words total. [ADD CLIENT RESULT DETAILS]` },
    ],
  },
  {
    id: "o_cta",
    title: "CTA",
    subtitle: "Book a call · contact form · inquiry page",
    tag: "required",
    goal: "Convert interest into action — make the next step obvious and low-friction",
    tip: "Note how quickly they can expect to hear back.",
    prompts: [
      { label: "CTA section copy", text: (c, b, a) => `Write a closing CTA section for ${c}'s Services page. Audience: ${a}. Compelling closing headline + 1–2 motivation sentences + CTA button label. Warm, confident, action-driving.` },
      { label: "CTA headline options", text: (c, b, a) => `Write 8 closing CTA headline options for ${c}'s Services page. Audience: ${a}. Motivates the prospect to take the next step — not just "contact me".` },
      { label: "CTA button options", text: (c, b, a) => `Write 10 CTA button label options for ${c}'s Services page. Audience: ${a}. Specific and action-oriented — beyond "get in touch" or "contact me".` },
    ],
  },
];

export const offersPricingData: Section[] = [
  {
    id: "o_headline",
    title: "Headline",
    subtitle: "The big benefit of your software — what sets it apart",
    tag: "required",
    goal: "Clearly describe the benefit of using your software and what differentiates it from the competition",
    tip: "Pricing page visitors are close to a decision — make the benefit immediately clear.",
    prompts: [
      { label: "Headline options", text: (c, b, a) => `Write 8 Pricing page headline options for ${c} (SaaS/software, audience: ${a}). Communicate the big benefit or transformation. Make the prospect feel they'd be missing out not to try it.` },
      { label: "Value framing", text: (c, b, a) => `Write a 1–2 sentence value framing statement for ${c}'s Pricing page. Audience: ${a}. Reinforces why the investment makes sense. Clear, confident, no fluff.` },
    ],
  },
  {
    id: "o_tiers",
    title: "Pricing tiers",
    subtitle: "Features · price · CTA per tier — side-by-side comparison",
    tag: "required",
    goal: "Give prospects a clear, transparent side-by-side comparison so they can choose with confidence",
    tip: 'Include a CTA button under each tier. Highlight a recommended tier ("most popular") to reduce decision paralysis.',
    prompts: [
      { label: "Tier names + taglines", text: (c, b, a) => `Write names and one-line taglines for ${c}'s pricing tiers. Audience: ${a}. Each tier name should feel natural and the tagline clarifies who it's for in one short sentence. Give me 3 tier options. [ADD TIER STRUCTURE IF KNOWN]` },
      { label: "Tier description copy", text: (c, b, a) => `Write short descriptions for ${c}'s pricing tiers. Audience: ${a}. For each tier: a 1-sentence "this is for you if" line, and 3–4 key features written as benefits, not specs. [ADD TIER NAMES + KEY FEATURES]` },
      { label: "CTA button options", text: (c, b, a) => `Write 8 CTA button options for ${c}'s pricing tier cards. Audience: ${a}. Variations: free trial, get started, try for free, book a demo. Specific and action-forward.` },
      { label: "Recommended tier callout", text: (c, b, a) => `Write 5 "most popular" or "recommended" callout label options for ${c}'s pricing page middle tier. Audience: ${a}. Short, confident, not cliché.` },
    ],
  },
  {
    id: "o_authority",
    title: "Authority / credibility",
    subtitle: "Notable clients · number of users served · logos",
    tag: "optional",
    goal: "Build trust at the point of decision with proof of scale and credibility",
    tip: "Number of customers, notable brand logos, or key stats.",
    prompts: [
      { label: "Authority section copy", text: (c, b, a) => `Write an authority/credibility section for ${c}'s Pricing page. Audience: ${a}. Short framing sentence + placeholder for logos or stats. Confident but not boastful.` },
      { label: "Credibility signals to seek", text: (c, b, a) => `List 8 specific credibility signals to ask ${c} to provide for their Pricing page authority section — to build trust with ${a} at the point of decision.` },
    ],
  },
  {
    id: "o_socialproof",
    title: "Social proof",
    subtitle: "Testimonials from satisfied users",
    tag: "required",
    goal: "Reinforce the decision with real user voices — especially outcome-focused proof",
    tip: "Look for testimonials that mention a specific result or relief.",
    prompts: [
      { label: "Social proof framing", text: (c, b, a) => `Write 3 social proof section headline options for ${c}'s Pricing page. Audience: ${a}. Frame the testimonials as confirmation they're making a smart decision.` },
      { label: "What proof to seek", text: (c, b, a) => `List 8 types of testimonials and proof to ask ${c} for on their Pricing page — focused on before/after, time saved, results achieved — most persuasive to ${a}.` },
    ],
  },
  {
    id: "o_faq",
    title: "FAQ",
    subtitle: "Most common objections · answered directly",
    tag: "optional",
    goal: "Remove final objections and help prospects say yes with confidence",
    tip: "FAQ is a pre-emptive objection handler.",
    prompts: [
      { label: "FAQ questions", text: (c, b, a) => `Write 8 FAQ questions and answers for ${c}'s Pricing page. Audience: ${a}. Cover: what's included, pricing questions, cancellation/contract terms, how to get started, and the most common concerns ${a} would have before signing up.` },
      { label: "Objections to address", text: (c, b, a) => `List the top 10 objections ${a} might have before purchasing ${c}'s software. I'll use these to write the FAQ section. Be specific — not just "it's too expensive" but WHY they might think that.` },
    ],
  },
  {
    id: "o_cta",
    title: "Final CTA",
    subtitle: "Last push — try free, get started, book a demo",
    tag: "required",
    goal: "Convert a warm prospect who's read the whole page — make the action irresistible and clear",
    tip: "Repeat the lowest-friction CTA from the top of the page.",
    prompts: [
      { label: "Final CTA copy", text: (c, b, a) => `Write a final CTA section for ${c}'s Pricing page. Audience: ${a}. Closing headline + 1–2 motivation sentences + CTA button label. The prospect has read everything — push them over the line with confidence and warmth.` },
      { label: "CTA headline options", text: (c, b, a) => `Write 8 final CTA headline options for ${c}'s Pricing page. Audience: ${a}. Each should feel like a natural next step, not a hard sell.` },
    ],
  },
];

export const offersCatalogData: Section[] = [
  {
    id: "o_headline",
    title: "Headline",
    subtitle: "The solutions you offer — benefit-rich overview",
    tag: "required",
    goal: "Communicate the range of solutions available and the core benefit of choosing this suite",
    tip: "The visitor already wants to buy — this page's job is to help them choose the right product and click through to the sales page.",
    prompts: [
      { label: "Headline options", text: (c, b, a) => `Write 8 Catalog/Programs page headline options for ${c}. Audience: ${a}. Communicate the solutions available and the benefit of this product suite. Make the prospect feel they're in the right place.` },
      { label: "Page intro copy", text: (c, b, a) => `Write a 2–3 sentence page intro for ${c}'s Catalog page. Audience: ${a}. Frames the suite of products — what they are, who they're for, and the overarching transformation they deliver. Benefit-rich, not a table of contents.` },
    ],
  },
  {
    id: "o_products",
    title: "Product suite",
    subtitle: "Each product — name, USP/benefit, CTA to sales page",
    tag: "required",
    goal: "Brief, benefit-rich descriptions that make each product compelling and drive clicks to individual sales pages",
    tip: "Don't try to sell the product here — tease it.",
    prompts: [
      { label: "Product card copy", text: (c, b, a) => `Write a product card for one of ${c}'s offerings for ${a}. Structure: (1) product name, (2) a 1-sentence USP/benefit headline, (3) 2–3 sentences on what it is, who it's for, and the core transformation. End with a CTA button label. [ADD PRODUCT NAME + DETAILS]` },
      { label: "Full catalog copy", text: (c, b, a) => `Write product card copy for all of ${c}'s products for ${a}. For each: name, 1-sentence benefit headline, 2–3 sentence description, CTA button label. Punchy and transformation-focused — not a feature list. [LIST ALL PRODUCTS HERE]` },
      { label: "Product USP/benefit line", text: (c, b, a) => `Write a USP/benefit headline for each of ${c}'s products. Audience: ${a}. 1 sentence communicating the core transformation or unique angle of that product. [LIST PRODUCTS HERE]` },
      { label: "CTA button options", text: (c, b, a) => `Write 8 CTA button options for ${c}'s product cards. Audience: ${a}. Variations: learn more, get instant access, join the waitlist, view details. Specific and desire-building.` },
    ],
  },
  {
    id: "o_socialproof",
    title: "Social proof",
    subtitle: "Testimonials between or after products",
    tag: "required",
    goal: "Build desire and reduce risk with real customer voices throughout the catalog",
    tip: "Interleave social proof between products where possible.",
    prompts: [
      { label: "Social proof framing", text: (c, b, a) => `Write 3 social proof section headline options for ${c}'s Catalog page. Audience: ${a}. Frame the testimonials as confirmation the products deliver real transformation.` },
      { label: "What proof to seek", text: (c, b, a) => `List 8 specific types of testimonials and proof to ask ${c} for on their Catalog page — most persuasive to ${a} at the point of choosing a product.` },
    ],
  },
];
