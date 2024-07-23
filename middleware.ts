import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isAuthenticated = request.cookies.get('jwt');
    const url = request.url;

    if (isAuthenticated && (url.includes("/login") || url.includes("/register"))) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (isAuthenticated) {
        return NextResponse.next();
    }

    if (!url.includes("/login") && !url.includes("/register")) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: [
        '/profile/:path*',
        '/',
        '/explore',
        '/login',
        '/register'
    ],
};
