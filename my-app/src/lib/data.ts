import { Bold } from "lucide-react";

// File: lib/data.ts
export const topics = [

  //Assigment-1

  {
    slug: "Prompt-Engineering",
    title: "Prompt Engineering And Context Engineering",
    description: "Difference Between Prompt and Context Engineering",
    content1: "Prompt engineering uses well crafted language to guide AI while context engineering builds structured environments with tools memory and retrieval Prompting is fast and accessible but brittle context engineering supports complex scalable AI but adds system complexity. Prompt engineering focuses on wording while context engineering focuses on architecture. Prompt engineering is like writing instructions context engineering is like building a workspace. Both are essential for effective AI solutions.",
    content2:"context engineering. Building with language models is becoming less about finding the right words and phrases for your prompts, and more about answering the broader question of “what configuration of context is most likely to generate our model's desired behavior?. Context refers to the set of tokens included when sampling from a large-language model (LLM). The engineering problem at hand is optimizing the utility of those tokens against the inherent constraints of LLMs in order to consistently achieve a desired outcome. Effectively wrangling LLMs often requires thinking in context ",
    image:"/images/topic1.jpg"},

    //Assigment-2 
{
  slug: "Prompt-Techniques",
  title: "Prompt Techniques",
  description: "Practices for effective prompt engineering Zero-shot One-shot and Few-shot prompting",
  content1:["Zero-shot prompting","\n", "One-shot prompting","\n", "Few-shot prompting",],
  content2: [""],
  image: "/images/topic2a.jpg",
},

// Assigment-3
{
  slug: "COT-and-TOT",
  title: "Chain Of Thought (COT) and Tree of Thought (TOT) Prompting",
  description: "Exploring advanced methods in prompt engineering",
  content1: [
    "Chain of Thought (COT) prompting:",
    "Chain of Thought (CoT) prompting is a technique used in natural, language processing to enhance the reasoning capabilities of language models. By encouraging the model to generate intermediate reasoning steps, CoT prompting helps break down complex problems into manageable parts, leading to more accurate and coherent responses. This method is particularly useful for tasks that require multi-step reasoning, such as mathematical problem-solving or logical deduction. By providing a structured approach to reasoning, CoT prompting improves the model's ability to understand and generate human-like explanations.",
  
"Chain of Thought (CoT) Example:","\n",
"This follows a single, linear path of reasoning.","\n",
"Input: A user asks .What is 5 + 8?","\n",
"Thought 1: The input is a simple arithmetic problem: addition.",
"Thought 2: I need to add the number 5 and the number 8 together.",
"Thought 3: Counting 8 steps up from 5: 6, 7, 8, 9, 10, 11, 12, 13.",
"Thought 4: Alternatively, using known arithmetic facts, 5 + 8 equals 13.","\n",
"Output: 5 + 8 = 13."
],
  content2: [" Tree of Thought (TOT) prompting Bold",
    "Tree of Thought (ToT) prompting is an advanced technique in natural language processing that extends the concept of Chain of Thought (CoT) prompting. While CoT focuses on linear reasoning paths, ToT allows for branching thought processes, enabling the model to explore multiple lines of reasoning simultaneously. This approach is particularly beneficial for complex problem-solving tasks where multiple solutions or perspectives may exist. By structuring prompts to encourage divergent thinking, ToT prompting enhances the model's ability to generate more comprehensive and nuanced responses."
  ,"Tree of Thoughts (ToT) Example",
"This explores multiple reasoning paths simultaneously.","\n",
"Input: A user asks, Suggest a simple dinner recipe.",
"Thought (Initial): The user wants a simple recipe for dinner. What defines \"simple\"? (e.g., few ingredients, quick cooking time, common ingredients).",

"Branch 1 (Pasta Focus):Thought 1a: Pasta is often simple. How about Aglio e Olio?",
"Thought 1b: Ingredients: Spaghetti, garlic, olive oil, chili flakes, salt. Very few.",
"Thought 1c: Steps: Boil pasta, sauté garlic/chili in oil, combine. Very quick.",
"(Potential Path Output 1: Recipe for Spaghetti Aglio e Olio)",

"Branch 2 (Egg Focus):Thought 2a: Eggs are simple and quick. How about scrambled eggs or an omelette?",
"Thought 2b: Ingredients: Eggs, milk/water (optional), salt, pepper, butter/oil. Maybe add cheese or simple veggies.",
"Thought 2c: Steps: Whisk eggs, cook in a pan. Very fast.",
"(Potential Path Output 2: Recipe for Scrambled Eggs/Omelette)",
"Branch 3 (Sandwich Focus):Thought 3a: A simple sandwich can be dinner. Grilled cheese?",
"Thought 3b: Ingredients: Bread, cheese, butter. Very basic.",
"Thought 3c: Steps: Assemble sandwich, grill in a pan until golden and cheese melts. Quite simple.",
"(Potential Path Output 3: Recipe for Grilled Cheese Sandwich)",
"Evaluation & Output: All three paths (Aglio e Olio, Scrambled Eggs, Grilled Cheese) lead to simple dinner recipes."],

image: "/images/cot-tot.jpeg",
}

];
