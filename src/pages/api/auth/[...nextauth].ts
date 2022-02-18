import { query as q } from 'faunadb'

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from '../../../services/fauna'


export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user'
        }
      }
    }),
  ],
  callbacks: {
    async signIn({user, account, profile}) {
      const { email } = user;

      try {
        await fauna.query(
          q.If(
            // If not exist an user that match user mail in casefold in the index, will do the first parameter, if exist, wil do the second parameter.
            q.Not(q.Exists(q.Match( 
              q.Index("user_by_email"), q.Casefold(user.email) 
            ))),
            // First parameter.
            q.Create( 
              q.Collection("users"), { data: { email } } 
            ),
            // Second parameter.
            q.Get(q.Match( 
              q.Index("user_by_email"), q.Casefold(user.email) 
            ))
          )
        );
        
        return true;
      } catch {
        return false;
      }
    },
  }
})