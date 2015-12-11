/// <reference path="../typings/main.d.ts"/>

import <%= _.camelize(moduleName) %> from '../lib/index';
import {expect} from 'chai';


describe('<%= _.slugify(moduleName) %>', () => {
  it('should <%= moduleDescription %>', async() => {
    expect(true).to.equal(true);

  });
});

