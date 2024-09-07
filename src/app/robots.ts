import { MetadataRoute } from "next";

export default function robot():MetadataRoute.Robots{
        return{
            rules:[
                {
                    userAgent:"*",
                    allow:"/",
                    disallow:["/admin","privacy","private"]
                }
            ],
            sitemap:'https://aythamisantana.pages.dev/sitemap.xml'
        }
}