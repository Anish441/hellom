import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Post {
  title: string;
  author: string;
  excerpt: string;
  src: string;
  date: string;
  readingTime?: string;
  tags: string[];
}

export interface Props {
  title?: string;
  description?: string;
  posts?: Post[];
}

export default function BlogPosts({
  title = "The advantages of the shoes",
  description = "Here are some of the most popular",
  posts = [
    {
      title: "Sneakers",
      author: "",
      excerpt:
        "Sneakers are athletic shoes primarily designed for sports or other forms of physical exercise.They typically feature rubber soles, cushioned interiors, and lace-up or Velcro closures.Sneakers come in various styles such as running shoes, basketball shoes, and casual everyday wear.They are known for their comfort, support, and versatility, making them a popular choice for people of all ages.",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBgXxL4a5_hW6BiHP_dEze9gYc5-FEO04fg&s",
      date: "",
      readingTime: "",
      tags: [],
    },
    {
      title: "Crocs",
      author: "",
      excerpt:
        "Crocs are a type of casual footwear known for their distinctive clog design and lightweight, durable material called Croslite.They are characterized by their ventilation ports, comfortable footbed, and slip-on style.Crocs are popular for their comfort and easy maintenance, as they are water-resistant and easy to clean.Crocs come in a wide range of colors and styles, including sandals, flip-flops, and lined clogs for colder weather.",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbvL5QDQd3pbf6RFKwqKrzhpkQz3bFtl6GA&s",
      date: "",
      readingTime: "",
      tags: [],
    },
    {
      title: "Sandals",
      author: "",
      excerpt:
        "Sandals are open-toed footwear that typically consist of a sole held to the foot with straps or thongs.They are lightweight, breathable, and ideal for warm weather or casual occasions.Sandals come in various designs, including flat sandals, wedge sandals, and heeled sandals.They are versatile and can be paired with different outfits, from beachwear to summer dresses.",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReoMfDpaKOEHWw5ypDNfRjTNbep-X8mnPEYQ&s",
      date: "",
      readingTime: "",
      tags: [],
    },
  ],
}: Props) {
  return (
    <div className="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div className="space-y-16">
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-4xl leading-snug">{title}</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts?.map((post, index) => (
            <div key={index} className="border border-secondary rounded-lg overflow-hidden">
              <Image
                src={post.src}
                width={640}
                className="w-full object-fit z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                decoding="async"
                loading="lazy"
              />
              <div className="p-6 space-y-4">
                {post.readingTime && <div className="font-semibold">{post.readingTime}</div>}
                <div className="space-y-2">
                  <h3 className="text-2xl">{post.title}</h3>
                  <p className="text-base">{post.excerpt}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag, tagIndex) => (
                    <div key={tagIndex} className="badge badge-lg badge-primary text-xs">
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span>{post.date}</span>
                  {post.author && <span>{post.author} •</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
