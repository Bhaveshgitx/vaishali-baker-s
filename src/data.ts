export interface Product {
  id: string;
  name: string;
  category: 'cakes' | 'new-launch' | 'pastries' | 'snacks-box';
  price: number;
  unit: string;
  badge?: 'Bestseller' | 'New Arrival' | 'Chef Special' | 'Get 10% Off' | 'Must Try' | 'Gift Pack';
  badgeColor?: 'pink' | 'gold' | 'teal';
  description: string;
  image: string;
  features: string[];
  isVeg: boolean;
}

export const PRODUCTS: Product[] = [
  // 1. Cakes Category
  {
    id: 'cake-truffle',
    name: 'Premium Chocolate Truffle Cake',
    category: 'cakes',
    price: 550,
    unit: '0.5 kg',
    badge: 'Bestseller',
    badgeColor: 'pink',
    description: 'Decadent multi-layered moist chocolate sponge sandwiched with dark chocolate ganache, finished with a mirror-glaze truffle coat.',
    image: '/src/assets/images/cakes_special_1779797201179.png',
    features: ['Real premium dark chocolate', 'Moist layers', 'Includes candle & spatula'],
    isVeg: true,
  },
  {
    id: 'cake-mango-maharaja',
    name: 'Mango Maharaja Cake',
    category: 'cakes',
    price: 550,
    unit: '0.5 kg',
    badge: 'Bestseller',
    badgeColor: 'pink',
    description: 'A decadent fresh cream cake made with pure delicious Ratnagiri Alphonso mango pulp and premium light vanilla sponge.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&q=80&w=600',
    features: ['100% pure mango pulp', 'Fruity vanilla layers', 'Extremely light texture'],
    isVeg: true,
  },
  {
    id: 'cake-swan-royal',
    name: 'Swan Silhouette Royal Cocoa Cake',
    category: 'cakes',
    price: 600,
    unit: '0.5 kg',
    badge: 'Chef Special',
    badgeColor: 'gold',
    description: 'Our signatures! Exquisite chocolate cake topped with hand-sculpted elegant white chocolate swans and premium gold foil dust.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600',
    features: ['Intricate swan topper', 'Rich dark cocoa base', 'Gorgeous table center'],
    isVeg: true,
  },
  {
    id: 'cake-redvelvet',
    name: 'Red Velvet Royale Birthday Cake',
    category: 'cakes',
    price: 650,
    unit: '0.5 kg',
    badge: 'Chef Special',
    badgeColor: 'gold',
    description: 'Beautiful striking crimson cocoa layers iced with custom smooth cream cheese frosting, dotted with crumb decals.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=600',
    features: ['Imported cream cheese', 'Perfect tart counter-sweetness', 'Moist crumble base'],
    isVeg: true,
  },

  // 2. New Launch Category
  {
    id: 'new-nutella-hazelnut',
    name: 'Nutella Frosting Hazelnut Cake',
    category: 'new-launch',
    price: 580,
    unit: '0.5 kg',
    badge: 'New Arrival',
    badgeColor: 'teal',
    description: 'Sumptuous chocolate cake frosted fully in authentic Nutella spread, sprinkled with heavy toasted hazelnuts.',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80&w=600',
    features: ['Original Ferrero Nutella', 'Heavily toasted hazelnuts', 'Rich buttery glaze'],
    isVeg: true,
  },
  {
    id: 'new-biscoff-fudge',
    name: 'Lotus Biscoff Crumble Brownie',
    category: 'new-launch',
    price: 110,
    unit: 'per piece',
    badge: 'New Arrival',
    badgeColor: 'teal',
    description: 'Dense fudgy brownie swirled with original Lotus cookie butter spread and topped with a whole speculoos crunchy biscuit.',
    image: '/src/assets/images/brownies_special_1779797159768.png',
    features: ['Imported Lotus Speculoos', 'Chewy fudgy texture', 'Perfect tea pairing'],
    isVeg: true,
  },
  {
    id: 'new-salted-caramel',
    name: 'Sea Salt Caramel Cupcake',
    category: 'new-launch',
    price: 85,
    unit: 'per piece',
    badge: 'New Arrival',
    badgeColor: 'teal',
    description: 'Brown sugar sponge cake capped with standard salted butter dulce-de-leche swirls and shiny gold dust flakes.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=600',
    features: ['Handcrafted caramel core', 'Melted sea salt grains', 'Golden pearl garnish'],
    isVeg: true,
  },

  // 3. Pastries Category
  {
    id: 'pastry-milky-angel',
    name: 'Milky Angel Pastry',
    category: 'pastries',
    price: 70,
    unit: 'per piece',
    badge: 'New Arrival',
    badgeColor: 'teal',
    description: 'Soft melt-in-the-mouth sponge pastry layered in white chocolate rich whipped cream and dark premium cocoa dusting.',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=600',
    features: ['Grated white chocolate', 'Airy soft moist sponge', 'Sized perfectly for quick bites'],
    isVeg: true,
  },
  {
    id: 'pastry-dark-truffle',
    name: 'Dark Chocolate Truffle Wedge',
    category: 'pastries',
    price: 80,
    unit: 'per piece',
    badge: 'Bestseller',
    badgeColor: 'pink',
    description: 'Single portion slice of our premium dark truffle layered sponge, layered with hot chocolate fudge drizzle.',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=600',
    features: ['Belgian glaze', 'Eggless baking', 'Pure cocoa butter cream'],
    isVeg: true,
  },
  {
    id: 'pastry-red-velvet',
    name: 'Red Velvet Cheese Slice',
    category: 'pastries',
    price: 85,
    unit: 'per piece',
    badge: 'Must Try',
    badgeColor: 'gold',
    description: 'Handheld creamy slice of the signature Red Velvet cake with deep swirls of tangy luxury cream cheese.',
    image: 'https://images.unsplash.com/photo-1616031037011-087000171abe?auto=format&fit=crop&q=80&w=600',
    features: ['Premium cream cheese', 'Moist texture layers', 'Elegant visual garnish'],
    isVeg: true,
  },

  // 4. Snacks Box Category
  {
    id: 'box-assorted-brownies',
    name: 'Signature Assorted Brownies Box (Pack of 4)',
    category: 'snacks-box',
    price: 320,
    unit: 'per box',
    badge: 'Get 10% Off',
    badgeColor: 'pink',
    description: 'Includes 2 Walnut Fudge Brownies & 2 Double Chocolate Drizzle slices in our bespoke golden rigid presentation packaging.',
    image: '/src/assets/images/brownies_special_1779797159768.png',
    features: ['Bespoke protective case', 'Great birthday gift layout', 'Includes customizable greetings card'],
    isVeg: true,
  },
  {
    id: 'box-cupcake-party',
    name: 'Gourmet Pink Party Cupcakes Platter (Pack of 6)',
    category: 'snacks-box',
    price: 390,
    unit: 'per box',
    badge: 'Gift Pack',
    badgeColor: 'gold',
    description: 'Curated box of six fluffy cupcakes topped with magnificent pastel pink buttercream and golden sugar pearls.',
    image: '/src/assets/images/cupcakes_special_1779797178372.png',
    features: ['Perfect table highlight', '6 individually padded slots', 'Free customized card tags'],
    isVeg: true,
  },
  {
    id: 'box-high-tea',
    name: 'Choco-Lovers High Tea Combo Box',
    category: 'snacks-box',
    price: 300,
    unit: 'per box',
    badge: 'Must Try',
    badgeColor: 'gold',
    description: 'An elegant personal treat containing 1 Milky Angel Pastry, 1 Walnut Brownie, and 1 Chocolate Fudge Cupcake.',
    image: 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&q=80&w=600',
    features: ['Great for home hosting', 'Individually wrapped', 'Saves 15% vs individual pricing'],
    isVeg: true,
  }
];

