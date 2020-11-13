import {storage, storageName} from "@core/utils";

export default class LocalStorageClient {
    constructor(name) {
        this.name = storageName(name);
    }

    save(s) {
        storage(this.name, s);
        return Promise.resolve();
    }

    get() {
        // return Promise.resolve(storage(this.name));
        return new Promise((resolve) => {
            const state = storage(this.name);

            setTimeout(() => {
                resolve(state);
            }, 2000);
        });
    }
}