import { Component, h, Prop, Element } from "@stencil/core";

@Component({
    tag: 'any-input'
})
export class AnyInput {

    @Prop() disabled: boolean = false;
    @Prop() targetFirstLetter!: string;
    @Prop() letters!: string;
    @Element() el: HTMLElement;

    componentWillLoad() {
        const inputs: HTMLInputElement[] = Array.from(this.el.querySelectorAll('input,textarea'));
        inputs.forEach((input) => input.addEventListener('keypress', (e) => this.handleKeypress(e, input)));
    }

    render = () => <slot/>;

    private handleKeypress(e: any, input: HTMLInputElement): void {
        if (this.disabled) {
            return;
        }
        const keyCode = e.keyCode || e.which;
        const charIndex: number = this.letters.indexOf(String.fromCharCode(keyCode));
        if (charIndex > -1) {
          const newIndex: number = input.selectionStart + 1;
          const leftText: string = input.value.substring(0, input.selectionStart);
          const rightText: string = input.value.substring(input.selectionEnd);
          input.value = leftText + String.fromCharCode(charIndex + this.targetFirstLetter.charCodeAt(0)) + rightText;
          input.setSelectionRange(newIndex, newIndex);
          e.preventDefault();
        }
    }
}