const re=/hello/
//const re = /^hello/ => starts with hello
//const re = /hello$/ => ends with hello
//const re=/^hel{1,2}o$/ => 1-2 "l" it will return true
//const re=/^hel{1,2}o[0-9][a-z]$/ => after hello it accepts 0-9 or a-z
const result=re.test('hello')

console.log('result',result)

//NRIC
const ree=/^[SI][0-9]{7}[A-Z]$/

const resulte=ree.test('S1111111A')

console.log('resulte',resulte)