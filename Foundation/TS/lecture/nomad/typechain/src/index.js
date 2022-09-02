"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var Block = /** @class */ (function () {
    function Block(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    Block.calculateHash = function (prevHash, height, data) {
        var toHash = "".concat(prevHash).concat(height).concat(data, "}");
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    };
    return Block;
}());
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        this.blocks = [];
    }
    Blockchain.prototype.getPrevHash = function () {
        if (this.blocks.length === 0)
            return "";
        return this.blocks[this.blocks.length - 1].hash;
    };
    Blockchain.prototype.addBlock = function (data) {
        var newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    };
    Blockchain.prototype.getBlocks = function () {
        return __spreadArray([], this.blocks, true);
    };
    return Blockchain;
}());
var blockchain = new Blockchain();
blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth one");
console.log(blockchain.getBlocks());
