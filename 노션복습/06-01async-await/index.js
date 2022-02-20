import axios from "axios";

async function fetchPost(){
    const result = await axios.get("https://koreajson.com/posts/1")
    console.log(result)
}

fetchPost();