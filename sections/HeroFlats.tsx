import Image from "apps/website/components/Image.tsx";

const PLACEMENT = {
    left: "flex-col text-left lg:flex-row-reverse",
    right: "flex-col text-left lg:flex-row",
};

export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

export interface Props {
    title?: string;
    description?: string;
    image?: {
        src: string;
        alt: string;
    };
    placement?: "left" | "right";
    cta?: CTA[];
}

export default function HeroFlats({
    title = "Happiness is the highest form of health.",
    description = "",
    image,
    placement = "left",
    cta = [
        { id: "change-me-1", href: "/", text: "Change me", outline: false },
        { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
}: Props) {
    return (
        <nav className="lg:container lg:mx-auto mx-4">
            <div className="flex flex-col items-center">
                <div
                    className={`flex w-full xl:container xl:mx-auto py-0 mx-5 md:mx-0 z-0 ${
                        image
                            ? PLACEMENT[placement]
                            : "flex-col items-center justify-center text-center"
                    } lg:py-10 gap-2 md:gap-5 items-center`}
                >
                    {image && image.src && (
                        <Image
                            width={640}
                            className="w-full lg:w-1/2 object-fit"
                            sizes="(max-width: 240px) 100vw, 30vw"
                            src={image.src}
                            alt={image.alt}
                            decoding="async"
                            loading="lazy"
                        />
                    )}
                    <div
                        className={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${
                            image
                                ? "lg:w-1/2 lg:max-w-xl"
                                : "flex flex-col items-center justify-center lg:max-w-3xl"
                        }`}
                    >
                        <div className="inline-block lg:text-[90px] text-4xl leading-none font-medium">
                            {title}
                        </div>
                        <p className="text-lg md:text-md leading-[150%]">
                            {description}
                        </p>
                        <div className="flex items-center gap-3">
                            {cta?.map((item) => (
                                <a
                                    key={item?.id}
                                    id={item?.id}
                                    href={item?.href}
                                    target={item?.href.includes("http")
                                        ? "_blank"
                                        : "_self"}
                                    className={`font-normal btn btn-primary ${
                                        item.outline && "btn-outline"
                                    }`}
                                >
                                    {item?.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
