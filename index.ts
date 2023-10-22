class SingletonClass {
    private static instance: SingletonClass;
    private constructor() {
    }
    static getInstance(): SingletonClass {
        if (!this.instance) {
            this.instance = new SingletonClass();
        }
        return this.instance;
    }

    log(): void {
        console.log("Singleton");
    }
}

const instance = SingletonClass.getInstance();
instance.log();