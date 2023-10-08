const graphql = require('graphql')
const _ = require('lodash')
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql

var tesbarang =[
    {kode: "QWER123", nama_barang: "panci", jumlah: "500"},
    {kode: "ASD215", nama_barang: "wajan", jumlah: "1000"},
    {kode: "PLO124", nama_barang: "sendok", jumlah: "320"},
]

const DataBarang = new GraphQLObjectType({
    name: "databarang",
    fields:()=>({
        kode: {type: GraphQLString},
        nama_barang: {type: GraphQLString},
        jumlah: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        barang: {
            type: DataBarang,
            args: {kode: {type: GraphQLString}},
            resolve(parent,args){
             return   _.find(tesbarang,{kode:args.kode})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})