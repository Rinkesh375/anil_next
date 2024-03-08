import { NextResponse } from "next/server";
/*MiddleWare for authentication and  redirection if user is logged in or not on the behalf of that */

export const middleware = (request) => {
    // Check if user is not logged in, then redirect to login page
    const isAuthenticated =  false  /* your logic to check if the user is authenticated */;
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
};

export const config = {
    // matcher: "/about" // This is only for the about page
    // matcher: "/about/:path*" // This is for all about nested routes
    matcher: ["/about", "/productlist"] // Apply middleware to multiple routes
};
