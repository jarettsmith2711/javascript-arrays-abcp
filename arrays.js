var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(){
  chocolateBars = ["foo",...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(){
  chocolateBars = chocolateBars.unshift("foo")
}
function AddElementToEndOfArray(){
  chocolateBars = [...chocolateBars, "foo"]
}
function destructivelyAddElementToEndOfArray(){
  chocolateBars = chocolateBars.push("foo")
}