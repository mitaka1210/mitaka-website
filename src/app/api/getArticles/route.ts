import { NextResponse } from 'next/server';

export async function GET() {
 try {
  // Fetch all articles from the external endpoint
  const response = await fetch('https://share.d-dimitrov.eu/api/articles');
  if (!response.ok) {
   throw new Error('Failed to fetch articles');
  }
  const articles = await response.json();
  // Return the fetched articles as JSON
  return NextResponse.json(articles);
 } catch (error) {
  console.log('Error fetching articles:', error);
  return NextResponse.json({ error: 'Failed to fetch data' });
 }
}