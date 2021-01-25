# wasm-test
Simple program that adds the squareroots of numbers 1-1073741824 in parallel.

The test.js and test.wasm were created with emscripten:
```em++ test.cpp -o test.js -s EXPORTED_FUNCTIONS='["_sum"]' -O3```
