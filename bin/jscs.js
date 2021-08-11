#!/usr/bin/env node
/**
 * This file is part of JsCS package.
 */

'use strict';

const JsCs = new (require('../src/JsCs'));

JsCs.initialize(
    process.argv.splice(2, 1),
    process.argv.splice(2)
);