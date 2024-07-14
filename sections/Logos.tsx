import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

export interface Props {
  title?: string;
  logos?: Logo[];
}

const IMG_PLACEHODLER = Array(30).fill(0).map(() => ({
  src:
    "https://i.pinimg.com/736x/dc/53/50/dc5350243970437d9fff2c8db3a9975b.jpg",
  altText: "Logo",
}));

export default function Logos({
  title = "Welcome! Have a good time shopping",
  logos = IMG_PLACEHODLER,
}: Props) {
  const slideContent = (
    <div class="flex items-center gap-20">
      {logos?.map((logo) => {
        return (
          <Image
            src={logo.src || ""}
            alt={logo.altText || ""}
            width={110}
            height={25}
          />
        );
      })}
    </div>
  );
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 py-6 lg:py-14">
      <div class="flex flex-col gap-12">
        <p class="text-center text-lg">{title}</p>
        <div class="relative w-full overflow-hidden h-11">
          <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-11">
            {slideContent}
          </div>
        </div>
      </div>
    </div>
  );
}
