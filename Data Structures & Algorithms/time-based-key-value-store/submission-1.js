class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        this.keyStore.set(key, [...(this.keyStore.get(key) ?? []), [value, timestamp]]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let res="";

        const valueAr = this.keyStore.get(key) ?? [];

        let l=0,r=valueAr.length-1;

        while(l <= r){
            let mid = Math.floor((l+r)/2);
            //2 3 4 5 6 7 8
            if(valueAr[mid][1] <= timestamp){
                res = valueAr[mid][0];
                l=mid+1
            }else{
                r=mid-1;
            }
        }
        return res;
    }
}
