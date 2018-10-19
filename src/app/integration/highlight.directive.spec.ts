/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHighlightDirective } from './app-highlight.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <p appHighlight="cyan">First</p>
    <p appHighlight>Second</p>
  `
})
class DirectiveHostComponent {
}

describe('AppHighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveHostComponent, AppHighlightDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should highlight the first element with cyan', function () {
    const de = fixture.debugElement.queryAll(By.directive(AppHighlightDirective))[0];

    expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the second element with the default color', function () {
    const de = fixture.debugElement.queryAll(By.directive(AppHighlightDirective))[1];
    const directive = de.injector.get(AppHighlightDirective);

    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
