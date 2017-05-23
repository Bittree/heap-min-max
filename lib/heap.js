/**
 * Created by ruihong.it@gmail.com on 2017/5/23.
 */


class BaseHeap{
    constructor(isMinHeap){
        this.items = [];
        this._isMinHeap = isMinHeap === true;
    }

    push(key, value){
        this.items.push([key, value]);
        for (let i = (this.items.length - 1) >> 1; i >= 0; i -= 1){
            this._sort(i);
        }
    }

    pop(){
        if (this.items.length === 0){
            return undefined;
        }
        this._swap(0, this.items.length - 1);
        let ret = this.items.pop();
        if (this.items.length > 0) {
            this._sort(0);
        }
        return ret[1];
    }

    top(){
        if (this.items.length > 0) {
            return this.items[0][1]
        }
        else {
            return undefined;
        }
    }

    _sort(root){
        if (root < 0){
            return;
        }
        let left = root * 2 + 1;
        let right = root * 2 + 2;
        if (left >= this.items.length){
            return;
        }

        if (right >= this.items.length){
            if (this.items[root][0] > this.items[left][0] && this._isMinHeap
            || this.items[root][0] < this.items[left][0] && !this._isMinHeap){
                this._swap(root, left);
                this._sort(left)
            }
        }
        else {
            if (this.items[left][0] < this.items[right][0] && this.items[left][0] < this.items[root][0] && this._isMinHeap
                || this.items[left][0] > this.items[right][0] && this.items[left][0] > this.items[root][0] && !this._isMinHeap) {
                this._swap(root, left);
                this._sort(left)
            }
            else if (this.items[right][0] < this.items[left][0] && this.items[right][0] < this.items[root][0] && this._isMinHeap
                || this.items[right][0] > this.items[left][0] && this.items[right][0] > this.items[root][0] && !this._isMinHeap) {
                this._swap(root, right);
                this._sort(right)
            }
        }

    }

    _swap(i, j){
        let tmp = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = tmp;
    }
}

class MinHeap extends BaseHeap{
    constructor(){
        super(true)
    }
}

class MaxHeap extends BaseHeap{
    constructor(){
        super(false)
    }
}

exports = module.exports = {};

exports.MinHeap = MinHeap;
exports.MaxHeap = MaxHeap;