export const DELIVERY_ZONES = [
  {
    name: 'Navi Mumbai',
    areas: ['Vashi', 'Nerul', 'Koparkhairane', 'Belapur', 'Kharghar', 'Ghansoli', 'Airoli'],
    description: 'Carefully packed cake boxes delivered in air-conditioned courier transit to protect frosting.'
  },
  {
    name: 'Central Mumbai',
    areas: ['Kanjurmarg', 'Bhandup', 'Mulund', 'Ghatkopar', 'Vikhroli', 'Sion', 'Kurla', 'Dadrar'],
    description: 'Local lightning delivery from our Kanjurmarg West workspace. Freshly out of the oven.'
  },
  {
    name: 'Western Mumbai',
    areas: ['Andheri', 'Bandra', 'Borivali', 'Malad', 'Goregaon', 'Juhu', 'Santacruz'],
    description: 'Reliable doorstep delivery in specialized insulation boxes to retain ideal chilled texture.'
  }
];

export const CONTACT_INFO = {
  owner: 'Vaishali Nilesh Sarang',
  brand: 'Vaishali Bakers',
  phone: '9892047995',
  phoneDisplay: '+91 9892047995',
  email: 'vaishalisarang1985@gmail.com',
  address: '232/B-3, Dockyard Colony, Kanjurmarg (W), Mumbai 400078',
  hours: '8:00 AM — 11:00 PM',
  whatsappLink: 'https://wa.me/919892047995',
};
