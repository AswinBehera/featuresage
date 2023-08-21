import { config } from "dotenv";
config();

import { z } from "zod";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { StructuredOutputParser, OutputFixingParser } from "langchain/output_parsers";

const model = new OpenAI({ temperature: 0 });


const parser = StructuredOutputParser.fromNamesAndDescriptions({
    Episode: "Name of podcast",
    Transcript: "Transcipt of podcast"
});

const formatInstructions = parser.getFormatInstructions();
export default async function  handler(req, res) {
  const { feature  } = req.body

 
  const prompt = new PromptTemplate({
    template:`
    {format_instructions}\n
    Create a narrative story about how {feature} helped solve a real world use case.  Make it into a podcast. The episode should highlight how {feature} specifically helped in their code implementation, using technical details.`,
    inputVariables: ["feature"],
    partialVariables: { format_instructions:formatInstructions },
  });



  const chain = new LLMChain({ llm: model, prompt});

  const result = await chain.call({ feature: feature });
  // Then save the post data to a database

  const [episodeLines, transcriptLines] = result.text.split('\n\nTranscript:\n');

// Extracting Episode
const episode = episodeLines.trim().replace('Episode: "', '').replace('"', '').replace("\n\n","");

// Extracting Transcript
const transcript = transcriptLines.trim();

  res.status(200).json({episode, transcript});
}
