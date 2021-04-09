import React from "react";
import {act} from "react-dom/test-utils";
import ReactDOM from 'react-dom';
import DefaultTest from "./defaultTest";

describe('DefaultTest', function () {
    it('should display text', function() {
        let container = document.createElement('div');
        document.body.appendChild(container);

        act(() => {
            ReactDOM.render(<DefaultTest/>, container)
        })
        const header = container.querySelector('h2');
        expect(header.textContent).toBe('Test Value');
    })
})