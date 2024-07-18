import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isAuthenticated = request.cookies.get('jwt');
    const url = request.url;

    // If authenticated and trying to access /login or /register, redirect to /
    if (isAuthenticated && (url.includes("/login") || url.includes("/register"))) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If authenticated and not trying to access /login or /register, allow access
    if (isAuthenticated) {
        return NextResponse.next();
    }

    // If not authenticated, redirect to /login for all configured routes except /login and /register
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
