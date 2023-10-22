"use strict";
class SingletonClass {
    constructor() {
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new SingletonClass();
        }
        return this.instance;
    }
    log() {
        console.log("Singleton");
    }
}
const instance = SingletonClass.getInstance();
instance.log();
