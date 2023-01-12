const { ApolloServer, gql } = require("apollo-server")
const axios = require("axios")

const typeDefs = gql `
    type Hero {
        id: String
        name: String
        powerstats: PowerStat
    }

    type PowerStat {
        intelligence: String,
        strength: String,
        speed: String,
        durability: String,
        power: String,
        combat: String
    }

    type Query {
        getHero(id: Int): Hero
    }
    `

const resolvers = {
    Query: {
        // getHero: async({id}) => 

        getHero: async(id) => {
            
                const response = await fetch(`https://superheroapi.com/api/5992222327487555/${id}`);
                return response.json();
                // return heroes.data.map(({id, name }) => ({
                //     id,
                //     name,
                // }))
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({url})=> console.log(`Server ready at ${url}`))

// type Powerstat {
//     intelligence: Int,
//     strength: Int,
//     speed: Int,
//     durability: Int,
//     power: Int,
//     combat: Int
//     author: Hero!