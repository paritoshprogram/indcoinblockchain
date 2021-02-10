var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
var BlockViewComponent = /** @class */ (function () {
    function BlockViewComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocksInChain = blockchainService.blockchainInstance.chain;
    }
    BlockViewComponent.prototype.ngOnInit = function () {
    };
    BlockViewComponent.prototype.blockHasTx = function () {
        return this.block.transactions.length > 0;
    };
    BlockViewComponent.prototype.isSelectedBlock = function () {
        return this.block === this.selectedBlock;
    };
    BlockViewComponent.prototype.getBlockNumber = function () {
        return this.blocksInChain.indexOf(this.block) + 1;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BlockViewComponent.prototype, "block", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BlockViewComponent.prototype, "selectedBlock", void 0);
    BlockViewComponent = __decorate([
        Component({
            selector: 'app-block-view',
            templateUrl: './block-view.component.html',
            styleUrls: ['./block-view.component.scss']
        }),
        __metadata("design:paramtypes", [BlockchainService])
    ], BlockViewComponent);
    return BlockViewComponent;
}());
export { BlockViewComponent };
//# sourceMappingURL=block-view.component.js.map