import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';
import { CourseOutline } from '../types/course';

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

export async function POST(request: NextRequest): Promise<NextResponse<CourseOutline | { error: string }>> {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Missing prompt' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: `
You are an expert course creator working with online entrepreneurs.

A user will give you a full prompt describing:
- Who they are
- Who their audience is
- What they teach
- What they want this course to do (lead magnet, paid product, etc.)

Your job is to:
- Parse this mentally
- Understand what kind of course would best serve their goals
- Output a full course outline

Format:
{
  "course_title": "...",
  "modules": [
    {
      "title": "...",
      "lessons": [
        {
          "title": "...",
        }
      ]
    }
  ]
}

Style rules:
- Write like a human — no robotic AI tone
- Be natural, creative, and outcome-focused
- Tailor it to their niche, tone, and use case
- Use plain, friendly language
- Generate 5-7 modules with 3-4 lessons each
- Make sure each lesson has a clear learning objective
- Include optional summaries only if they add value
          `
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: 2000,
      response_format: { type: 'json_object' }
    });

    const output = completion.choices[0].message.content;
    
    // Try to safely parse JSON
    let result: CourseOutline;
    try {
      // Remove any JSON markers if present
      const cleanOutput = output?.replace(/```json|```/g, '').trim();
      result = JSON.parse(cleanOutput);
    } catch (e) {
      console.error('JSON parsing error:', e);
      return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 500 });
    }

    return NextResponse.json(result);

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Something went wrong with the AI service' }, { status: 500 });
  }
}
