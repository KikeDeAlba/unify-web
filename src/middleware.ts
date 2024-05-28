import { NextResponse, type NextRequest } from 'next/server'
import { getTwitchClient } from './actions/twitch'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const twitcClient = await getTwitchClient()

    const response = NextResponse.next()

    if (request.nextUrl.pathname === '/' || request.nextUrl.pathname.startsWith('/api')) {
        return response
    }

    const authCookie = request.cookies.get('twitch-auth')

    if (!authCookie) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    try {
        const token = authCookie.value
        await twitcClient.validateToken(token)
    } catch {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return response
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/((?!_next/static|_next/image|favicon.ico|/api|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
}