// google analytics measurement id
const GA_TRACKING_ID = "";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

const COMPANY_NAME = "WebDefyer";
const COMPANY_EMAIL = "info@mail.webdefyer.com";
const EMAIL_LIST = "nikkschaefer@gmail.com, hazimarafa69@gmail.com";

const COMPANY_SOCIALS = {
	instagram: "https://www.instagram.com/webdefyer/",
	facebook: "https://www.facebook.com/web.defyer",
	linkedin: "https://www.linkedin.com/company/webdefyer",
};
    
type MetaType = {
    title: string,
    lang: string,
    description: string,
    image: string,
    url:string
}
const META: MetaType = {
    title: "NextJS Boilerplate | Nik Schaefer",
    lang: "en-us",
    description: "Boilerplate built to scale containing Typescript + NextJS + Google Analytics + ESLint + Jest + Styled Components + Icons",
    image: "/logo.png",
    url: "https://boilerplate.nikschaefer.tech"
}

export {
	COMPANY_SOCIALS,
	GA_TRACKING_ID,
	IS_PRODUCTION,
	COMPANY_NAME,
	COMPANY_EMAIL,
	EMAIL_LIST,
	META,
};