import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const blogPosts = [
  {
    title: "Choosing the Right Fastener for Your Application",
    excerpt: "A comprehensive guide to selecting fasteners based on material, environment, load requirements, and industry standards.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
    date: "January 15, 2024",
    author: "Sarah Nkosi",
    category: "Technical Guide",
    slug: "choosing-right-fastener",
  },
  {
    title: "Understanding ISO Standards in Fastener Manufacturing",
    excerpt: "An overview of key ISO standards that govern fastener production and why certification matters for quality assurance.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    date: "January 8, 2024",
    author: "Michael Dlamini",
    category: "Quality",
    slug: "iso-standards-fasteners",
  },
  {
    title: "Sustainable Fastening Solutions for Modern Manufacturing",
    excerpt: "How the fastener industry is adapting to environmental concerns with recyclable materials and eco-friendly processes.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    date: "December 28, 2023",
    author: "Emma Botha",
    category: "Sustainability",
    slug: "sustainable-fastening-solutions",
  },
  {
    title: "Construction Fasteners: Meeting South African Standards",
    excerpt: "Inside look at the requirements for fasteners used in construction and how Pegasus Premium meets them.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    date: "December 15, 2023",
    author: "David Molefe",
    category: "Case Study",
    slug: "construction-fasteners-standards",
  },
  {
    title: "Inventory Management Best Practices for Fasteners",
    excerpt: "Strategies for maintaining optimal fastener inventory levels to prevent production delays while minimizing costs.",
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&q=80",
    date: "December 5, 2023",
    author: "Lisa Pretorius",
    category: "Operations",
    slug: "inventory-management-fasteners",
  },
];

const Blog = () => {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero Section - Readable white text */}
      <section className="page-hero">
        <div className="container-wide">
          <ScrollReveal>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
              Insights & News
            </span>
            <h1 className="display-lg mb-4">
              Industry Knowledge
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
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
                className="group grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <motion.img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium w-fit mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {remainingPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.1}>
                <Link to={`/blog/${post.slug}`}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="group bg-background rounded-xl overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 rounded-full bg-white/90 text-foreground text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-2">
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
