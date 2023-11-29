'use strict';

const supertest = require('supertest');
const request = supertest('https://airportgap.com/api');
const expect = require('chai').expect;

module.exports = {request, expect};
