// import NewsletterWidget from "./widgets/newsletter-widget";

// const posts = [
//     {
//         title: "#8: Who's Ready for Tomorrow?",
//         description: "its taking shape",
//         content: "So the thing i am working on?...",
//         link: "https://akxcix.substack.com/p/8-whos-ready-for-tomorrow",
//         buttonText: "Read More"
//     },
// ]

export default function LeftDiv() {
    return (
        <div className="flex flex-col w-0 md:w-1/4">
            {/* display substack posts */}
            {/* {posts.map((post, index) => (
                <div key={index} className="p-4">
                    <NewsletterWidget
                        title={post.title}
                        description={post.description}
                        content={post.content}
                        link={post.link}
                        buttonText={post.buttonText}
                    />
                </div>
            
            ))} */}
        </div>
    )
}