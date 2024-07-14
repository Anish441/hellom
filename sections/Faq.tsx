export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Question {
  title: string;
  /** @format rich-text */
  answer: string;
}

export interface Props {
  title?: string;
  description?: string;
  cta?: CTA;
  questions?: Question[];
}

export default function BlogPosts({
  title = "Help",
  description =
    "See the wide range of collection ",
  cta = { id: "change-me", href: "/shop", text: "Shop Now!", outline: true },
  questions = [
    {
      title: "How can I determine my shoe size when shopping online?",
      answer:
        "You can determine your shoe size by measuring your foot length and width using a ruler or measuring tape. Most online retailers provide size guides that you can refer to for accurate sizing.",
    },
    {
      title: "What is the best way to clean and maintain my shoes? ",
      answer:
        "To clean your shoes, you can use a gentle brush or cloth with a mild soap and water solution. Allow your shoes to air dry naturally and avoid direct heat sources. Regularly cleaning and conditioning your shoes can help prolong their lifespan.",
    },
    {
      title: "How often should I replace my running shoes?",
      answer:
        "t is recommended to replace your running shoes every 300-500 miles, depending on factors like your running style, weight, and shoe type. Inspect your shoes regularly for signs of wear and tear to determine when it's time for a new pair",
    },
    {
      title: "Best type of shoe for both casual and formal wear?",
      answer:
        "Loafers are versatile shoes that can be dressed up or down to suit both formal and casual occasions. They come in various styles, including penny loafers, tassel loafers, and bit loafers, and are typically made of leather or suede. Loafers offer a polished and sophisticated look when paired with dress pants or suits for formal events, while also providing a stylish and relaxed vibe when worn with jeans or chinos for casual outings.",
    },
    {
      title: "Are sneakers casual or formal?",
      answer:
        "For a simple and casual look, a low-top sneaker is a great choice. Low-top sneakers are the most versatile, easily pairing with everything from jeans and a t-shirt to tapered pants and a blazer. To keep them formal in the office, try a neutral color, such as gray or brown.",
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">
        <div class="flex-none space-y-6 lg:w-2/5">
          <p class="text-4xl leading-snug">
            {title}
          </p>
          <p class="text-lg">
            {description}
          </p>
          <a
            key={cta?.id}
            id={cta?.id}
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class={`font-normal btn btn-primary ${
              cta.outline && "btn-outline"
            }`}
          >
            {cta?.text}
          </a>
        </div>
        <div class="flex-auto border-primary border-t">
          {questions?.map((question) => (
            <details class="border-primary border-b group">
              <summary class="text-lg cursor-pointer py-6 flex ">
                <span class="flex-auto">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.17674 12.5577L8.17676 12.5577L8.5303 12.2041C8.53031 12.2041 8.53031 12.2041 8.53032 12.2041C8.62794 12.1065 8.78621 12.1065 8.88385 12.2041C8.88385 12.2041 8.88385 12.2041 8.88385 12.2041L15.6464 18.9667L16 19.3202L16.3535 18.9667L23.1161 12.2041C23.2138 12.1064 23.372 12.1064 23.4696 12.2041L23.8232 12.5577C23.9208 12.6553 23.9208 12.8135 23.8232 12.9112L16.1767 20.5577C16.0791 20.6553 15.9209 20.6553 15.8232 20.5577L8.17674 12.9112C8.17674 12.9112 8.17674 12.9112 8.17674 12.9112C8.07911 12.8135 8.07911 12.6553 8.17674 12.5577Z"
                      fill="#18181B"
                      stroke="#18181B"
                    />
                  </svg>
                </span>
              </summary>
              <p
                class="leading-relaxed mb-6 group-open:animate-fadeIn"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              >
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
