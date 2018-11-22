'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-pwaskfbe:step6', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/step6'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
