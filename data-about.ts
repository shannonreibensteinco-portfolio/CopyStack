import type { Section } from "./data-home";

export const aboutPersonalData: Section[] = [
  {
    id: "about_headline",
    title: "Headline",
    subtitle: "Who are you and what do you do?",
    tag: "required",
    goal: "Inspire the reader and give them a sense of what your brand is all about — not just your product",
    tip: "Can be a single headline or headline + subheadline pair. Think brand personality, not job title.",
    prompts: [
      { label: "Headline options", text: (c, b, a) => `Write 8 About page headline options for ${c} (personal brand, audience: ${a}). The goal is to inspire and hint at what the brand is all about — not just describe the product. Mix bold statements, mission-led, and personality-forward angles.` },
      { label: "Headline + subheadline pairs", text: (c, b, a) => `Write 5 headline and subheadline pairs for ${c}'s About page. Audience: ${a}. The headline inspires; the subheadline adds a layer of context or personality. Keep both punchy.` },
    ],
  },
  {
    id: "about_mission",
    title: "Intro / mission",
    subtitle: "What's your mission? Why should they stick around?",
    tag: "required",
    goal: "Share the brand's greater purpose, challenge the status quo, and explain what makes it uniquely different",
    tip: "This is where you call out the problem you're solving in the world and why you're the one to solve it.",
    prompts: [
      { label: "Mission statement", text: (c, b, a) => `Write 3 mission statement variations for ${c}'s About page. Audience: ${a}. Each should communicate: the greater purpose of the brand, the impact it hopes to make, and optionally challenge the status quo in their industry. Punchy and specific.` },
      { label: "Challenge the status quo", text: (c, b, a) => `Write an opening paragraph for ${c}'s About page that challenges the status quo in their industry. Audience: ${a}. Call out what's broken or wrong with how others do it — then position ${c} as the better way. 2–3 short paragraphs.` },
      { label: "Why stick around", text: (c, b, a) => `Write 3 variations of a "why you should stick around" paragraph for ${c}'s About page. Audience: ${a}. This should explain what makes the brand different, special, and worth following — without sounding like a sales pitch.` },
    ],
  },
  {
    id: "about_story",
    title: "Story",
    subtitle: "How did you get here? Origin → challenge → discovery",
    tag: "required",
    goal: "Create emotional resonance — when readers see themselves in your story, they form loyalty",
    tip: "Use the Hero's Journey structure: Status Quo (origin) → Challenge (the problem) → Discovery (the breakthrough). Your story is the one thing no competitor can copy.",
    prompts: [
      { label: "Story structure questions", text: (c, b, a) => `I'm writing the brand story for ${c}'s About page. Give me 12 deep-dive questions to ask my client that will uncover the three pivotal moments in their story: (1) Status Quo — their origin, (2) The Challenge — the conflict or adversity, (3) The Discovery — the breakthrough or epiphany. These should help surface emotional, specific, and memorable details.` },
      { label: "Story opening hook", text: (c, b, a) => `Write 3 opening hooks for ${c}'s About page brand story. Audience: ${a}. Each hook should immediately pull the reader into the story — a vivid moment, a bold statement, or a relatable scenario that sets up the origin. Keep each under 60 words.` },
      { label: "Status quo section", text: (c, b, a) => `Write the "Status Quo" section of ${c}'s About page story — the origin of where they started before everything changed. Audience: ${a}. This should feel relatable and human. 2–3 short paragraphs. [FILL IN any client details you have]` },
      { label: "Challenge section", text: (c, b, a) => `Write the "Challenge" section of ${c}'s About page story — the conflict, adversity, or turning point that disrupted the status quo and forced a change. Audience: ${a}. Make it honest and emotionally grounded. 2–3 short paragraphs. [FILL IN client details]` },
      { label: "Discovery section", text: (c, b, a) => `Write the "Discovery" section of ${c}'s About page story — the epiphany, breakthrough, or resolution that led to what ${c} does today. Audience: ${a}. This is where the reader sees the path forward. 2–3 short paragraphs. [FILL IN client details]` },
    ],
  },
  {
    id: "about_method",
    title: "Method / values",
    subtitle: "What's your unique approach or philosophy?",
    tag: "optional",
    goal: "Introduce the unique attributes of the brand — values, philosophy, or approach that sets it apart",
    tip: "Optional — use this if your method needs explanation, or if values are a big part of the brand identity.",
    prompts: [
      { label: "Values copy", text: (c, b, a) => `Write copy for ${c}'s About page values section. Audience: ${a}. List 3–4 core brand values. For each: a short name (1–3 words), a one-sentence description of what it means in practice for this brand. Make them feel lived-in, not corporate.` },
      { label: "Method/approach copy", text: (c, b, a) => `Write a short "method" or "how I work" section for ${c}'s About page. Audience: ${a}. In 2–3 paragraphs, explain the unique approach or philosophy behind what ${c} does and why it gets better results than alternatives.` },
    ],
  },
  {
    id: "about_authority",
    title: "Content / press / authority",
    subtitle: "Blog · podcast features · media · collaborations",
    tag: "optional",
    goal: "Share content that supports the story and credibility — 3 to 5 relevant examples, not everything",
    tip: "Don't list everything — this isn't a resume. Keep it to 3–5 pieces that are most relevant to the reader.",
    prompts: [
      { label: "Section headline", text: (c, b, a) => `Write 4 headline options for the content/press/authority section of ${c}'s About page. Audience: ${a}. Should feel like a confident, curated showcase — not a brag.` },
      { label: "What to feature", text: (c, b, a) => `I'm building the authority section for ${c}'s About page. List 10 types of content, press, and proof I should ask my client to consider featuring here — to build credibility with ${a} specifically.` },
    ],
  },
  {
    id: "about_cta",
    title: "CTA",
    subtitle: "Where do I start? Best next step or featured offer",
    tag: "required",
    goal: "Give the reader a clear, confident next move — feature best services or a free first step",
    tip: 'Can be a single CTA or 2–3 options. Mirror the "get started" section on the home page in tone.',
    prompts: [
      { label: "CTA section copy", text: (c, b, a) => `Write a CTA section for ${c}'s About page. Audience: ${a}. Include a closing sentence that leads into the CTA, a section headline, and 1–3 options for what to do next. Warm, confident, and forward-moving — not pushy.` },
      { label: "Closing line options", text: (c, b, a) => `Write 8 closing line options for ${c}'s About page — the last sentence before the CTA that wraps up the story and invites the reader to take the next step. Audience: ${a}. Each should feel like a natural, warm handoff.` },
    ],
  },
];

