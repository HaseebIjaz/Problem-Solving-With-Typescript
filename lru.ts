class LRUCache<K,V> {

    public cache: Map<K,V>;
    public capacity: number;
    
    constructor(capacity: number) {
        this.cache = new Map<K,V>();
        this.capacity = capacity;
    }
    //Implementing Get Method
    get(key:K) {
        if(!this.cache.has(key)) return undefined;

        let val:V = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key,val);
        
        return val;
    }
    put(key:K,val:V) {
        this.cache.delete(key);

        if(this.cache.size === this.capacity){
            this.cache.delete(this.cache.keys().next().value);
            this.cache.set(key,val);
        }
        else{
            this.cache.set(key,val);
        }
    }

    getLeastRecent() {
        return Array.from(this.cache)[0];
    }

    getMostRecent() {
        return Array.from(this.cache)[this.cache.size - 1];
    }
    
}
