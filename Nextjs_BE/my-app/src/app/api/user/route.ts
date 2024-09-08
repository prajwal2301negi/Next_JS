// url-> /api/user

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export async function GET() {
    // database logic
    return Response.json({ username: "harkirat", email: "harkirat@gmail.com" })
}

// export async function POST(req:NextRequest) {
     // extract the body
//     const body = await req.json();

     // will get in VS Code
    // console.log(body);

     // database logic
//     return Response.json({message:"You are logged in" })
// }


export async function POST(req: NextRequest) {
    const body = await req.json();

    client.user.create({
        data:{
            username: body.username,
            password: body.password
        }
    })

    return NextResponse.json({ username: body.username, password: body.password })
}


