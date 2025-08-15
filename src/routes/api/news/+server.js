import { parse } from "node-html-parser";

const url = "https://megacrit.com/news/"

export async function GET() {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const newsContainer = parse(data).getElementById("news-container")
    const linkElement = newsContainer.querySelector(".post-thumbnail > a");
    const titleElement = newsContainer.querySelector(".entry-title > a");

    const link = linkElement ? "https://megacrit.com" + linkElement.rawAttrs.split("=")[1].replaceAll("\'", "") : null;
    const title = titleElement ? titleElement.textContent : null;

    return new Response(JSON.stringify({
      link: link,
      title: title
    }), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Failed to fetch news" }), { status: 500 });
  }
}
