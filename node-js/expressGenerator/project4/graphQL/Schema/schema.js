const graphql = require('graphql')
const _ = require('lodash')
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = graphql

var tesbarang =[
    {kode: "QWER123", nama_barang: "panci", jumlah: "500", milikid: 1},//!meberi object dengan value id untuk relasi array
    {kode: "ASD215", nama_barang: "wajan", jumlah: "1000", milikid: 2},
    {kode: "PLO124", nama_barang: "sendok", jumlah: "320", milikid: 3},
    {kode: "DSW098", nama_barang: "garpu", jumlah: "500", milikid: 2},
    {kode: "JKU323", nama_barang: "sekop", jumlah: "124", milikid: 1},
    {kode: "GJR232", nama_barang: "wajan", jumlah: "800", milikid: 3},

]
var tesorang = [
    {id: 1, nama: "budi warsana", umur: 18, gender: "pria"},
    {id: 2, nama: "wawan sampurna", umur: 16, gender: "pria"},
    {id: 3, nama: "komarnia", umur: 11, gender: "wanita"},
]
const DataBarang = new GraphQLObjectType({
    name: "databarang",
    fields:()=>({
        kode: {type: GraphQLID },
        nama_barang: {type: GraphQLString},
        jumlah: {type: GraphQLString},
        // menampilkan data orang saat menampilkan data barang
        orang: {   //!relasi databarang dengan dataorang
            type :DataOrang,//!nama data yang akan direlasi/gabungkan
            resolve(parent,args){ //!parent berisi object yang sedang diakses
                console.log(parent)
                return _.find(tesorang,{id:parent.milikid })
            }
        }
    })
})
const DataOrang = new GraphQLObjectType({
    name: "dataorang",
    fields:()=>({
        id: {type: GraphQLInt },
        nama: {type: GraphQLString},
        umur: {type: GraphQLInt},
        gender: {type: GraphQLString},
        //menampilkan data beberapa orang saat menampilkan data barang 
        barang: {
            type : new GraphQLList(DataBarang),
            resolve(parent,args){
                return _.filter(tesbarang,{milikid: parent.id})
            }
        }
    })
})
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        barang: {
            type: DataBarang,
            args: {kode: {type: GraphQLID }},
            resolve(parent,args){
                console.log(args) //!args berisi kode barang yang sedang di akses
             return   _.find(tesbarang,{kode:args.kode})
            }
        },
        Orang: {
            type : DataOrang,
            args: {id: {type: GraphQLInt}},
            resolve(parent, args){
                return _.find(tesorang,{id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})