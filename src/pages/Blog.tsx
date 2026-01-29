import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const blogPosts = [
  {
    title: "The Future of Industrial Fasteners: Trends for 2024",
    excerpt: "Explore the latest innovations in fastener technology, including smart fasteners, sustainable materials, and advanced coatings.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    date: "January 15, 2024",
    author: "Sarah Mitchell",
    category: "Industry Trends",
    slug: "future-industrial-fasteners-2024",
  },
  {
    title: "Choosing the Right Fastener for Your Application",
    excerpt: "A comprehensive guide to selecting fasteners based on material, environment, load requirements, and industry standards.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
    date: "January 8, 2024",
    author: "James Harrison",
    category: "Technical Guide",
    slug: "choosing-right-fastener",
  },
  {
    title: "Understanding ISO Standards in Fastener Manufacturing",
    excerpt: "An overview of key ISO standards that govern fastener production and why certification matters for quality assurance.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    date: "December 28, 2023",
    author: "Michael Roberts",
    category: "Quality",
    slug: "iso-standards-fasteners",
  },
  {
    title: "Sustainable Fastening Solutions for Modern Manufacturing",
    excerpt: "How the fastener industry is adapting to environmental concerns with recyclable materials and eco-friendly processes.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    date: "December 15, 2023",
    author: "Emma Thompson",
    category: "Sustainability",
    slug: "sustainable-fastening-solutions",
  },
  {
    title: "Aerospace Fasteners: Meeting the Highest Standards",
    excerpt: "Inside look at the rigorous requirements for fasteners used in aviation and how Pegasus Premium meets them.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
    date: "December 5, 2023",
    author: "David Chen",
    category: "Case Study",
    slug: "aerospace-fasteners-standards",
  },
  {
    title: "Inventory Management Best Practices for Fasteners",
    excerpt: "Strategies for maintaining optimal fastener inventory levels to prevent production delays while minimizing costs.",
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&q=80",
    date: "November 20, 2023",
    author: "Lisa Anderson",
    category: "Operations",
    slug: "inventory-management-fasteners",
  },
];

const Blog = () => {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-hero">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-copper" />
              <span className="text-copper text-sm font-semibold uppercase tracking-[0.2em]">
                Insights & News
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
              Engineering<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-copper-light">
                Knowledge
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Expert insights, industry trends, and technical guides from the Pegasus Premium team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <Link to={`/blog/${featuredPost.slug}`}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group grid lg:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden shadow-premium-md hover:shadow-elevated transition-all duration-500"
              >
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <motion.img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium w-fit mb-4">
                    {featuredPost.category}
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.1}>
                <Link to={`/blog/${post.slug}`}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="group bg-background rounded-2xl overflow-hidden shadow-premium-sm hover:shadow-premium-lg transition-all duration-500 h-full flex flex-col"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 text-foreground text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <ArrowUpRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
