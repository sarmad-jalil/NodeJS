#!/usr/bin/env node
import * as utils from "./utils";
const { count } = require("./utils.js");
import fs from "node:fs";
import _ from "lodash";

const note = process.argv[2];
const newNote = {
  content: note,
  id: Date.now(),
};

console.log(newNote);
