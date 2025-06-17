import conf from '../conf/conf.js';

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.projectid);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    
    async createPost({ title, content, slug, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.databaseid,
                conf.collectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);

        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.databaseid,
                conf.collectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);

        }
    }

    async deletepost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.databaseid,
                conf.collectionid,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.databaseid,
                conf.collectionid,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                conf.databaseid,
                conf.collectionid,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error", error);
            return false;
        }
    }

    //file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.bucketid,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.bucketid,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error);
            return false;
        }
    }

    getFileUrl(fileId) {
        try {
            return this.bucket.getFilePreview(
                conf.bucketid,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: getFileUrl :: error", error);
            return false;
        }
    }
}

const service = new Service();

export default service;

