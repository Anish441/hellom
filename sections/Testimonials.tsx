import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Testimonial {
  content?: {
    description?: string;
    avatar?: ImageWidget;
    /** @description Image's alt text */
    alt?: string;
    name?: string;
    position?: string;
  };
}

export interface Props {
  title?: string;
  slides?: Testimonial[];
  /**
   * @title Show arrows
   * @description show arrows to navigate through the images
   */
  arrows?: boolean;
  /**
   * @title Show dots
   * @description show dots to navigate through the images
   */
  dots?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  title: "Reviews from the customer",
  slides: [
    {
      content: {
        description:
          "These shoes are a perfect blend of comfort and style. I can wear them all day without any discomfort, and they look great with any outfit.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Bobby",
        
      },
    },
    {
      content: {
        description:
          " I've been wearing these shoes for months, and they still look as good as new. The quality is top-notch, and they have held up well to daily wear and tear",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Rakesh",
        
      },
    },
    {
      content: {
        description:
          "These shoes are worth every penny. The quality is exceptional, and they are reasonably priced compared to other brands offering similar styles",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Dharan",
        
      },
    },
    {
      content: {
        description:
          "These shoes are easy to clean, which is a big plus for me. A quick wipe with a damp cloth is all it takes to keep them looking pristine. The low maintenance aspect is a huge bonus for busy individuals.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Mahi",
        
      },
    },
    {
      content: {
        description:
          " I love how versatile these shoes are. I can wear them to work, to the gym, or for a casual outing. They provide the right amount of support and flexibility for various activities.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Raja",
        
      },
    },
  ],
};

function SliderItem(
  { slide, id }: { slide: Testimonial; id: string },
) {
  const {
    content,
  } = slide;

  return (
    <div
      id={id}
      class="relative overflow-y-hidden w-full min-h-[292px]"
    >
      <div class="flex flex-col justify-center gap-16 p-8 border border-base-content rounded-2xl h-full max-w-[600px]">
        <p class="text-lg">{content?.description}</p>
        <div class="flex items-center gap-5">
          <Image
            class="object-cover w-14 h-14 rounded-full"
            alt={content?.alt}
            src={content?.avatar || ""}
            width={56}
            height={56}
          />
          <div class="flex flex-col">
            <p class="font-semibold text-base">{content?.name}</p>
            <p class="text-base">{content?.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dots({ slides, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel col-span-full gap-3 z-10">
        {slides?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-2 h-2 rounded-full group-disabled:animate-progress dot"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <div class="flex gap-4">
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowRight"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowLeft"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function Carousel(props: Props) {
  const id = useId();
  const { title, slides, interval } = { ...DEFAULT_PROPS, ...props };

  return (
    <div
      id={id}
      class="min-h-min flex flex-col lg:container md:max-w-6xl lg:mx-auto mx-4 py-12 lg:py-28"
    >
      <h2 class="text-4xl leading-snug lg:w-1/2 pb-12 lg:pb-16">
        {title}
      </h2>
      <Slider
        class="carousel carousel-center w-full col-span-full row-span-full gap-6"
        rootId={id}
        interval={interval && interval * 1e3}
        infinite
      >
        {slides?.map((slide, index) => (
          <Slider.Item
            index={index}
            class="carousel-item max-w-[600px] w-full"
          >
            <SliderItem
              slide={slide}
              id={`${id}::${index}`}
            />
          </Slider.Item>
        ))}
      </Slider>

      <div class="flex justify-between pt-8 lg:px-16">
        {props.dots && <Dots slides={slides} interval={interval} />}{" "}
        {props.arrows && <Buttons />}
      </div>
    </div>
  );
}

export default Carousel;
