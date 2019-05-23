// define member data
const teamData = [{ src: "/img/jonsimmons.jpg", alt: "portrait of jon simmons", heading3: "Jon Simmons", paragraph: "Team Lead" }, { src: "/img/lennoxprincejr.jpg", alt: "portrait of lennox prince", heading3: "Lennox Prince Jr.", paragraph: "UX Designer" }, { src: "/img/benjaminchandler.jpg", alt: "portrait of benjamin chandler", heading3: "Benjamin Chandler", paragraph: "Backend Developer" }, { src: "/img/douglasbowen.jpg", alt: "portrait of douglas bowen", heading3: "Douglas Bowen", paragraph: "Frontend Developer" }, { src: "/img/peishanlee.jpg", alt: "portrait of peishan lee", heading3: "Peishan (Penny) Lee", paragraph: "Web UI Developer" }, { src: "/img/josemarianriagu.jpg", alt: "portrait of josemaria nriagu", heading3: "Josemaria Nriagu", paragraph: "Web UI Developer" },];

// get parent container
const teambox = document.querySelector('.team-box');

// ********************************************************************************************************************

// define feature data
const features = [{ src: "/img/icons/feature_1.png", alt: "feature-1", heading2: "Super Secured", paragraph: "All information is securely stored on our database. We understand the rights of the inmates and their personal information can only be accessed by the administration team." }, { src: "/img/icons/feature_2.png", alt: "feature-2", heading2: "Reliable", paragraph: "Information on facilities are extensively verified and inmates skills are updated in real time to provide a reliable experience for users and potential contractors." }, { src: "/img/icons/feature_3.png", alt: "feature-3", heading2: "User-friendly", paragraph: "Simplistic designs, clean dashboard and uncluttered interfaces make for easy navigation, posting by administrators, searching and recruiting by potential contractors." },];

// get parent container
const featuresbox = document.querySelector('.features-box');

// get anchor tags
const anchor_tag = Array.from(document.querySelectorAll('nav a'));

// get scrolltop button
const scroll_top = document.querySelector('.scroll-top');

// get header wrapper and header top
const header_wrapper = document.querySelector('.header-wrapper');
const header_top = document.querySelector('.header-top');

// get header bottom
const header_bottom = document.querySelector('.header-bottom');

// get mobile menu button
const menu_btn = document.querySelector('.fas');

// get mobile menu
const menu = document.querySelector('.menu-mobile');

// get overlay
const overlay = document.querySelector('.drawer-overlay');