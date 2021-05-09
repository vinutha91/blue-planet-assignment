import { Component } from '@angular/core';

export function MockChildComponent(options: Component): Component {
    const metadata: Component = {
        selector: options.selector,
        template: options.template || '',
        inputs: options.inputs || [],
        outputs: options.outputs || [],
        exportAs: options.exportAs || ''
    }
    class Mock { }
    return Component(metadata)(Mock as any);
}