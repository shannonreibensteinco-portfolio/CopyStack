export type Prompt = {
  label: string;
  text: (c: string, b: string, a: string) => string;
};

export type Section = {
  id: string;
  title: string;
  subtitle: string;
  tag: "required" | "optional";
  goal: string;
  tip?: string;
  prompts: Prompt[];
  threepart?: { num: string; name: string; cls: string; desc: string }[];
  formula?: boolean;
  fiveSteps?: { num: string; name: string; desc: string }[];
  blogTypes?: { name: string; desc: string }[];
  formatting?: { tag: string; role: string; desc: string }[];
  seoNotes?: { point: string; desc: string }[];
  ctaTypes?: { name: string; desc: string }[];
};

export const homeData: Section[] = [
  {
    id: "headline",
    title: "Headline",
    subtitle: "Pre-hook · headline · CTA",
    tag: "required",
    goal: "Hook attention, communicate USP, confirm the reader is in the right place",
    tip: "The CTA is NOT a buy — it's an easy first step. Newsletter signup, free gift, quote, free trial, etc.",
    threepart: [
      { num: "Part 1", name: "Pre-hook", cls: "h1", desc: "5–10 words that stop the scroll before the main headline. Calls out the audience or teases the tension." },
      { num: "Part 2", name: "Headline", cls: "h2", desc: "The big bold hook — communicates a benefit, pain point, emotion, or result." },
      { num: "Part 3", name: "CTA", cls: "h3", desc: 'A button for the easy first step. Not "buy now" — think "get the free guide", "start your trial", "book a call".' },
    ],
    prompts: [
      { label: "Pre-hook ideas", text: (c, b, a) => `Write 10 pre-hook options for ${c}'s home page hero — a short line (5–10 words) above the main headline. It should stop the scroll, call out ${a}, or tease the core tension. Brand type: ${b}.` },
      { label: "Headline options", text: (c, b, a) => `Write 10 main headline options for ${c}'s home page. Audience: ${a}. Brand type: ${b}. Mix: 3 benefit-led, 3 pain-led, 2 curiosity-led, 2 bold-claim. No generic phrases.` },
      { label: "CTA button copy", text: (c, b, a) => `Write 10 CTA button options for ${c}'s home page hero — a low-commitment first step, not a purchase. Audience: ${a}. Vary: outcome-focused, curiosity-driven, urgency-based.` },
      { label: "Full hero — all 3 parts", text: (c, b, a) => `Write 3 complete hero sets for ${c}'s home page. Each: (1) pre-hook 5–10 words calling out ${a}, (2) main headline, (3) CTA button label — low-commitment first step. Brand type: ${b}. One benefit-led, one pain-led, one bold-claim.` },
      { label: "Pre-hook + headline pairs", text: (c, b, a) => `Write 6 pre-hook and headline pairs for ${c}'s home page. The pre-hook (5–10 words) should set up the headline so they work as one unit. Audience: ${a}. Brand type: ${b}.` },
      { label: "Critique my draft", text: (c, b, a) => `Critique this three-part hero for ${c}'s home page (${b}, audience: ${a}): pre-hook, headline, and CTA. What's working, what's weak, and improved rewrites for each. [PASTE YOUR DRAFT HERE]` },
    ],
  },
  {
    id: "credibility",
    title: "Credibility banner",
    subtitle: "Client logos · media appearances · endorsements",
    tag: "required",
    goal: 'Make prospects think "this brand is legit" — fast',
    tip: "Think: as seen in, trusted by, worked with. Scan your client's history for anything impressive.",
    prompts: [
      { label: "Banner headline copy", text: (c, b, a) => `Write 5 short credibility banner headline options for ${c}'s website — "as seen in", "trusted by", or a stat proving authority. Audience: ${a}. Under 6 words each.` },
      { label: "Dig for credentials", text: (c, b, a) => `I'm writing copy for ${c} (${b}, serving ${a}). List 10 types of credibility signals to ask my client about — media, partnerships, numbers, awards, results — for their credibility banner.` },
    ],
  },
  {
    id: "bio",
    title: "Bio / brand mission",
    subtitle: "Personality brand: introduce the person · Organization: state the mission",
    tag: "optional",
    goal: "Build credibility and authority through story and mission",
    tip: "Keep this short — 3–5 sentences max. It's a preview, not the full About page.",
    prompts: [
      { label: "Personality brand bio", text: (c, b, a) => `Write a short home page bio for ${c} (personality brand, audience: ${a}). 3–5 sentences: who they are, what they do, why it matters. Focus on credibility and mission. Two variations — warm/story-led and authority-led.` },
      { label: "Brand mission (org)", text: (c, b, a) => `Write a 2–3 sentence brand mission for ${c}'s home page. Brand type: ${b}. Audience: ${a}. What they do, who they serve, what makes them different — without sounding like every other brand.` },
      { label: "Credibility angles", text: (c, b, a) => `I'm writing a home page bio for ${c}. List 8 credibility signals to ask my client — numbers, milestones, media, client wins — that would feel authoritative to ${a}.` },
    ],
  },
  {
    id: "indoctrination",
    title: "Indoctrination",
    subtitle: "Empathize with the problem · build desire for a solution",
    tag: "required",
    goal: "Make the reader feel understood and create desire for the solution",
    tip: "Use story, education, or data. Meet them where they are — then lead them toward the solution.",
    prompts: [
      { label: "Pain point empathy", text: (c, b, a) => `Write an indoctrination section for ${c}'s home page. Make ${a} feel deeply understood — name their biggest frustration, pivot toward the possibility of a solution. Empathetic, conversational. 3–4 short paragraphs.` },
      { label: "Customer pain list", text: (c, b, a) => `List the 10 most common pain points ${a} experience that ${c} (${b}) solves. Practical frustrations and emotional struggles. I'll use these for the home page indoctrination section.` },
      { label: "Story-led opening", text: (c, b, a) => `Write a story-led indoctrination opening for ${c}'s home page. Open with a relatable scenario ${a} will recognize, empathize with their struggle, hint at a better way — without revealing the solution. 80–100 words.` },
    ],
  },
  {
    id: "usp",
    title: "USP section",
    subtitle: "Expand on what makes you uniquely different",
    tag: "required",
    goal: "Articulate what makes this brand impossible to substitute",
    formula: true,
    prompts: [
      { label: "USP statement", text: (c, b, a) => `Using this framework: "[Brand] helps [audience] with [problem] achieve [benefit] through [unique solution]" — write 5 USP variations for ${c}. Brand type: ${b}. Audience: ${a}. Specific, clear, memorable.` },
      { label: "Differentiation angles", text: (c, b, a) => `I'm writing USP copy for ${c} (${b}, serving ${a}). List 10 questions to ask my client to find their true differentiators — specific problem, unique solution, specific audience.` },
      { label: "USP expansion copy", text: (c, b, a) => `Write a USP section for ${c}'s home page. Audience: ${a}. Brand type: ${b}. In 2–3 short paragraphs, explain what makes them completely different. Specific, not generic.` },
    ],
  },
  {
    id: "features",
    title: "Features / services / benefits",
    subtitle: "3–4 core concepts — features → benefits",
    tag: "required",
    goal: 'Clearly answer "how can you help me?" with proof of value',
    tip: 'Use the "...so you can..." trick: feature → so you can → benefit.',
    prompts: [
      { label: "Features → benefits", text: (c, b, a) => `List the 5 most important features/services ${c} offers. For each, write a benefit using "so you can": "[Feature] so you can [desired result/emotion]". Audience: ${a}. Brand type: ${b}.` },
      { label: "Benefit bullets", text: (c, b, a) => `Write 8 benefit-focused bullets for ${c}'s home page features section. For each, include a specific scenario and emotion ${a} wants to experience. Vivid and specific — no vague promises.` },
      { label: "Feature card copy", text: (c, b, a) => `Write 3 feature/service cards for ${c}'s home page. Each: a short title (3–5 words), a benefit subheadline (one sentence), and 2 supporting sentences. Audience: ${a}.` },
    ],
  },
  {
    id: "socialproof",
    title: "Social proof",
    subtitle: "Testimonials · social comments · customer numbers",
    tag: "required",
    goal: 'Answer "why should I listen to you?" with real validation',
    tip: 'The most persuasive testimonials name a specific result. Ask your client for outcome-focused testimonials.',
    prompts: [
      { label: "Section headline", text: (c, b, a) => `Write 5 social proof section headlines for ${c}'s home page — something that frames the testimonials that follow. More specific and branded than "what our clients say". Audience: ${a}.` },
      { label: "What proof to seek", text: (c, b, a) => `I'm writing the social proof section for ${c}'s home page. List 8 specific types of proof to ask my client for — testimonials, data, screenshots, outcomes — most persuasive to ${a}.` },
      { label: "Proof narrative line", text: (c, b, a) => `Write a social proof one-liner for ${c}'s home page — a sentence that summarizes their track record before the testimonials. Include a placeholder stat. Audience: ${a}.` },
    ],
  },
  {
    id: "getstarted",
    title: "How to get started",
    subtitle: 'Single CTA or multi-option "work with me" section',
    tag: "required",
    goal: "Give people a clear, low-friction first move",
    tip: 'Title it "Work With Me", "Get Started", or something on-brand. Can be a single CTA or 2–3 pathway options.',
    prompts: [
      { label: "Section copy", text: (c, b, a) => `Write a "how to get started" section for ${c}'s home page. Section headline + 1–3 pathway options for ${a}. Each: a name, a 1-sentence description, and a CTA button label. Warm and inviting.` },
      { label: "CTA variations", text: (c, b, a) => `Write 10 CTA button options for ${c}'s "get started" section. Audience: ${a}. Avoid generic phrases — specific to the action and value they'll get.` },
    ],
  },
  {
    id: "content",
    title: "Content / connect / community",
    subtitle: "Social links · recent posts · press · blog",
    tag: "optional",
    goal: "Build trust, give reasons to stick around, invite connection",
    tip: "Link to social channels, feature recent content, show press. Optional but powerful for personality brands.",
    prompts: [
      { label: "Section headline", text: (c, b, a) => `Write 3 headline options for ${c}'s home page content/community section featuring blog, social, or YouTube. Audience: ${a}. Feel like an invitation, not a navigation label.` },
      { label: "Content CTA copy", text: (c, b, a) => `Write short CTAs for ${c}'s home page content section — subscribe prompts, "join the community" lines, "watch the latest" CTAs. Audience: ${a}. 6 options across different content types.` },
    ],
  },
];
