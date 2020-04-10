import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'geo-input'
})
export class GeoInput {
    
    @Prop() disabled: boolean = false;
    
    render() {
        return (<any-input disabled={this.disabled} letters="abgdevzTiklmnopJrstufqRySCcZwWxjh" targetFirstLetter="ა">
            <slot />
        </any-input>)
    }
}