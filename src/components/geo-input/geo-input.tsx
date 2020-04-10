import { Component, h } from "@stencil/core";

@Component({
    tag: 'geo-input'
})
export class GeoInput {
    render() {
        return (<any-input letters="abgdevzTiklmnopJrstufqRySCcZwWxjh" targetFirstLetter="ა">
            <slot />
        </any-input>)
    }
}