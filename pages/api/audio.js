import fs from 'fs'
import path  from 'path';

import { config } from "dotenv";
config();
export default async function handler(req,res) 
{
    const {message} = req.body

        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/D38z5RcWu1voky8WS1ja`,{
            method:"POST",
            headers:{
                accept:"audio/mpeg ",
                "Content-Type":"application/json",
                "xi-api-key": process.env.ELEVENLABS_API_KEY 
            },
            body: JSON.stringify({
                text : message,
                voice_settings:{
                    stability: 0,
                    similarity_boost:0 
                }
            })
        })
        if(!response.ok)
        { 
            console.log("WRONG")
            throw new Error("Something went wrong")
        }
    
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer)
    
        const file = Math.random().toString(36).substring(7);
        fs.writeFile(path.join("public","audio", `${file}.mp3`), buffer, ()=>{
            console.log("file written ")
        })
        return res.status(200).json({file:`${file}.mp3`}) 
}