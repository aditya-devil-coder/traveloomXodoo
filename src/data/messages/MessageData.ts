// ─── Chat List ──────────────────────────────────────────────────────────────
export const chatList = [
  {
    id: 1,
    name: 'Traveloop Support',
    avatar: 'support',
    lastMessage: 'Hi! How can we help you plan your trip today?',
    time: 'Now',
    unread: 1,
    isOnline: true,
    type: 'support',
    userId: null,
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    avatar: 'user',
    lastMessage: 'Bro the Spiti Valley route I shared is 🔥, you should try it!',
    time: '11:45 AM',
    unread: 2,
    isOnline: true,
    type: 'traveler',
    userId: 'arjun_mehta',
    location: 'Mumbai, Maharashtra',
    tripsShared: 12,
    followers: 3400,
    blogTitle: 'Spiti Valley in Winter – The Complete Guide',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    avatar: 'user',
    lastMessage: 'Yes! Kasol is totally worth it in October. Crowds are less 🍂',
    time: 'Yesterday',
    unread: 0,
    isOnline: false,
    type: 'traveler',
    userId: 'priya_sharma',
    location: 'Delhi, India',
    tripsShared: 8,
    followers: 1900,
    blogTitle: "Kasol & Kheerganga Trek – A Solo Female Traveler's Diary",
  },
  {
    id: 4,
    name: 'Rohan Das',
    avatar: 'user',
    lastMessage: 'The budget I mentioned in the vlog is accurate, around ₹8k for 5 days',
    time: 'Mon',
    unread: 0,
    isOnline: true,
    type: 'traveler',
    userId: 'rohan_das',
    location: 'Bengaluru, Karnataka',
    tripsShared: 21,
    followers: 7200,
    blogTitle: 'Backpacking Rajasthan on a ₹500/Day Budget',
  },
  {
    id: 5,
    name: 'Sneha Kapoor',
    avatar: 'user',
    lastMessage: 'Coorg is magical in monsoon, just carry a good rain jacket! ☔',
    time: 'Sun',
    unread: 1,
    isOnline: false,
    type: 'traveler',
    userId: 'sneha_kapoor',
    location: 'Pune, Maharashtra',
    tripsShared: 5,
    followers: 980,
    blogTitle: 'Coorg in Monsoon – Hidden Waterfalls & Coffee Estates',
  },
];

// ─── Author → userId map (blog author name se userId milega) ────────────────
export const authorToUserIdMap: Record<string, string> = {
  'Arjun Mehta': 'arjun_mehta',
  'Priya Sharma': 'priya_sharma',
  'Rohan Das': 'rohan_das',
  'Sneha Kapoor': 'sneha_kapoor',
  // Blog authors from blogdata
  'Riya Sharma': 'riya_sharma',
  'Priya Nair': 'priya_nair',
  'Vikram Singh': 'vikram_singh',
  'Kavya Menon': 'kavya_menon',
  'Aditya Kulkarni': 'aditya_kulkarni',
  'Neha Joshi': 'neha_joshi',
  'Rahul Desai': 'rahul_desai',
  'Ananya Krishnan': 'ananya_krishnan',
  'Sameer Qureshi': 'sameer_qureshi',
  'Meera Iyer': 'meera_iyer',
};

// ─── Build chat object from blog author dynamically ─────────────────────────
export const buildChatFromBlog = (blog: {
  author: string;
  title: string;
  category: string;
}) => {
  const userId = authorToUserIdMap[blog.author] ?? blog.author.toLowerCase().replace(/\s+/g, '_');
  // Check if already in chatList
  const existing = chatList.find(c => c.userId === userId);
  if (existing) return existing;

  // Build a fresh chat object for this author
  return {
    id: userId,
    name: blog.author,
    avatar: 'user',
    lastMessage: `Hey! Thanks for reading my blog on ${blog.title} 😊`,
    time: 'Now',
    unread: 0,
    isOnline: true,
    type: 'traveler',
    userId,
    location: 'India',
    tripsShared: 0,
    followers: 0,
    blogTitle: blog.title,
  };
};

// ─── Traveler Messages ───────────────────────────────────────────────────────
export const travelerMessages: Record<string, any[]> = {
  arjun_mehta: [
    {
      id: '1',
      text: 'Hey! I saw your comment on my Spiti Valley blog 🙌 Thanks for the love!',
      isUser: false,
      time: '11:30 AM',
    },
    {
      id: '2',
      text: 'Bhai tera vlog dekh ke trip plan karna shuru kar diya 😂 Kaunsa month best hai?',
      isUser: true,
      time: '11:38 AM',
    },
    {
      id: '3',
      text: 'Bro the Spiti Valley route I shared is 🔥, you should try it! October is perfect — roads open, snow starts, not too crowded.',
      isUser: false,
      time: '11:45 AM',
    },
  ],
  priya_sharma: [
    {
      id: '1',
      text: 'Hi! Saw you liked my Kasol diary. Happy to help if you have any questions 😊',
      isUser: false,
      time: 'Yesterday 3:00 PM',
    },
    {
      id: '2',
      text: 'October mein Kasol safe hai? Crowds kitne honge?',
      isUser: true,
      time: 'Yesterday 3:20 PM',
    },
    {
      id: '3',
      text: 'Yes! Kasol is totally worth it in October. Crowds are less 🍂 Perfect for trekking to Kheerganga too!',
      isUser: false,
      time: 'Yesterday 3:25 PM',
    },
  ],
  rohan_das: [
    {
      id: '1',
      text: 'Aye! Rohan here. Thanks for following my Rajasthan series 🐪',
      isUser: false,
      time: 'Mon 9:00 AM',
    },
    {
      id: '2',
      text: 'Yaar tera budget realistic hai kya? ₹500/day mein kaise manage kiya?',
      isUser: true,
      time: 'Mon 10:15 AM',
    },
    {
      id: '3',
      text: 'The budget I mentioned in the vlog is accurate, around ₹8k for 5 days. Shared dorms + local dhabas + state buses = magic combo 🙏',
      isUser: false,
      time: 'Mon 10:30 AM',
    },
  ],
  sneha_kapoor: [
    {
      id: '1',
      text: 'Hey there! Saw your message on my Coorg vlog 🌿 So glad it inspired you!',
      isUser: false,
      time: 'Sun 2:00 PM',
    },
    {
      id: '2',
      text: 'Monsoon mein Coorg theek rahega? Safety kaisi hai roads pe?',
      isUser: true,
      time: 'Sun 2:10 PM',
    },
    {
      id: '3',
      text: 'Coorg is magical in monsoon, just carry a good rain jacket! ☔ Roads can be slippery so avoid two-wheelers in heavy rain.',
      isUser: false,
      time: 'Sun 2:18 PM',
    },
  ],
};

