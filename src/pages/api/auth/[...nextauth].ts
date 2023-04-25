import NextAuth from 'next-auth'

export default NextAuth({
	providers: [],
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/auth/login', // Displays signin buttons
		// signOut: '/auth/signout', // Displays form with sign out button
		// error: '/auth/error', // Error code passed in query string as ?error=
		// verifyRequest: '/auth/verify-request', // Used for check email page
		// newUser: null // If set, new users will be directed here on first sign in
	},
})
