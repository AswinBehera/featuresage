import { config } from "dotenv";
config();

import { z } from "zod";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { StructuredOutputParser, OutputFixingParser } from "langchain/output_parsers";

const model = new OpenAI({ temperature: 0 });
const parser = StructuredOutputParser.fromZodSchema(
  z.array(
      z.object({
        Feature: z.string().describe("Feature Name"),
        Description: z.string().describe("Feature Description"),
      })
    )
    .describe("An array of features")
);
const outputFixingParser = OutputFixingParser.fromLLM(model, parser);

export default async function  handler(req, res) {
  const { product } = req.body


  const prompt = new PromptTemplate({
    template:`
    {format_instructions}
  
    Question : List some of the latest features of {doc}, that you know of.`,
    inputVariables: ["doc"],
    partialVariables: { format_instructions: outputFixingParser.getFormatInstructions() },
  });

  const chain = new LLMChain({ llm: model, prompt, outputParser:outputFixingParser, outputKey:"features" });

  const result = await chain.call({ doc: product });
  // Then save the post data to a database
  res.status(200).json({ data: result.features});
}
