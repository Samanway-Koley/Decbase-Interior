import { useParams } from "react-router-dom";
import InnerBanner from "../Components/InnerBanner";
import BlogImg1 from '/src/assets/Images/blog1.jpg';
import BlogImg2 from '/src/assets/Images/blog2.jpg';
import BlogImg3 from '/src/assets/Images/blog3.jpg';
import BlogImg4 from '/src/assets/Images/blog4.jpg';
import BlogImg5 from '/src/assets/Images/blog5.jpg';
import BlogImg6 from '/src/assets/Images/blog6.jpg';

const BlogDetail = () => {
    const { id } = useParams();
    const blogData = {
        "1": {
            title: "2020 Interior Design Trends",
            image: BlogImg1,
            content: `
            <p>The year 2020 marked a pivotal shift in interior design, blending sustainability with modern aesthetics. Designers across the globe embraced eco-conscious choices, smart technology integration, and a focus on comfort. It was a year where function met style in new and exciting ways.</p>
            <p>One of the biggest trends was the rise of biophilic design — the practice of connecting interior spaces with nature. Incorporating natural elements such as plants, organic materials, and daylight became paramount. This shift was driven by the growing awareness of mental health benefits that come with natural surroundings.</p>
            <h4>Top Trends That Defined 2020</h4>
            <ul>
                <li><strong>Biophilic Elements:</strong> Green walls, indoor gardens, and natural light dominated interiors to promote wellbeing.</li>
                <li><strong>Bold, Saturated Colors:</strong> Jewel tones like emerald, sapphire, and ruby were used as statement accents in living rooms and kitchens.</li>
                <li><strong>Multipurpose Spaces:</strong> With remote work becoming mainstream, homes needed flexible areas that could double as offices and relaxation zones.</li>
                <li><strong>Tech-Integrated Design:</strong> Smart thermostats, automated lighting, and voice-controlled devices blended seamlessly into interiors for convenience.</li>
                <li><strong>Sustainable Materials:</strong> Recycled wood, bamboo flooring, and low-VOC paints helped reduce environmental impact.</li>
            </ul>
            <p>These trends collectively aimed at making homes not only stylish but more livable and healthier. The focus on sustainability paired with technological innovation continues to influence design choices today.</p>
            <p>As 2020 proved, design is no longer just about looks but about creating spaces that nurture the people living within them.</p>
            `
        },

        "2": {
            title: "28 Notable Product at ARC Interior Design",
            image: BlogImg2,
            content: `
            <p>ARC Interior Design is celebrated for offering a thoughtfully curated selection of products that merge innovation, aesthetics, and sustainability. Here, we highlight 28 products that have set the bar in interior design.</p>
            <p>Each product has been chosen not only for its design appeal but also for its functionality and eco-friendliness. Whether you're furnishing a cozy living room or a bustling office, these picks bring both style and practicality.</p>
            <h4>Featured Products Overview</h4>
            <ol>
                <li><strong>Modular Sofa System:</strong> Offers endless configuration options to suit any space, combining comfort with sleek modern lines.</li>
                <li><strong>Handcrafted Wooden Dining Tables:</strong> Made from sustainably harvested wood, these tables are the heart of any dining area.</li>
                <li><strong>Ambient LED Lighting Panels:</strong> Create customizable lighting moods perfect for both work and relaxation.</li>
                <li><strong>Ergonomic Office Chairs:</strong> Designed with posture support and adjustable features to enhance productivity.</li>
                <li><strong>Minimalist Metal Bookshelves:</strong> Stylish and sturdy, these shelves help organize spaces without clutter.</li>
                <li><strong>Vintage-Inspired Wall Clocks:</strong> Marrying retro charm with modern precision.</li>
                <li><strong>Eco-Friendly Bamboo Flooring:</strong> Durable, renewable, and visually appealing floors for high-traffic areas.</li>
                <li><strong>Designer Rugs with Geometric Patterns:</strong> Add warmth and texture while creating visual interest.</li>
                <li><strong>Smart Home Devices:</strong> From voice-activated assistants to app-controlled thermostats, these devices enhance everyday convenience.</li>
                <li><strong>Indoor Planters with Self-Watering Features:</strong> Making plant care easier for busy lifestyles.</li>
                <li><strong>Expandable Coffee Tables:</strong> Functional pieces that adjust to your entertaining needs.</li>
                <li><strong>Multi-Functional Storage Ottomans:</strong> Combining comfort and hidden storage to maximize space.</li>
                <li><strong>Textured Wall Coverings:</strong> Offering depth and tactile interest to otherwise flat walls.</li>
                <li>...and many more innovative items carefully chosen by ARC’s expert designers.</li>
            </ol>
            <p>ARC Interior Design’s commitment to quality and sustainability shines through each product, helping customers build spaces that are beautiful, functional, and future-forward.</p>
            <p>With this collection, you can confidently create interiors that reflect your personality while respecting the planet.</p>
            `
        },

        "3": {
            title: "Modern Minimalist Home Ideas",
            image: BlogImg3,
            content: `
            <p>Minimalism is more than a design style; it’s a lifestyle that encourages clarity, simplicity, and intentional living. Modern minimalist homes focus on clean lines, functional furniture, and the elimination of clutter to create peaceful and airy environments.</p>
            <p>The core philosophy revolves around "less is more," prioritizing quality over quantity. A minimalist home invites calmness and order, helping you to feel more relaxed and focused in your daily life.</p>
            <h4>Core Elements of Modern Minimalism</h4>
            <ul>
                <li><strong>Neutral Color Palettes:</strong> Whites, soft grays, and earth tones create a serene canvas.</li>
                <li><strong>Open Floor Plans:</strong> Spaces flow effortlessly without unnecessary walls or barriers.</li>
                <li><strong>Functional Furniture:</strong> Pieces with multiple uses reduce clutter while enhancing utility.</li>
                <li><strong>Natural Light:</strong> Large windows and light fabrics maximize sunlight, making spaces feel bright and welcoming.</li>
                <li><strong>Decluttering:</strong> Keeping only items that serve a purpose or bring joy.</li>
            </ul>
            <h4>Decor Tips for Achieving Minimalism</h4>
            <p>When decorating, focus on clean, simple lines and avoid over-accessorizing. Textures play a crucial role — mix materials like wood, metal, and textiles to add visual interest without excess. Use art sparingly but thoughtfully, selecting pieces that resonate deeply.</p>
            <p>Storage is key: hidden compartments, built-in shelves, and smart furniture solutions help maintain the clean look. Plants also add life and freshness without cluttering the space.</p>
            <p>Living minimally does not mean living without style. It means creating a space that reflects what truly matters to you, enhancing both form and function.</p>
            <p>By embracing minimalist principles, your home can become a sanctuary of calm in a busy world.</p>
            `
        },

        "4": {
            title: "Top 5 Living Room Makeovers",
            image: BlogImg4,
            content: `
            <p>Your living room is the heart of your home — where you relax, entertain, and spend quality time with loved ones. Refreshing this space can significantly uplift the ambiance and comfort of your entire house.</p>
            <p>Here are five inspired makeover ideas designed to transform your living room into a stylish and welcoming retreat.</p>
            <h4>1. Scandinavian Simplicity</h4>
            <p>Characterized by bright, airy rooms filled with natural light, Scandinavian design uses light woods, neutral colors, and cozy textiles like wool and linen. The emphasis is on functionality and comfort with minimal clutter.</p>
            <h4>2. Bold Accent Walls</h4>
            <p>Create a focal point by painting one wall in a deep, dramatic color or applying patterned wallpaper. This adds depth and personality to the space without overwhelming the entire room.</p>
            <h4>3. Mix of Textures</h4>
            <p>Layering different materials — velvet cushions, wool throws, and linen curtains — brings tactile richness and warmth. Combining smooth and rough textures adds visual intrigue and a sense of coziness.</p>
            <h4>4. Statement Lighting</h4>
            <p>Introduce eye-catching chandeliers, oversized floor lamps, or unique pendant lights. Lighting fixtures can serve as functional art pieces that elevate the room’s overall design.</p>
            <h4>5. Functional Furniture</h4>
            <p>Select furniture that not only looks great but offers storage or can be rearranged to suit your needs. Ottomans with hidden compartments, extendable coffee tables, or modular sofas provide both style and practicality.</p>
            <p>Each makeover idea blends aesthetics with usability, creating living rooms that are beautiful, comfortable, and tailored to your lifestyle.</p>
            <p>Whether you prefer minimalist, bold, or cozy vibes, these ideas can help you achieve the perfect living space.</p>
            `
        },

        "5": {
            title: "Eco-Friendly Interior Design Tips",
            image: BlogImg5,
            content: `
            <p>Incorporating eco-friendly elements into your home design not only benefits the environment but also creates healthier and more comfortable living spaces. Sustainable interiors emphasize using renewable materials, reducing waste, and improving indoor air quality.</p>
            <p>Whether you're starting from scratch or updating your existing home, there are many ways to go green without sacrificing style.</p>
            <h4>Simple Ways to Make Your Home Eco-Friendly</h4>
            <ul>
                <li><strong>Sustainable Materials:</strong> Use bamboo, cork, reclaimed wood, and recycled metals which have a lower environmental impact.</li>
                <li><strong>Non-Toxic Paints:</strong> Choose low-VOC or zero-VOC paints and finishes to reduce harmful indoor pollutants.</li>
                <li><strong>Energy Efficiency:</strong> Install LED lighting, energy-efficient appliances, and smart thermostats to lower consumption.</li>
                <li><strong>Natural Light Maximization:</strong> Use large windows, light-colored walls, and reflective surfaces to enhance daylight inside.</li>
                <li><strong>Furniture Upcycling:</strong> Restore or repurpose old furniture instead of buying new, reducing waste.</li>
                <li><strong>Indoor Plants:</strong> Plants improve air quality and bring natural beauty indoors.</li>
            </ul>
            <h4>Benefits of Eco-Friendly Design</h4>
            <p>Besides reducing environmental impact, eco-friendly homes often have lower utility bills, improved health outcomes, and increased property value. Designing with sustainability in mind creates spaces that nurture both people and the planet.</p>
            <p>By adopting these principles, you contribute to a better future while enjoying a stylish, functional home.</p>
            `
        },

        "6": {
            title: "Choosing the Perfect Lighting for Every Room",
            image: BlogImg6,
            content: `
            <p>Lighting is a crucial aspect of interior design, shaping the mood, functionality, and aesthetics of every room. The right lighting can highlight architectural features, create cozy atmospheres, and improve the usability of spaces.</p>
            <p>Choosing lighting involves considering the purpose of each room, the existing natural light, and your personal style.</p>
            <h4>Living Room Lighting</h4>
            <p>Use a combination of ambient (general), task, and accent lighting. Ambient lighting ensures overall illumination, task lighting is perfect for reading or hobbies, and accent lighting highlights art or architectural details.</p>
            <h4>Kitchen Lighting</h4>
            <p>Bright, focused task lighting is essential for cooking areas. Under-cabinet lights and pendant fixtures over islands create functional and stylish illumination. Softer ambient lighting complements dining areas adjacent to kitchens.</p>
            <h4>Bedroom Lighting</h4>
            <p>Opt for warm, dimmable lights to foster relaxation and restful sleep. Bedside lamps provide convenience, while ceiling fixtures should be soft and non-intrusive.</p>
            <h4>Bathroom Lighting</h4>
            <p>Bright, even lighting around mirrors is crucial for grooming. Combine overhead lighting with wall sconces or LED strips for balanced illumination.</p>
            <h4>General Lighting Tips</h4>
            <ul>
                <li>Choose LED bulbs for energy savings and longevity.</li>
                <li>Consider smart lighting systems for customizable moods and schedules.</li>
                <li>Match fixtures with your home's decor style to ensure cohesion.</li>
                <li>Use dimmers to adjust light intensity based on time of day and activity.</li>
            </ul>
            <p>Well-chosen lighting not only beautifies a home but enhances everyday living by improving comfort and efficiency.</p>
            `
        }
    };
    const blog = blogData[id];
    if (!blog) {
        return (
            <div className="container">
                <h2>Blog not found</h2>
            </div>
        );
    }
    return (
        <>
            <InnerBanner innerBannerImg={blog.image} innerBannerHeading={blog.title} />
            <section className="blog-detail-sec">
                <div className="container">
                    <h2>{blog.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
            </section>
        </>
    );
};

export default BlogDetail;
