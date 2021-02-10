import { async, TestBed } from '@angular/core/testing';
import { BlockchainViewerComponent } from './blockchain-viewer.component';
describe('BlockchainViewerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BlockchainViewerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BlockchainViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=blockchain-viewer.component.spec.js.map