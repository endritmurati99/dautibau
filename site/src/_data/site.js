const isProduction = process.env.SITE_ENV === "production";
const url = (process.env.SITE_URL || "").trim().replace(/\/$/, "");

if (isProduction) {
  if (!url) throw new Error("SITE_URL is required when SITE_ENV=production");

  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    throw new Error("SITE_URL must be a valid absolute URL when SITE_ENV=production");
  }

  const forbiddenHosts = ["trycloudflare.com", "github.io", "localhost", "127.0.0.1"];
  if (parsedUrl.protocol !== "https:") throw new Error("SITE_URL must use HTTPS in production");
  if (forbiddenHosts.some((host) => parsedUrl.hostname === host || parsedUrl.hostname.endsWith(`.${host}`))) {
    throw new Error(`SITE_URL uses a forbidden preview host: ${parsedUrl.hostname}`);
  }
}

export default {
  name: "Dautibau",
  owner: "Nexhbedin Dauti",
  tagline: "Trockenbau und Innenausbau",
  city: "Düsseldorf",
  phoneDisplay: "0176 23939474",
  phoneHref: "tel:+4917623939474",
  whatsapp: "https://wa.me/4917623939474?text=Hallo%20Dautibau%2C%20ich%20m%C3%B6chte%20ein%20Projekt%20besprechen.",
  street: "Münsterstraße 360",
  zip: "40470",
  region: "Düsseldorf und Umgebung",
  email: "[E-Mail vor Veröffentlichung ergänzen]",
  phoneInternational: "+4917623939474",
  url,
  isProduction,
  robots: isProduction ? "index,follow" : "noindex,nofollow,noarchive",
  socialImage: "/assets/social-card.jpg",
  nav: [
    { title: "Start", url: "/" },
    { title: "Leistungen", url: "/leistungen/" },
    { title: "Referenzen", url: "/referenzen/" },
    { title: "Galerie", url: "/galerie/" },
    { title: "Über uns", url: "/ueber-uns/" },
    { title: "Kontakt", url: "/kontakt/" },
  ],
};
