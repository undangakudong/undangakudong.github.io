// UNDANG AKU DONG (V5 - EXCLUSIVE WEDDING EDITION)
// Setiap tema memiliki 'layoutEngine' yang berbeda total secara visual, tata letak kartu, sampul, dan galeri.

const UNDANGAKUDONG_THEMES = [
  {
    id: 'vogue-editorial-noir',
    name: 'Vogue-Editorial-Noir',
    category: 'editorial',
    badge: 'Magazine Style',
    layoutEngine: 'editorial',
    priceOriginal: 'Rp 225.000',
    pricePromo: 'Rp 59.000',
    description: 'Gaya majalah fashion Vogue dengan foto full-bleed, tipografi serif besar rata kiri, dan galeri grid asimetris.',
    palette: {
      bgOuter: '#141414',
      bgMain: '#FAF8F5',
      bgCard: '#FFFFFF',
      primary: '#18181B',
      accent: '#B48A4E',
      textDark: '#18181B',
      textMuted: '#52525B',
      border: '#E4E4E7'
    },
    fonts: { display: "'Playfair Display', serif", script: "'Alex Brush', cursive", sans: "'Plus Jakarta Sans', sans-serif" }
  },
  {
    id: 'wax-seal-envelope',
    name: 'Wax-Seal-Envelope',
    category: 'envelope',
    badge: '3D Amplop Surat',
    layoutEngine: 'envelope',
    priceOriginal: 'Rp 235.000',
    pricePromo: 'Rp 65.000',
    description: 'Sampul pembuka berbentuk amplop surat fisik lengkap dengan segel lilin (Wax Seal) yang terbuka saat diklik.',
    palette: {
      bgOuter: '#2B211A',
      bgMain: '#F5EFE6',
      bgCard: '#FFFDF9',
      primary: '#8B2635',
      accent: '#C59B48',
      textDark: '#2C1E16',
      textMuted: '#6E5A4F',
      border: '#DFD3C3'
    },
    fonts: { display: "'Cormorant Garamond', serif", script: "'Great Vibes', cursive", sans: "'Plus Jakarta Sans', sans-serif" }
  },
  {
    id: 'java-keraton-royal',
    name: 'Java-Keraton-Royal',
    category: 'adat',
    badge: 'Adat Jawa Eksklusif',
    layoutEngine: 'javanese',
    priceOriginal: 'Rp 225.000',
    pricePromo: 'Rp 59.000',
    description: 'Nuansa hitam-emas keraton dengan ornamen Gunungan Wayang besar, pola batik kawung halus, dan bingkai kubah Jawa.',
    palette: {
      bgOuter: '#090806',
      bgMain: '#120F0C',
      bgCard: '#1C1712',
      primary: '#D4AF37',
      accent: '#F3D06B',
      textDark: '#F8F4EC',
      textMuted: '#C7BBA8',
      border: 'rgba(212, 175, 55, 0.35)'
    },
    fonts: { display: "'Cinzel Decorative', serif", script: "'Cinzel', serif", sans: "'Plus Jakarta Sans', sans-serif" }
  },
  {
    id: 'botanical-glass-garden',
    name: 'Botanical-Glass-Garden',
    category: 'botanical',
    badge: 'Frosted Glass',
    layoutEngine: 'glass',
    priceOriginal: 'Rp 199.000',
    pricePromo: 'Rp 49.000',
    description: 'Latar foto taman bunga lembut dengan panel kaca transparan (Glassmorphism) dan kelopak daun melayang.',
    palette: {
      bgOuter: '#DCE8E0',
      bgMain: '#EDF5F0',
      bgCard: 'rgba(255, 255, 255, 0.65)',
      primary: '#23533A',
      accent: '#5B9279',
      textDark: '#163022',
      textMuted: '#466654',
      border: 'rgba(255, 255, 255, 0.8)'
    },
    fonts: { display: "'Cormorant Garamond', serif", script: "'Great Vibes', cursive", sans: "'Plus Jakarta Sans', sans-serif" }
  },
  {
    id: 'polaroid-love-scrapbook',
    name: 'Polaroid-Love-Scrapbook',
    category: 'aesthetic',
    badge: 'Scrapbook Estetik',
    layoutEngine: 'polaroid',
    priceOriginal: 'Rp 199.000',
    pricePromo: 'Rp 49.000',
    description: 'Gaya estetik anak muda dengan bingkai foto Polaroid miring, selotip washi tape, dan lini masa kisah cinta.',
    palette: {
      bgOuter: '#E6DDD3',
      bgMain: '#F7F2EB',
      bgCard: '#FFFFFF',
      primary: '#A85A48',
      accent: '#D49A89',
      textDark: '#362721',
      textMuted: '#756058',
      border: '#E5D9CE'
    },
    fonts: { display: "'Lora', serif", script: "'Alex Brush', cursive", sans: "'Plus Jakarta Sans', sans-serif" }
  },
  {
    id: 'islamic-emerald-dome',
    name: 'Islamic-Emerald-Dome',
    category: 'islami',
    badge: 'Walimah Syar’i',
    layoutEngine: 'islamic',
    priceOriginal: 'Rp 210.000',
    pricePromo: 'Rp 55.000',
    description: 'Arsitektur kubah masjid geometris, kaligrafi Bismillah di bagian atas, dan tata letak elegan tanpa foto berlebihan.',
    palette: {
      bgOuter: '#07241B',
      bgMain: '#0D382B',
      bgCard: '#134A3A',
      primary: '#E6C17A',
      accent: '#34D399',
      textDark: '#F0FDF4',
      textMuted: '#A7F3D0',
      border: 'rgba(230, 193, 122, 0.35)'
    },
    fonts: { display: "'Cinzel', serif", script: "'Playfair Display', serif", sans: "'Plus Jakarta Sans', sans-serif" }
  },
  {
    id: 'sunda-siger-ivory',
    name: 'Sunda-Siger-Ivory',
    category: 'adat',
    badge: 'Adat Sunda',
    layoutEngine: 'javanese',
    priceOriginal: 'Rp 215.000',
    pricePromo: 'Rp 55.000',
    description: 'Nuansa putih gading & emas mewah khas pengantin Sunda Siger dengan bingkai keraton dan tipografi klasik.',
    palette: {
      bgOuter: '#E5DFD5',
      bgMain: '#FAF8F4',
      bgCard: '#FFFFFF',
      primary: '#A67C37',
      accent: '#D4AF37',
      textDark: '#2B2116',
      textMuted: '#6E5E4F',
      border: 'rgba(166, 124, 55, 0.3)'
    },
    fonts: { display: "'Cinzel Decorative', serif", script: "'Great Vibes', cursive", sans: "'Plus Jakarta Sans', sans-serif" }
  },
  {
    id: 'paris-monochrome-chic',
    name: 'Paris-Monochrome-Chic',
    category: 'editorial',
    badge: 'Black & White',
    layoutEngine: 'editorial',
    priceOriginal: 'Rp 210.000',
    pricePromo: 'Rp 55.000',
    description: 'Konsep hitam-putih timeless ala pemotretan prewedding Paris dengan kontras tinggi dan tata letak editorial.',
    palette: {
      bgOuter: '#0A0A0A',
      bgMain: '#FFFFFF',
      bgCard: '#F4F4F5',
      primary: '#09090B',
      accent: '#71717A',
      textDark: '#09090B',
      textMuted: '#52525B',
      border: '#D4D4D8'
    },
    fonts: { display: "'Playfair Display', serif", script: "'Alex Brush', cursive", sans: "'Plus Jakarta Sans', sans-serif" }
  }
];
