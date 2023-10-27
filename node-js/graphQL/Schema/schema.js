const graphql = require('graphql')
const _ = require('lodash')
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt,GraphQLList,GraphQLNonNull } = graphql
const Jurusan = require('../models/jurusan')
const Mahasiswa = require('../models/mahasiswa')
const jurusan = require('../models/jurusan')

const jurusanType = new GraphQLObjectType({
    name: "jurusan",
    fields:()=>({
        jurusan: {type: GraphQLString},
        kaprodi: {type: GraphQLString},
        mahasiswa: { //!relasi data jurusan dan mahasiswa ddengan id sebagai parameter
            type : new GraphQLList(mahasiswaType),
            resolve(parent,args){
                return Mahasiswa.find({jurusanId:parent.id})
            }
        }
    })
})
const mahasiswaType = new GraphQLObjectType({
    name: "mahasiswa",
    fields:()=>({
        jurusanId: {type: GraphQLID },
        nama: {type: GraphQLString},
        umur: {type: GraphQLInt},
        prodi: {   
            type :jurusanType,
            resolve(parent,args){ 
                console.log(parent)
                return jurusan.findById(parent.jurusanId)
            }
        }

    })
})
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        prodi: {
            type: jurusanType,
            args: {id: {type: GraphQLID }},
            resolve(parent,args){
                console.log(args) //!args berisi kode barang yang sedang di akses
            return Jurusan.findById(args.id)
            }
        },
        mahasiswa: {
            type : mahasiswaType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
            return Mahasiswa.findById(args.id)
            }
            //!menampilkan semua data dari array
        },allMahasiswa : {
            type: new GraphQLList(mahasiswaType),
            resolve (parent, args){
            return Mahasiswa.find({})
            }
        },
        allJurusan : {
            type: new GraphQLList(jurusanType),
            resolve (parent, args){
            return Jurusan.find({})
            }

        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "mutation",
    fields : {
        addjurusan : {
            type : jurusanType,
            args :{
                jurusan : {type : new GraphQLNonNull (GraphQLString)},
                kaprodi : {type : new GraphQLNonNull (GraphQLString)}
            },
            resolve(parent, args){
                let jurusan = new Jurusan ({
                    jurusan : args.jurusan,
                    kaprodi : args.kaprodi
                })
                return jurusan.save()
            }
        },
        addmahasiswa : {
            type: mahasiswaType,
            args : {
                nama: {type: GraphQLString},
                umur: {type: GraphQLInt},
                jurusanId: {type: GraphQLID}
            },
            resolve(parent, args){
                let mahasiswa = new Mahasiswa({
                    nama: args.nama,
                    umur: args.umur,
                    jurusanId: args.jurusanId
                })
                return mahasiswa.save()
            }
        }

    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation : Mutation
})