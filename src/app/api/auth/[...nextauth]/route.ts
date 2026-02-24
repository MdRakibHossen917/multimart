import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions, isAuthConfigured } from "@/lib/auth";

const handler = NextAuth(authOptions);

const getFallbackAuthResponse = (req: NextRequest) => {
	const pathname = new URL(req.url).pathname;

	if (pathname.endsWith("/session")) {
		return NextResponse.json(null);
	}

	if (pathname.endsWith("/providers")) {
		return NextResponse.json({});
	}

	if (pathname.endsWith("/csrf")) {
		return NextResponse.json({ csrfToken: "" });
	}

	return NextResponse.json(
		{
			error: "AUTH_NOT_CONFIGURED",
			message: "Authentication is not configured on the server.",
		},
		{ status: 503 }
	);
};

export const GET = (req: NextRequest, ctx: unknown) => {
	if (!isAuthConfigured) {
		return getFallbackAuthResponse(req);
	}

	return handler(req, ctx);
};

export const POST = (req: NextRequest, ctx: unknown) => {
	if (!isAuthConfigured) {
		return getFallbackAuthResponse(req);
	}

	return handler(req, ctx);
};