export const aboutOrgData: Section[] = [
  {
    id: "about_headline",
    title: "Headline",
    subtitle: "Who are you? Establish USP or personality",
    tag: "required",
    goal: "Hook attention and establish the brand's USP or personality with an inspiring headline",
    tip: "Organizations can be straightforward about the page title but shouldn't miss the opportunity to lead with a powerful, inspiring headline.",
    prompts: [
      { label: "Headline options", text: (c, b, a) => `Write 8 About page headline options for ${c} (organization/brand, audience: ${a}). Bold, inspiring, and personality-forward. Should feel like a brand statement, not a page title. Mix USP-led, mission-led, and challenge-the-status-quo angles.` },
      { label: "Headline + mission pair", text: (c, b, a) => `Write 4 headline and mission statement pairs for ${c}'s About page. Audience: ${a}. The headline is bold and brand-forward. The mission statement (1–2 sentences) follows, communicating the impact they're here to make.` },
    ],
  },
  {
    id: "about_mission",
    title: "Mission",
    subtitle: "What impact are you here to make?",
    tag: "required",
    goal: "Communicate the larger purpose of the organization, challenge the status quo, and define the impact you hope to make",
    tip: "This is organization-focused — how YOU want to show up in the world, not just what your product does.",
    prompts: [
      { label: "Mission statement", text: (c, b, a) => `Write 3 mission statement variations for ${c}'s About page. Audience: ${a}. Each should: communicate the greater purpose of the brand, touch on the impact they hope to make, and optionally challenge the status quo. Organization-focused — not product-focused.` },
      { label: "Challenge the status quo", text: (c, b, a) => `Write an opening for ${c}'s About page that challenges what's broken in their industry. Audience: ${a}. Call out the problem clearly — then position ${c} as the organization leading the change. 2–3 short paragraphs.` },
    ],
  },
  {
    id: "about_story",
    title: "Story",
    subtitle: "Company background · founding · evolution · vision",
    tag: "required",
    goal: "Share the brand's founding story — how it started, how it evolved, what it has accomplished, where it's heading",
    tip: "Can be a detailed journey or a founder's story if there's a public personality behind the brand.",
    prompts: [
      { label: "Story structure questions", text: (c, b, a) => `I'm writing the company story for ${c}'s About page. Give me 12 questions to ask my client that will uncover: why the organization was founded, what they've overcome, key milestones, and where they're heading. Focus on emotional, specific, and memorable details that will resonate with ${a}.` },
      { label: "Founding story draft", text: (c, b, a) => `Write a founding story for ${c}'s About page. Audience: ${a}. Cover: what problem they saw, why they decided to do something about it, and the early days of building. 3–4 short paragraphs. [FILL IN any client details you have]` },
      { label: "Evolution + milestones", text: (c, b, a) => `Write a "how we've grown" section for ${c}'s About page. Audience: ${a}. Cover key milestones, pivots, and defining moments that show the brand's evolution. 2–3 paragraphs. [FILL IN client timeline details]` },
    ],
  },
  {
    id: "about_method",
    title: "Method / values / culture",
    subtitle: "Company values · work culture · philosophy",
    tag: "optional",
    goal: "Humanize the brand by showing the people, practices, and values behind the organization",
    tip: "This is where you show what makes your organization's culture different — values, behind-the-scenes, unique practices.",
    prompts: [
      { label: "Values copy", text: (c, b, a) => `Write copy for ${c}'s About page values section. Audience: ${a}. 3–4 core organizational values. For each: a short name, a 1-sentence description of what it means in practice. Feel lived-in, not corporate.` },
      { label: "Culture/philosophy copy", text: (c, b, a) => `Write a "how we work" or philosophy section for ${c}'s About page. Audience: ${a}. 2–3 paragraphs capturing the culture, values, and unique approach behind the organization. Should feel humanizing — put a face on the brand.` },
    ],
  },
  {
    id: "about_team",
    title: "Team",
    subtitle: "Put faces and names to the brand",
    tag: "optional",
    goal: "Make the buying experience more personal — customers appreciate organizations that showcase the people behind them",
    tip: "Even 3–4 team bios go a long way. Focus on personality, not just job title.",
    prompts: [
      { label: "Team bio template", text: (c, b, a) => `Write a team bio template for ${c}'s About page that I can adapt for each team member. It should include: name, role, a 2–3 sentence description that balances professional credibility with personality, and 1 fun personal detail. Audience reading this: ${a}. Warm and approachable tone.` },
      { label: "Team section headline", text: (c, b, a) => `Write 5 team section headline options for ${c}'s About page. Audience: ${a}. More interesting than "Meet the team" — on-brand, warm, and personality-forward.` },
    ],
  },
  {
    id: "about_cta",
    title: "CTA",
    subtitle: "Where do I start? Feature best offers or a free first step",
    tag: "required",
    goal: "Give the reader a clear and confident next move — feature best services or a low-commitment first step",
    tip: "Can be a single CTA or 2–3 options. If you offer products/services, feature 1–2 best ones here.",
    prompts: [
      { label: "CTA section copy", text: (c, b, a) => `Write a CTA section for ${c}'s About page. Audience: ${a}. Include a closing line that leads naturally into the CTA, a section headline, and 1–3 specific next steps. Confident and warm — not pushy.` },
      { label: "Closing line options", text: (c, b, a) => `Write 8 closing line options for ${c}'s About page — the final sentence before the CTA that wraps up the story and invites the reader to take the next step. Audience: ${a}. Natural, warm handoff.` },
    ],
  },
];
