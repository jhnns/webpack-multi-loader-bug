# Webpack multi-loader bug

Probably cause for https://github.com/boopathi/react-svg-loader/issues/197

## Steps to reproduce

1. `git clone https://github.com/jhnns/webpack-multi-loader-bug.git`
1. `npm i`
1. `npm start`

## Notes

Only happens in "development" mode when `namedModules` defaults to `true`. Set it to `false` (or switch to "production" mode) and the error is gone.