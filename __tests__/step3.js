'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-pwaskfbe:step3', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/step3'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
