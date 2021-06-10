const getLanguages = () => {
    return [
        {
            image: "https://ik.imagekit.io/iamadarshk/portfolio/languages/go_DPqe6Ckdm.svg",
            imageDesc: "Go logo",
            heading: "Go",
            details: "Proficient",
        },
        {
            image: "https://ik.imagekit.io/iamadarshk/portfolio/languages/python_hZFJIqwhh.svg",
            imageDesc: "Python logo",
            heading: "Python",
            details: "Proficient",
        },
        {
            image: "https://ik.imagekit.io/iamadarshk/portfolio/languages/c_KeaschT52.svg",
            imageDesc: "C logo",
            heading: "C",
            details: "Experienced",
        },
        {
            image: "https://ik.imagekit.io/iamadarshk/portfolio/languages/html_ZYzstYSfa.svg",
            imageDesc: "HTML logo",
            heading: "HTML",
            details: "Familiar",
        },
        {
            image: "https://ik.imagekit.io/iamadarshk/portfolio/languages/css_iVC2whZCND.svg",
            imageDesc: "CSS logo",
            heading: "CSS",
            details: "Familiar",
        },
        {
            image: "https://ik.imagekit.io/iamadarshk/portfolio/languages/rust_wX2Of6zR1.svg",
            imageDesc: "Rust logo",
            heading: "Rust",
            details: "Learning",
        },
    ]
}

const getFrameworks = () => {
    return [
        {
            image: "https://ik.imagekit.io/iamadarshk/portfolio/frameworks/pytorch_6bV5zjoSEd.svg",
            imageDesc: "PyTorch logo",
            heading: "PyTorch",
            details: "Proficient",
        },
        {
            image: "https://ik.imagekit.io/iamadarshk/portfolio/frameworks/numpy_EmP1kykOb.svg",
            imageDesc: "Numpy logo",
            heading: "Numpy",
            details: "Proficient",
        },
        {
            image: "https://ik.imagekit.io/iamadarshk/portfolio/frameworks/pandas_XQaptBNPh.svg",
            imageDesc: "Pandas logo",
            heading: "Pandas",
            details: "Experienced",
        },
        {
            image: "https://ik.imagekit.io/iamadarshk/portfolio/frameworks/matplotlib_jcK9JoTwZ.svg",
            imageDesc: "Matplotlib logo",
            heading: "Matplotlib",
            details: "Familiar",
        },
    ]
}

const getAboutParagraph = () => {
    return "I am an aspiring developer based in New Delhi, India attending TIET, Patiala for my B.E. in Computer Engineering. I like to experiment with a lot of things and have made a few projects using new technologies in my free time. My go-to language for almost everything is Go, apart from scripting for which I prefer Python. I've also written a fair amount of C/C++ for my course-work and am learning Rust right now. I also occasionally work with simple hardware projects using Raspberry Pi 3/4s and NodeMCUs. I have also used Arduino UNOs while working on one of my course projects. Apart from these, I like to play FIFA, RPGs and am an avid flight simmer having played a lot of sims since FS95."
}

export const fetchAboutPageData = () => {
    const title = "About"
    const about = getAboutParagraph();
    const languages = getLanguages();
    const frameworks = getFrameworks();

    return [title, about, languages, frameworks];
}