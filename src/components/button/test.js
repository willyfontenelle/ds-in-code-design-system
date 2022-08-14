import { fixture }  from '@open-wc/testing'
import { html } from 'lit'
import './index'

describe('Testing Button', () => {
    it('Test default prop', async () => {
        const element = await fixture(html`<dsc-button>Label test</dsc-button>`);
        console.log(element);

    })
})