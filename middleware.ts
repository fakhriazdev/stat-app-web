import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isAuthenticated = request.cookies.get('jwt');
    const url = request.url;

    // Redirect to home if authenticated user tries to access /login or /register
    if (isAuthenticated && (url.includes("/login") || url.includes("/register"))) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // Allow access to authenticated users for other paths
    if (isAuthenticated) {
        return NextResponse.next();
    }

    // Redirect to /login for unauthenticated users accessing protected routes
    if (!isAuthenticated && (url.includes("/profile") || url === "/explore")) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow access to public routes like /, /login, /register for unauthenticated users
    return NextResponse.next();
}

export const config = {
    matcher:  [
        '/profile/:path*',
        '/',
        '/explore',
        '/login',
        '/register'
    ],
};