// ─── Generate initial messages when opening from a blog ─────────────────────
export const generateBlogContextMessages = (
  authorName: string,
  blogTitle: string,
  category: string,
) => {
  const firstName = authorName.split(' ')[0];
  return [
    {
      id: 'ctx_1',
      text: `Hey! 👋 I saw you tapped "Chat" from my blog — "${blogTitle}". So happy you found it useful!`,
      isUser: false,
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    },
    {
      id: 'ctx_2',
      text: `Feel free to ask me anything about the trip — budget, stay, routes, food, everything! I love helping fellow travellers plan better 🗺️`,
      isUser: false,
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    },
  ];
};

// ─── Traveler Quick Replies ──────────────────────────────────────────────────
export const travelerQuickReplies = [
  { id: 1, icon: 'attach-money', text: 'What was your total budget?' },
  { id: 2, icon: 'calendar-today', text: 'Best time to visit?' },
  { id: 3, icon: 'hotel', text: 'Where did you stay?' },
  { id: 4, icon: 'directions-bus', text: 'How did you get there?' },
  { id: 5, icon: 'restaurant', text: 'Food recommendations?' },
  { id: 6, icon: 'warning', text: 'Any safety tips?' },
  { id: 7, icon: 'photo-camera', text: 'Best spots for photos?' },
  { id: 8, icon: 'content-copy', text: 'Can I copy your itinerary?' },
];

export const travelerAutoReplies: Record<string, string> = {
  'What was your total budget?':
    "Check out the budget section in my blog — I've broken it down day by day! Happy to help you estimate for your trip too.",
  'Best time to visit?':
    "I mentioned the best season in my vlog! Each destination has a sweet spot. What's your flexibility on dates?",
  'Where did you stay?':
    'I stayed at a mix of hostels and homestays — all mentioned with links in my blog description. Highly recommend homestays for authentic experience!',
  'How did you get there?':
    'I took the overnight bus/train — affordable and comfortable. Check my blog for exact routes and booking tips!',
  'Food recommendations?':
    "Local dhabas are the best! I've listed my top 3-4 food spots in the blog. Don't miss the local specialty 😋",
  'Any safety tips?':
    "Stay on marked trails, keep emergency contacts saved, and always inform someone of your itinerary. I've covered this in detail in my post!",
  'Best spots for photos?':
    'Golden hour at the viewpoint is unbeatable! Check the "photography guide" section of my blog for exact coordinates 📍',
  'Can I copy your itinerary?':
    "Of course! Go to my blog and tap \"Copy Itinerary\" — it'll clone the full plan to your Traveloop account 🗺️",
};

// ─── Support / Predefined Questions ─────────────────────────────────────────
export const predefinedQuestions = [
  { id: 1, icon: 'book-online', text: 'How do I make a booking?' },
  { id: 2, icon: 'cancel', text: 'How do I cancel my booking?' },
  { id: 3, icon: 'payment', text: 'What payment methods are accepted?' },
  { id: 4, icon: 'female', text: 'How does Female Solo filter work?' },
  { id: 5, icon: 'star', text: 'How are trips rated?' },
  { id: 6, icon: 'local-offer', text: 'Are there any ongoing offers?' },
  { id: 7, icon: 'help', text: 'I have a problem with my trip plan' },
  { id: 8, icon: 'account-circle', text: 'How to update my profile?' },
];

export const autoReplies: Record<string, string> = {
  'How do I make a booking?':
    'To plan a trip, go to Home → Tap "Plan New Trip" → Add your cities and dates → Search activities → Save your itinerary!',
  'How do I cancel my booking?':
    "Go to My Trips → Select your trip → Tap \"Delete Trip\". Note: if you've booked external stays, cancel those directly with the provider.",
  'What payment methods are accepted?':
    'We accept UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, and Net Banking. All payments are 100% secure.',
  'How does Female Solo filter work?':
    'The Female Solo filter shows only verified female-friendly destinations and community blogs from solo female travelers.',
  'How are trips rated?':
    'Trips and blogs are rated by the community based on accuracy, detail, photos, and helpfulness of the itinerary.',
  'Are there any ongoing offers?':
    'Check the Discover tab for featured blogs and seasonal trip deals. New offers drop every weekend! 🎉',
  'I have a problem with my trip plan':
    "We're sorry to hear that! Please describe the issue and our team will assist you. For urgent help, tap the phone icon above.",
  'How to update my profile?':
    'Go to the Profile tab → Tap the edit icon → Update your name, photo, or travel preferences → Save.',
};