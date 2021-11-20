import clsx from "clsx";
import Link from "components/Link";
import Image from "next/image";

const mdxConfig = {
    components: {
        h1: ({ className, ...props }) => (
            <h1
                className={clsx("text-xl font-extrabold mt-4 mb-2", className)}
                {...props}
            />
        ),
        h2: ({ className, ...props }) => (
            <h2
                className={clsx("text-xl font-bold mt-4 mb-2", className)}
                {...props}
            />
        ),
        h3: ({ className, ...props }) => <h3 className={clsx("text-xl mt-4 mb-2", className)} {...props} />,
        h4: ({ className, ...props }) => <h4 className={clsx("text-lg mt-4 mb-2", className)} {...props} />,
        a: Link,
        img: Image,
        p: function PTag(props) {
            return <p className="mb-3" {...props} />;
        },
        ol: function OlTag(props) {
            return <ul className="pl-3 mb-3 list-decimal list-outside" {...props} />;
        },
        ul: function UlTag(props) {
            return <ul className="pl-3 mb-3 list-disc list-outside" {...props} />;
        },
        blockquote: function BlockquoteTag({ style, ...props }) {
            return (
                <blockquote
                    className={clsx("pl-3 pt-1 border-l-4 border-gray-500")}
                    {...props}
                />
            );
        },
    },
};

export default mdxConfig;
