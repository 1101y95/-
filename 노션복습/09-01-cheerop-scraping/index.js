import  cheerio  from "cheerio";
import axios from "axios";

async function getOpenGraph(contents){

    const openGraph = {
        title: "",
        description: "",
        image:"",
        url:""
    }



    if(contents.includes("http")){
        let myHttpOg = "";

        contents.split(" ").forEach(element => {
            if(element.startsWith("http")){myHttpOg = element}
        });

        const html = await axios.get(myHttpOg)
        console.log(html.data)

        const $ = cheerio.load(html.data);

        $("meta").each((_,el)=>{
            if(!$(el).attr("property")) return

            console.log($(el).attr("property").split(":")[1])
            console.log($(el).attr("content"))
            console.log("===================================")


            const key = $(el).attr("property").split(":")[1]
            const content = $(el).attr("content")

            openGraph[key] = content


        })

        console.log(openGraph)
    }

   
}

const contents = "새로운 웹사이트!! https://naver.com"
getOpenGraph(contents)