import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: "1",
      title: "Culinary Delights of Delhi",
      category: "Food",
      description: " Delhi, the capital of India, not only boasts a rich history and culture but also offers a diverse and mouthwatering culinary experience. My journey to this gastronomic paradise was nothing short of delightful. The streets of Delhi are filled with the aroma of spices and the sizzle of street food vendors. One cannot visit Delhi without indulging in its famous street food. From the spicy golgappas that explode with flavor to the delectable chole bhature, the city offers a myriad of flavors to satisfy every palate.  The streets of Delhi are filled with the aroma of spices and the sizzle of street food vendors. One cannot visit Delhi without indulging in its famous street food. From the spicy golgappas that explode with flavor to the delectable chole bhature, the city offers a myriad of flavors to satisfy every palate. The streets of Delhi are filled with the aroma of spices and the sizzle of street food vendors. One cannot visit Delhi without indulging in its famous street food. From the spicy golgappas that explode with flavor to the delectable chole bhature, the city offers a myriad of flavors to satisfy every palate. The streets of Delhi are filled with the aroma of spices and the sizzle of street food vendors. One cannot visit Delhi without indulging in its famous street food. From the spicy golgappas that explode with flavor to the delectable chole bhature, the city offers a myriad of flavors to satisfy every palate.",
    },
    {
      id: "2",
      title: "Exploring the Enchanting Beauty of Jaipur",
      category: "Travel",
      description: "A visit to a historical city is always an exciting experience. It is a fascinating adventure. I had one such experience during my recent trip to Jaipur, also known as the Pink City. Located in the heart of Rajasthan, Jaipur is a city steeped in history and drenched in vibrant colors. One of the first places I visited in Jaipur was the magnificent Amber Fort. As I stood at the base of this majestic fort, I couldn't help but marvel at its grandeur. The intricate architecture, the sprawling courtyards, and the panoramic views of the surrounding hills took my breath away. Exploring the fort's ornate chambers and labyrinthine passages felt like stepping back in time. Jaipur is also famous for its exquisite palaces, and the City Palace is a prime example. The opulent architecture, beautiful gardens, and the Peacock Gate left me spellbound. The palace is a testament to the royal legacy of Jaipur and offers a glimpse into the life of its former rulers. Hawa Mahal, or the Palace of Winds, is another iconic structure in Jaipur. Its unique facade adorned with 953 intricately designed windows allowed the royal women to observe street festivals while remaining hidden from view. The delicate honeycomb-like lattice work on the windows added to its charm.",
    },
    {
      id: "3",
      title: "Capturing the Essence: A Journey into Photography",
      category: "Photography",
      description: " A visit to a historical city is always an exciting experience. It is a fascinating adventure. I had one such experience during the last summer vacations when I embarked on a journey into the world of photography. Armed with my camera and an insatiable curiosity, I set out to explore the captivating realm of visual storytelling. Photography, they say, is about freezing moments in time, and that's exactly what I aimed to do. New Delhi, the bustling capital of India, provided the perfect backdrop for my photographic expedition. Its rich tapestry of culture, history, and diversity offered endless opportunities to capture unique and evocative shots. My first stop was the iconic India Gate, a monument that stands tall as a tribute to the brave soldiers who laid down their lives for the nation. As I framed my shot, the golden hues of the setting sun bathed the structure in a warm glow, creating a poignant image that spoke of honor and sacrifice. Exploring the narrow lanes of Old Delhi, I found myself immersed in a world of vibrant chaos. The bustling markets, with their colorful wares and animated vendors, became my canvas. Each snapshot told a story of life in its raw and unfiltered form. Humayun's Tomb, a UNESCO World Heritage Site, presented an entirely different photographic challenge. The symmetrical beauty of the Mughal architecture beckoned me to capture its intricate details. Shadows played on the marble surfaces, adding depth and drama to my compositions.",
    },
    {
      id: "4",
      title: "Unmasking the Veil: A Glimpse into Delhi's Pollution Crisis",
      category: "Environmental Insights",
      description: " A visit to a historical city is always an exciting experience. It is a fascinating adventure. I had one such experience during the last summer vacations when I visited Delhi. However, beneath the grandeur and history of this capital city, there lies a pressing issue that cannot be ignored—the alarming level of pollution. Delhi, New Delhi to be precise, is the political and cultural heart of India. It boasts architectural wonders, rich heritage, and a vibrant lifestyle. But as I explored the city, I couldn't help but notice the ever-present shroud of smog that hung in the air. Delhi's pollution crisis was evident, and it left an indelible mark on my trip. The first sign of the pollution's impact was the haze that obscured the usually clear blue skies. It was as if a thick veil had been drawn over the city, muting the colors and beauty of its landscape. The sunsets, which should have painted the sky in warm oranges and reds, were subdued, a reminder of the particulate matter that filled the air. My visit to India Gate, a symbol of national pride, was marred by the acrid smell of pollution that clung to the surroundings. The fountains that should have sparkled in the sunlight were dull, a stark reminder of the pollutants that settled on every surface. One morning, I visited Lodhi Gardens, an oasis of green in the heart of the city. While the historic tombs and lush gardens were a sight to behold, I couldn't ignore the contrast between nature's beauty and the looming pollution.",
    },{
      id: "5",
      title: "India: A Journey Through Time and Diversity",
      category: "Travel",
      description: " A visit to a historical city is always an exciting experience. It is a fascinating adventure. I had one such experience during the last summer vacations when I explored the incredible tapestry of India. India, a land of diverse cultures, rich heritage, and captivating landscapes, left an indelible mark on my soul. My journey began in the bustling heart of the nation, New Delhi, the capital of India. This city is a testament to India's historical grandeur and modern dynamism. The ancient architectural marvels like the Red Fort and India Gate stood proudly amidst the chaotic traffic, a bridge between the past and the present. The Mughal Gardens in Rashtrapati Bhavan offered a glimpse into India's regal past. The well-manicured lawns and meticulously designed flora reflected the meticulous craftsmanship of Indian horticulture. As I ventured further, I reached Agra, home to the iconic Taj Mahal. The gleaming white marble monument, a symbol of eternal love, left me in awe of its sheer beauty. The intricate carvings and the love story behind its creation added depth to its magnificence. From the serene backwaters of Kerala to the majestic peaks of the Himalayas, India's geographical diversity was a visual treat. The houseboats in Kerala allowed me to drift through a tranquil world of greenery and water, while the mountains of Himachal Pradesh offered thrilling adventures and breathtaking vistas. India's cuisine was a sensory journey of its own. From the spicy street food of Mumbai to the aromatic biryani of Hyderabad, each region offered a unique culinary experience. I relished the flavors of India, understanding how its cuisine reflects the diversity of its people.",
    },{
      id: "6",
      title: "Delhi's Digital Transformation: Navigating a Smart City",
      category: "Tech and Innovation",
      description: "A visit to a historical city is always an exciting experience. It is a fascinating adventure. I had one such experience during the last summer vacations when I explored the digital wonders of New Delhi. New Delhi, the capital of India, has undergone a remarkable transformation into a smart city powered by digitalization. As I landed at the Indira Gandhi International Airport, I was greeted by the seamless digital infrastructure that facilitated a hassle-free arrival. From e-passports to automated baggage handling, every step of the journey was streamlined by technology. One of my first stops was the Delhi Metro, a lifeline for millions of commuters. The digital ticketing system, real-time updates, and impeccable cleanliness were a testament to Delhi's commitment to smart mobility. Navigating the city had never been more convenient. My exploration took me to Connaught Place, where I witnessed the fusion of heritage and modernity. The Wi-Fi-enabled central hub buzzed with people connecting, working, and sharing experiences. Cafes and restaurants offered QR code menus, enhancing safety during the pandemic. Delhi's healthcare sector had also embraced digitalization. Telemedicine services allowed patients to consult with doctors from the comfort of their homes. The integration of electronic health records ensured seamless healthcare access.",
    },
  ],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action) => {
      const { id, title, category, description } = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      state.blogs[blogIndex].title = title;
      state.blogs[blogIndex].category = category;
      state.blogs[blogIndex].description = description;
    },
    deleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
    toggleLike: (state, action) => {
      const id = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      state.blogs[blogIndex].isLiked = !state.blogs[blogIndex].isLiked;
    },
  },
});

export const selectBlogById = (state, blogID) => {
  return state.blogs.blogs.find((blog) => blog.id === blogID);
};

export const { addBlog, updateBlog, deleteBlog, toggleLike } =
  blogSlice.actions;

export default blogSlice.reducer;