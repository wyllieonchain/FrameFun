import { NextRequest, NextResponse } from 'next/server';

//Processes the ID from the query string
/*async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)*/

//read the id (similar to the end pinata)

async function getResponse(req: NextRequest): Promise<NextResponse> {
const data = await req.json();
const id = data.untrustedData.buttonIndex;

// have my two cases, route to the right one
  if(id === 1){
      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>Good</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/1.png" />
    <meta property="fc:frame:button:1" content="Still trade onchain" />
    <meta property="fc:frame:button:2" content="I don't anymore" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/run?${id}" />
  </head></html>`);
  } else if(id === 2) {
  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>You suck</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/02.png" />
    <meta property="fc:frame:button:1" content="Restart" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end?${id}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';