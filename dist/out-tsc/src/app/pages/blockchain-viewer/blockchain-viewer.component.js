var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
var BlockchainViewerComponent = /** @class */ (function () {
    function BlockchainViewerComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocks = [];
        this.selectedBlock = null;
        this.blocks = blockchainService.blockchainInstance.chain;
        this.selectedBlock = this.blocks[0];
        console.log(this.blocks);
    }
    BlockchainViewerComponent.prototype.ngOnInit = function () {
    };
    BlockchainViewerComponent.prototype.showTransactions = function (block) {
        console.log(block);
        this.selectedBlock = block;
        return false;
    };
    BlockchainViewerComponent.prototype.blockHasTx = function (block) {
        return block.transactions.length > 0;
    };
    BlockchainViewerComponent.prototype.selectedBlockHasTx = function () {
        return this.blockHasTx(this.selectedBlock);
    };
    BlockchainViewerComponent.prototype.isSelectedBlock = function (block) {
        return this.selectedBlock === block;
    };
    BlockchainViewerComponent.prototype.getBlockNumber = function (block) {
        return this.blocks.indexOf(block) + 1;
    };
    BlockchainViewerComponent = __decorate([
        Component({
            selector: 'app-blockchain-viewer',
            templateUrl: './blockchain-viewer.component.html',
            styleUrls: ['./blockchain-viewer.component.scss']
        }),
        __metadata("design:paramtypes", [BlockchainService])
    ], BlockchainViewerComponent);
    return BlockchainViewerComponent;
}());
export { BlockchainViewerComponent };
//# sourceMappingURL=blockchain-viewer.component.js.map